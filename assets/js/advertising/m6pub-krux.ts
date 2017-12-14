import * as scriptLoader from '../utils/script-loader';

declare global {
    interface Window {
        Krux: any;
    }
}

let getKruxSiteId = function (): string {
    return 'sgwmuejhc';
};

export function getScriptUrl(): string {
    return (location.protocol === 'https:' ? 'https:' : 'http:') + `//cdn.krxd.net/controltag/${getKruxSiteId()}.js`
};

export function init() {
    if (!window.Krux) {
        window.Krux = function() {
            window.Krux.q.push(arguments)
        };

        window.Krux.q = [];
    }

    window.Krux.user = retrieve('user');
    window.Krux.segments = retrieve('segs') ? retrieve('segs').split(',') : [];

    let match = location.href.match(/\bkxsrc=([^&]+)/);
    let src = match && decodeURIComponent(match[1]);

    if (!(/^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i).test(src)) {
        if (src === 'disable') {
            src = '';
        } else {
            src = getScriptUrl();
        }
    }

    return scriptLoader.ensureLoaded(src);
}

export function retrieve(key: string): string {
    if ('undefined' !== typeof window.localStorage) {
        return window.localStorage['kx' + key] || '';
    } else if (true === window.navigator.cookieEnabled) {
        var m = document.cookie.match('kx' + key + '=([^;]*)');
        return (m && decodeURI(m[1])) || '';
    }
    return '';
}
