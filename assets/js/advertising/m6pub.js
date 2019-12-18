"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../utils/dom");
var scriptLoader = require("../utils/script-loader");
exports.NETWORK_CODE = 42159803;
exports.ADUNIT_CODE = 'RTL/OTHERS';
exports.PREBID_SCRIPT = 'http://static-preprod.m6tech.net/radins/prebid-radins.js';
exports.PREBID_LOADER_SCRIPT = 'http://static-preprod.m6tech.net/radins/prebid-loader.js';
exports.init = function () {
    window._networkCode = window._networkCode || exports.NETWORK_CODE;
    window._adunitCode = window._adunitCode || exports.ADUNIT_CODE;
    window.pageCriterias = window.pageCriterias || [];
    window._activeAdslots = $('div[data-role="m6pub"]').map(function (div) { return div.id; });
    return new Promise(function (resolve) {
        scriptLoader.ensureLoaded(exports.PREBID_SCRIPT).then(function () {
            initGravity();
            window._activeAdslots.forEach(function (slot) {
                window.displayAd(slot);
            });
            scriptLoader.ensureLoaded(exports.PREBID_LOADER_SCRIPT).then(function () {
                resolve();
            });
        });
    });
};
var initGravity = function () {
    window.pageDataLayer = {
        gravitySiteToken: "radins-17",
        cat: "",
        subCat: "",
        template: "news-hp",
        keywords: []
    };
};
