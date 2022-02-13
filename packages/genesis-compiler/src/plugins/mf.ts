import {
    CompilerType,
    MF,
    Plugin,
    SSR,
    WebpackHookParams
} from '@fmfe/genesis-core';
import crypto from 'crypto';
import fflate from 'fflate';
import find from 'find';
import fs from 'fs';
import path from 'path';
import upath from 'upath';
import webpack from 'webpack';
import write from 'write';

import { relativeFilename } from '../utils';

function getExposes(ssr: SSR, mf: MF) {
    const exposes: Record<string, string> = {};

    Object.keys(mf.options.exposes).forEach((key) => {
        const filename = mf.options.exposes[key];
        const sourceFilename = path.isAbsolute(filename)
            ? filename
            : path.resolve(ssr.srcDir, filename);
        const relativePath = relativeFilename(ssr.srcDir, sourceFilename);
        const writeFilename = path.join(ssr.outputDirInTemplate, relativePath);
        const webpackPublicPath: string = relativeFilename(
            writeFilename,
            path.resolve(ssr.outputDirInTemplate, 'webpack-public-path')
        );

        const template = `import "${upath.toUnix(webpackPublicPath)}";
export * from "${relativeFilename(writeFilename, sourceFilename)}";`;
        write.sync(writeFilename, template);

        exposes[key] = writeFilename;
    });
    return exposes;
}

function getRemotes(mf: MF, isServer: boolean) {
    const remotes: Record<string, string> = {};

    mf.options.remotes.forEach((item) => {
        const varName = SSR.fixVarName(item.name);
        const exposesVarName = mf.getWebpackPublicPathVarName(item.name);
        if (isServer) {
            const code = `promise (async function () {
var remoteModule = global["${exposesVarName}"];
await remoteModule.init(); 
return require(remoteModule.filename);
})();
`;
            remotes[item.name] = code;
            return;
        }
        remotes[item.name] = `promise new Promise(function (resolve, reject) {
            var script = document.createElement('script')
            script.src = window["${exposesVarName}"];
            script.onload = function onload() {
              var proxy = {
                get: (request) => window["${varName}"].get(request),
                init: (arg) => {
                  try {
                    return window["${varName}"].init(arg)
                  } catch(e) {
                    console.log('remote container already initialized')
                  }
                }
              }
              resolve(proxy)
            }
            script.onerror = function onerror() {

                document.head.removeChild(script);
            }
            document.head.appendChild(script);
          })
          `;
    });

    return remotes;
}
export class MFPlugin extends Plugin {
    public constructor(ssr: SSR) {
        super(ssr);
    }
    public chainWebpack({ config, target }: WebpackHookParams) {
        const { ssr } = this;
        const mf = MF.get(ssr);
        const entryName = mf.entryName;

        const name = mf.name;
        const hash = ssr.isProd ? '.[contenthash:8]' : '';
        const exposes = getExposes(ssr, mf);
        config.plugin('module-federation').use(
            new webpack.container.ModuleFederationPlugin({
                name,
                filename: `js/${entryName}${hash}.js`,
                exposes,
                library:
                    target === 'client'
                        ? undefined
                        : { type: 'commonjs-module' },
                remotes: getRemotes(mf, target === 'server'),
                shared: mf.options.shared
            })
        );
    }
    public afterCompiler(type: CompilerType) {
        const { ssr } = this;
        const mf = MF.get(ssr);

        if (!mf.haveExposes) return;

        const client = this._getVersion(ssr.outputDirInClient);
        const server = this._getVersion(ssr.outputDirInServer);
        const data = {
            client,
            server,
            dts: false,
            createTime: Date.now()
        };
        const zipName = server || 'development';
        this._zip(path.resolve(ssr.outputDirInServer, './js'), zipName);
        const typeDir = path.resolve(ssr.baseDir, 'types');
        if (fs.existsSync(typeDir)) {
            data.dts = this._zip(typeDir, `${zipName}-dts`);
        }
        this._write(mf.outputManifest, data);
        if (type === 'watch') {
            mf.exposes.emit();
        }
    }
    private _write(filename: string, data: Record<string, any>) {
        write.sync(filename, JSON.stringify(data, null, 4), { newline: true });
    }
    private _zip(baseDir: string, name: string) {
        const { ssr } = this;
        const mf = MF.get(ssr);
        const files: Record<string, any> = {};
        find.fileSync(baseDir).forEach((filename) => {
            const text = fs.readFileSync(filename);
            files[path.basename(filename)] = text;
        });
        if (Object.keys(files).length > 0) {
            const zipped = fflate.zipSync(files);
            write.sync(path.resolve(mf.output, `${name}.zip`), zipped);
            return true;
        }
        return false;
    }
    private _getVersion(root: string) {
        let version = '';
        const filename = this._getFilename(root);
        if (filename) {
            const arr = filename.split('.');
            version = arr[1];
        }

        return version;
    }
    private _getFilename(root: string): string {
        const { ssr } = this;
        const mf = MF.get(ssr);
        let filename = '';
        if (fs.existsSync(root)) {
            const files = find.fileSync(path.resolve(root, './js'));
            const re = new RegExp(`${mf.entryName}\\..{8}.js`);
            filename = files.find((filename) => {
                return re.test(filename);
            });
        }
        return filename;
    }
}

export function contentHash(text: string) {
    const hash = crypto.createHash('md5');
    hash.update(text);
    return hash.digest('hex');
}
