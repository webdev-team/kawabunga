"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Google page speed use an old version of chrome,
 * so we check it before it wreck our stats
 */
exports.isGgPageSpeed = function () {
    return !!navigator.userAgent.match(/Google Page Speed Insights/gi);
};
exports.isGgBot = function () {
    return !!navigator.userAgent.match(/Googlebot/gi);
};
exports.isMobile = function (userAgent) {
    userAgent = userAgent || navigator.userAgent;
    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i) != null;
};
exports.isWindowsPhone7 = function () {
    return !!navigator.userAgent.match(/Windows Phone OS 7.5/gi);
};
exports.isBot = function () {
    return exports.isGgPageSpeed() || exports.isGgBot();
};
// works only in renaissance which sets a RTLNET_IE8_BROWSER global variable
exports.isIE8 = function () {
    return window['RTLNET_IE8_BROWSER'] || false;
};
exports.isIE = function () {
    return navigator.userAgent.toLowerCase().indexOf('msie') != -1;
};
exports.getIEVersion = function () {
    return exports.isIE() ? parseInt(navigator.userAgent.toLowerCase().split('msie')[1]) : null;
};
