
/*
 * Google page speed use an old version of chrome,
 * so we check it before it wreck our stats
 */
export let isGgPageSpeed = function(): boolean {
    return !!navigator.userAgent.match(/Google Page Speed Insights/gi);
};

export let isGgBot = function(): boolean {
    return !!navigator.userAgent.match(/Googlebot/gi);
};

export let isMobile = function (userAgent?: string): boolean {
    userAgent = userAgent || navigator.userAgent;

    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i) != null
};

export let isWindowsPhone7 = function(): boolean {
    return !!navigator.userAgent.match(/Windows Phone OS 7.5/gi);
};

export let isBot = function(): boolean {
    return isGgPageSpeed() || isGgBot();
};

// works only in renaissance which sets a RTLNET_IE8_BROWSER global variable
export let isIE8 = function (): boolean {
    return window['RTLNET_IE8_BROWSER'] || false;
};

export let isIE = function(): boolean {
    return navigator.userAgent.toLowerCase().indexOf('msie') != -1
};

export let getIEVersion = function(): number {
    return isIE() ? parseInt(navigator.userAgent.toLowerCase().split('msie')[1]) : null;
};