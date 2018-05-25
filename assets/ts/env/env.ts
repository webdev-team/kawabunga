
export let getCookieDomain = function (hostname?: string) {
    hostname = hostname || window.location.hostname;

    if (hostname == 'localhost' || hostname == '0.0.0.0') {
        return '';
    }

    hostname = hostname.split('.').reverse().splice(0,2).reverse().join('.');

    return hostname;
};

export let getFlags = function (): Array<string> {
    return window['flags'] == undefined ? [] : window['flags'];
};

export let isFlag = function (name: string): boolean {
    return getFlags().indexOf(name) != -1;
};

export let getSite = function (): string {
  return window.location.hostname;
};