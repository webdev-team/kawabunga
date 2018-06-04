"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("./env");
exports.current = function () {
    return 'https://' + env.getSite();
};
exports.www = function (path) {
    return 'https://www.' + (env.isLab() ? 'lab.' : '') + env.getDomain() + (path ? path : '');
};
