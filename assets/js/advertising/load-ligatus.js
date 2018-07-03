"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scriptLoader = require("../../js/utils/script-loader");
var $ = require("../../js/utils/dom");
var cnil_1 = require("../cnil/cnil");
var cnil_cookie_1 = require("../cnil/cnil-cookie");
exports.init = function () {
    if (cnil_1.cnil.isOff(cnil_cookie_1.ADS)) {
        return;
    }
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
