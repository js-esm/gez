import {
    type App,
    type AppRenderParams,
    createMod,
    type Gez,
    ServerContext,
    type ServerRender
} from '@gez/core';
import { rspack } from '@rspack/core';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { createClientConfig, createServerConfig } from './config';

export async function createApp(gez: Gez): Promise<App> {
    const compiler = rspack([createClientConfig(gez), createServerConfig(gez)]);
    const dev = webpackDevMiddleware(compiler, {
        writeToDisk: true
    });
    const hot = webpackHotMiddleware(compiler);
    return {
        middleware(req, res, next: any) {
            dev(req, res, () => {
                hot(req, res, next);
            });
        },
        async build() {},
        async render(params: AppRenderParams): Promise<ServerContext> {
            const mod = createMod(
                gez.getProjectPath('dist/server/entry-server.js')
            );
            const { module, dispose } = await mod.import();
            const render: ServerRender | undefined = module.default;
            const context = new ServerContext(gez, params);
            if (typeof render === 'function') {
                await render(context);
            }
            await mod.dispose();
            dispose(gez.getProjectPath('dist/server'));
            return context;
        },
        async destroy() {
            compiler.run(() => {
                compiler.close(() => {});
            });
        }
    };
}
