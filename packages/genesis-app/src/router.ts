import Vue from 'vue';
import VueRouter, {
    Route,
    RouterOptions,
    RouterMode,
    RawLocation
} from 'vue-router';

Vue.use(VueRouter);

export function getLocation(base: string): string {
    let path = decodeURI(window.location.pathname);
    if (base && path.indexOf(base) === 0) {
        path = path.slice(base.length);
    }
    return (path || '/') + window.location.search + window.location.hash;
}

function equalPath(path1: string, path2: string) {
    return path1.replace(/\/$/, '') === path2.replace(/\/$/, '');
}
class GenesisAppRouter {
    public static key = '__genesisAppRouter';
    private list: VueRouter[] = [];
    private target: VueRouter | null;
    private syncing = false;
    public constructor() {
        window.addEventListener('popstate', (e) => {
            this.sync((router: any) => {
                // Here is a Fang'f that vue-router does not disclose
                const location = getLocation(router.base);
                (router as any).history.transitionTo(location);
            });
        });
    }

    public set(router: any) {
        if (this.list.indexOf(router) > -1) return;
        this.list.push(router);
    }

    public clear(router: any) {
        const index = this.list.indexOf(router);
        this.list.splice(index, 1);
    }

    public dispatchTarget(target: any) {
        this.target = target;
        return this;
    }

    public sync(fn: (router: VueRouter) => void) {
        if (this.syncing) return;
        this.syncing = true;
        this.list.forEach((router) => {
            if (this.target === router) return;
            fn(router);
        });
        this.target = null;
        this.syncing = false;
    }

    public push(location: string) {
        this.sync((router) => {
            if (equalPath(router.currentRoute.fullPath, location)) return;
            VueRouter.prototype.push.call(router, location);
        });
    }

    public replace(location: string) {
        this.sync((router) => {
            if (equalPath(router.currentRoute.fullPath, location)) return;
            VueRouter.prototype.replace.call(router, location);
        });
    }
}

const getRoute = (): GenesisAppRouter | null => {
    if (typeof window === 'object') {
        const win: any = window;
        if (!win[GenesisAppRouter.key]) {
            win[GenesisAppRouter.key] = new GenesisAppRouter();
        }
        return win[GenesisAppRouter.key];
    }
    return null;
};

const route: GenesisAppRouter = getRoute();

export class Router extends VueRouter {
    protected sourceMode: RouterMode = 'abstract';
    public constructor(options: RouterOptions = {}) {
        super({
            ...options,
            mode: options.mode === 'history' ? 'abstract' : options.mode
        });
        this.sourceMode = options.mode;
        if (!this._isSync) return;
        route.set(this);
        let app = this.app;
        let remove = false;
        Object.defineProperty(this, 'app', {
            set(v) {
                app = v;
                if (!app) {
                    route.clear(this);
                    remove = true;
                    return;
                }
                if (app && remove) {
                    route.set(this);
                    remove = false;
                }
            },
            get() {
                return app;
            }
        });
    }

    private get _isSync() {
        if (!route) {
            return false;
        }
        const syncHistory = this.options.syncHistory;
        return (
            (!!this.app && syncHistory === true) ||
            this.sourceMode === 'history'
        );
    }
    public get state() {
        return history.state || null;
    }

    public async push(location: RawLocation) {
        return this.pushState(location, null);
    }
    public async pushState(location: RawLocation, data: any) {
        const url = this.resolve(location).route.fullPath;
        if (url === this.currentRoute.fullPath) return this.currentRoute;
        const sync = (url: string) => {
            if (this._isSync) {
                route.dispatchTarget(this).push(url);
                const newUrl =
                    (this.options.base || '').replace(/\/$/, '') + url;
                history.pushState(data, '', newUrl);
            }
        };
        let isError = false;
        const v = await super.push(location).catch((err) => {
            isError = true;
            if (typeof err !== 'undefined') return Promise.reject(err);
            return Promise.resolve(this.currentRoute);
        });
        if (!isError) {
            sync(v.fullPath);
        }
        return v;
    }
    public replace(location: RawLocation) {
        return this.replaceState(location, null);
    }
    public async replaceState(location: RawLocation, data: any) {
        const url = this.resolve(location).route.fullPath;
        const sync = (url: string) => {
            if (this._isSync) {
                route.dispatchTarget(this).replace(url);
                const newUrl =
                    (this.options.base || '').replace(/\/$/, '') + url;
                history.replaceState(data, '', newUrl);
            }
        };
        let isError = false;
        const v = await super.replace(location).catch((err) => {
            isError = true;
            if (typeof err !== 'undefined') return Promise.reject(err);
            return Promise.resolve(this.currentRoute);
        });
        if (!isError) {
            sync(v.fullPath);
        }
        return v;
    }

    public go(n: number) {
        if (this._isSync) {
            return history.go(n);
        }
        return super.go(n);
    }

    public back() {
        if (this._isSync) {
            return history.back();
        }
        return super.back();
    }

    public forward() {
        if (this._isSync) {
            return history.forward();
        }
        return super.forward();
    }
}

declare module 'vue-router/types/router' {
    interface VueRouter {
        state: any;
        // eslint-disable-next-line @typescript-eslint/method-signature-style
        pushState(location: RawLocation, data: any): Promise<Route>;
        // eslint-disable-next-line @typescript-eslint/method-signature-style
        replaceState(location: RawLocation, data: any): Promise<Route>;
    }
    interface RouterOptions {
        /**
         * Whether to synchronize to history when routing changes
         */
        syncHistory?: boolean;
    }
}
