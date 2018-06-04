declare global  {
    interface Window {
        site: any;
        staticRoot: any;
        any: any;
        env: any;
        appwebview: string;
        flags: Array<string>;
    }
}
export declare let getEnv: () => string;
export declare let isProd: () => boolean;
export declare let isLab: () => boolean;
export declare let isSecured: () => boolean;
export declare let getStaticRoot: () => any;
export declare let getCookieDomain: (hostname?: string) => string;
export declare let getFlags: () => string[];
export declare let isFlag: (name: string) => boolean;
export declare let getSite: () => string;
export declare let getDomain: () => string;
export declare let getRenaissanceDomain: () => string;
