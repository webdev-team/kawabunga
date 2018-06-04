"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = function () {
    return window.env ? window.env : 'prod';
};
exports.isProd = function () {
    return exports.getEnv() == 'prod';
};
exports.isLab = function () {
    return !exports.isProd();
};
exports.isSecured = function () {
    return location && location.protocol === 'https:';
};
exports.getStaticRoot = function () {
    return window.staticRoot;
};
exports.getCookieDomain = function (hostname) {
    hostname = hostname || window.location.hostname;
    if (hostname == 'localhost' || hostname == '0.0.0.0') {
        return '';
    }
    return extractDomain(hostname);
};
exports.getFlags = function () {
    return window.flags == undefined ? [] : window.flags;
};
exports.isFlag = function (name) {
    return exports.getFlags().indexOf(name) != -1;
};
exports.getSite = function () {
    return window.site || 'www.rtl.fr';
};
exports.getDomain = function () {
    return extractDomain(exports.getSite());
};
exports.getRenaissanceDomain = function () {
    switch (exports.getSite()) {
        case 'www.rtl2.fr': return 'RTL2';
        case 'www.funradio.fr': return 'FUN_RADIO';
        default: return 'RTL';
    }
};
var extractDomain = function (site) {
    return site.split('.').reverse().splice(0, 2).reverse().join('.');
};
