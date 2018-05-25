"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = require("../../js/env/user-agent");
var $ = require("../../js/utils/dom");
var cnil_cookie_1 = require("./cnil-cookie");
var cnil_cookie_2 = require("./cnil-cookie");
var debounce_1 = require("../../js/utils/debounce");
var cnil_cookie_banner_1 = require("./cnil-cookie-banner");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var env = require("../env/env");
var cnilCookieAutoUpdater;
(function (cnilCookieAutoUpdater) {
    function init() {
        if (isActive()) {
            $(document.body).on('click', 'a:not([data-cnil="1"])', function (e) {
                var $anchor = $(e.target).parent('A');
                if ($anchor.length == 1 && $anchor[0].href.indexOf(env.getSite()) !== -1) {
                    cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_2.ALL_ON);
                }
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
        return !userAgent.isBot() && !cnil_cookie_1.cnilCookie.hasValidCookie() && !cnil_cookie_form_page_1.cnilCookieFormPage.isCnilSafe();
    }
    cnilCookieAutoUpdater.isActive = isActive;
    function isInternalLink(linkElem) {
        var internalSites = ['www.rtl.fr', 'www.rtl2.fr', 'www.funradio.fr'];
        var isInternalLink = false;
        internalSites.forEach(function (site) {
            if (linkElem.href.indexOf(site) !== -1) {
                isInternalLink = true;
            }
        });
        return isInternalLink;
    }
})(cnilCookieAutoUpdater = exports.cnilCookieAutoUpdater || (exports.cnilCookieAutoUpdater = {}));
