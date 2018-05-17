"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = require("../env/user-agent");
var $ = require("../../js/utils/dom");
var cnil_cookie_1 = require("./cnil-cookie");
var cnil_cookie_2 = require("./cnil-cookie");
var debounce_1 = require("../utils/debounce");
var cnil_cookie_banner_1 = require("./cnil-cookie-banner");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var cnilCookieAutoUpdater;
(function (cnilCookieAutoUpdater) {
    function init() {
        if (this.isActive()) {
            $(document.body).on('click', 'a:not([data-cnil="1"])', function (e) {
                cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_2.ALL_ON);
            });
            window.addEventListener('scroll', debounce_1.default(function () {
                if (window.pageYOffset > window.innerHeight) {
                    cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_2.ALL_ON);
                    cnil_cookie_banner_1.cnilCookieBanner.hide();
                }
            }, 500));
        }
    }
    cnilCookieAutoUpdater.init = init;
    function isActive() {
        return !userAgent.isBot() && !cnil_cookie_1.cnilCookie.hasValidCookie() && !cnil_cookie_form_page_1.cnilCookieFormPage.isFormPage();
    }
    cnilCookieAutoUpdater.isActive = isActive;
})(cnilCookieAutoUpdater = exports.cnilCookieAutoUpdater || (exports.cnilCookieAutoUpdater = {}));
