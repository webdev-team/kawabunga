"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../js/utils/dom");
var debounce_1 = require("../../js/utils/debounce");
var cnil_cookie_1 = require("./cnil-cookie");
var cnil_cookie_banner_1 = require("./cnil-cookie-banner");
var env = require("../env/env");
var cnilCookieAutoUpdater;
(function (cnilCookieAutoUpdater) {
    cnilCookieAutoUpdater.consumed = false;
    function onClick(e) {
        if (cnilCookieAutoUpdater.consumed) {
            return;
        }
        var $anchor = $(e.target).parent('A');
        if ($anchor.length == 1 && $anchor[0].href.indexOf(env.getSite()) !== -1) {
            cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_1.ALL_ON, cnil_cookie_1.CLICK_ACTION);
        }
    }
    function onScroll() {
        if (cnilCookieAutoUpdater.consumed) {
            return;
        }
        if (window.pageYOffset > window.innerHeight) {
            cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_1.ALL_ON, cnil_cookie_1.SCROLL_ACTION);
            cnil_cookie_banner_1.cnilCookieBanner.hideMainBanner();
        }
    }
    function init() {
        if (cnil_cookie_1.cnilCookie.isActive()) {
            $(document.body).on('click', 'a:not([data-cnil="1"])', onClick);
            window.addEventListener('scroll', debounce_1.default(function () { return onScroll(); }, 300));
            cnil_cookie_1.cnilCookie.onChange(function () {
                // cookie has been written (through this module code or even banner or else)
                cnilCookieAutoUpdater.consumed = true;
            });
        }
    }
    cnilCookieAutoUpdater.init = init;
    function isCnilSafe() {
        return document.querySelector('[data-cnil-safe="true"]') != undefined;
    }
    cnilCookieAutoUpdater.isCnilSafe = isCnilSafe;
})(cnilCookieAutoUpdater = exports.cnilCookieAutoUpdater || (exports.cnilCookieAutoUpdater = {}));
