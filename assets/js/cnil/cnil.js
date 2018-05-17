"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var cnil_cookie_1 = require("./cnil-cookie");
var cnil_cookie_auto_updater_1 = require("./cnil-cookie-auto-updater");
var cnil_cookie_banner_1 = require("./cnil-cookie-banner");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var cnil;
(function (cnil) {
    function v2Active() {
        return env.isFlag('cnil-v2');
    }
    cnil.v2Active = v2Active;
    function isOn(category) {
        if (!this.v2Active()) {
            // while v2 is not active, all is on
            return true;
        }
        return cnil_cookie_1.cnilCookie.isOn(category);
    }
    cnil.isOn = isOn;
    function isOff(category) {
        return !this.isOn(category);
    }
    cnil.isOff = isOff;
})(cnil = exports.cnil || (exports.cnil = {}));
if (cnil.v2Active()) {
    cnil_cookie_auto_updater_1.cnilCookieAutoUpdater.init();
    cnil_cookie_banner_1.cnilCookieBanner.init();
    cnil_cookie_form_page_1.cnilCookieFormPage.init();
}
