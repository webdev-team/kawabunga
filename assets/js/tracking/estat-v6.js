"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var scriptLoader = require("../../js/utils/script-loader");
var SCRIPT = 'https://js.estat.com/js/mu-6.0.js';
exports.ensureLoaded = function () {
    return new Promise(function (resolve) {
        scriptLoader.ensureLoaded(SCRIPT).then(function () {
            resolve();
        });
    });
};
/**
 * estat should be loaded before calling this function
 */
exports.createEstatTag = function (config) {
    return new window.eStatTag(config);
};
