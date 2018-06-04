
declare global {
    interface Window {
        site: string;
        contextRoot: string
        staticRoot: string;
        env: string; // lab or prod
        appwebview: string; // 'true' if in rtl mobile app
        flags: Array<string>;
    }
}

export let getEnv = function(): string {
    return window.env ? window.env : 'prod';
};

export let isProd = function(): boolean {
    return getEnv() == 'prod';
};

export let isLab = function(): boolean {
    return !isProd();
};

export let isAppwebview = function (): boolean {
    return window.appwebview == 'true';
};

export let isSecured = function(): boolean {
    return location && location.protocol === 'https:';
};

export let getStaticRoot = function() {
    return window.staticRoot;
};

export let getCookieDomain = function (hostname?: string) {
    hostname = hostname || window.location.hostname;

    if (hostname == 'localhost' || hostname == '0.0.0.0') {
        return '';
    }

    return extractDomain(hostname);
};

export let getFlags = function (): Array<string> {
    return window.flags == undefined ? [] : window.flags;
};

export let isFlag = function (name: string): boolean {
    return getFlags().indexOf(name) != -1;
};

export let getSite = function (): string {
  return window.site || 'www.rtl.fr';
};

export let getDomain = function (): string {
    return extractDomain(getSite());
};

export let getRenaissanceDomain = function (): string {
    switch (getSite()) {
        case 'www.rtl2.fr' : return 'RTL2';
        case 'www.funradio.fr' : return 'FUN_RADIO';
        default : return 'RTL';
    }
};

let extractDomain = function(site: string): string {
    return site.split('.').reverse().splice(0,2).reverse().join('.');
}