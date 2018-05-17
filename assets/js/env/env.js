"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieDomain = function (hostname) {
    hostname = hostname || window.location.hostname;
    if (hostname == 'localhost' || hostname == '0.0.0.0') {
        return '';
    }
    hostname = hostname.split('.').reverse().splice(0, 2).reverse().join('.');
    return hostname;
};
exports.getFlags = function () {
    return window['flags'] == undefined ? [] : window['flags'];
};
exports.isFlag = function (name) {
    return exports.getFlags().indexOf(name) != -1;
};
