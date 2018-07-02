"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scriptLoader = require("../../js/utils/script-loader");
var $ = require("../../js/utils/dom");
exports.init = function () {
    // loads ligatus, yahoo gemini... using data-role="load-script" selector
    scriptLoader.getScriptsToLoad().forEach(scriptLoader.ensureLoaded);
    $('.js-async').forEach(function (item) {
        var type = item.getAttribute('data-type');
        var url = item.getAttribute('data-src');
        if (type == "ligatus-script" && url) {
            scriptLoader.ensureLoaded(url);
        }
    });
};
