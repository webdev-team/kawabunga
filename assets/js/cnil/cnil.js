"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var cookies = require("js-cookie");
var cnil_cookie_1 = require("./cnil-cookie");
var cnil_cookie_auto_updater_1 = require("./cnil-cookie-auto-updater");
var cnil_cookie_banner_1 = require("./cnil-cookie-banner");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var cnil;
(function (cnil) {
    cnil.cookie = cnil_cookie_1.cnilCookie;
    cnil.banner = cnil_cookie_banner_1.cnilCookieBanner;
    cnil.formPage = cnil_cookie_form_page_1.cnilCookieFormPage;
    function v2Active() {
        return env.getCookieDomain() == 'rtl2.fr' || env.getCookieDomain() == 'funradio.fr' || cookies.get('cnil-cookie-mode') == 'v2';
    }
    cnil.v2Active = v2Active;
    function activateV2() {
        cookies.set('cnil-cookie-mode', 'v2');
    }
    cnil.activateV2 = activateV2;
    function isOn(category) {
        if (!v2Active()) {
            // while v2 is not active, all is on
            return true;
        }
        return cnil_cookie_1.cnilCookie.isOn(category);
    }
    cnil.isOn = isOn;
    function isOff(category) {
        return !isOn(category);
    }
    cnil.isOff = isOff;
})(cnil = exports.cnil || (exports.cnil = {}));
if (window.location.search.indexOf('cnil-cookie-mode-v2') != -1) {
    cnil.activateV2();
}
if (cnil.v2Active()) {
    cnil_cookie_auto_updater_1.cnilCookieAutoUpdater.init();
    cnil_cookie_banner_1.cnilCookieBanner.init();
    cnil_cookie_form_page_1.cnilCookieFormPage.init();
}
