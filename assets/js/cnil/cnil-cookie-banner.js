"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cnil_cookie_1 = require("./cnil-cookie");
var cnilCookieBanner;
(function (cnilCookieBanner) {
    var options;
    function injectBanner2(options, cb) {
        if (!cnil_cookie_1.cnilCookie.isActive()) {
            return;
        }
        options.$container.prepend(options.html);
        var $banner = options.$container.select('[data-role=cnil-banner]');
        $banner.select('[data-action=accept]').on('click', function (e) {
            var category = e.target.getAttribute('data-category');
            if (category) {
                cnil_cookie_1.cnilCookie.setCategory(category, true);
            }
            else {
                cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_1.ALL_ON);
            }
            $banner.css('display', 'none');
            if (cb) {
                cb();
            }
        });
    }
    cnilCookieBanner.injectBanner2 = injectBanner2;
    function hide() {
        options.$container.select('[data-role=cnil-banner]').css('display', 'none');
    }
    cnilCookieBanner.hide = hide;
})(cnilCookieBanner = exports.cnilCookieBanner || (exports.cnilCookieBanner = {}));
