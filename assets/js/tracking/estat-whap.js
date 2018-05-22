"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// marqueur whap pour la mesure hybride WEBDEV-3483
var scriptloader = require("../../js/utils/script-loader");
exports.init = function () {
    window._eStat_Whap_loaded_func = function () {
        window.eStatWhap.serial('800000000089');
        window.eStatWhap.send();
    };
    scriptloader.ensureLoaded('https://w.estat.com/js/whap.js');
};
