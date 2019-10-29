"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../../assets/js/utils/dom");
var cnil_cookie_1 = require("./cnil-cookie");
var didomi_1 = require("../cmp/didomi");
var cnilCookieBanner;
(function (cnilCookieBanner) {
    var $mainBanner;
    function init(options, cb) {
        if (cnil_cookie_1.cnilCookie.isActive()) {
            injectBanner(options, cb);
            $mainBanner = options.$container.select('[data-role=cnil-banner]');
        }
    }
    cnilCookieBanner.init = init;
    function injectBanner(options, cb) {
        prependHTML(options.$container[0], options.html);
        var $banner = options.$container.select('[data-role=cnil-banner]');
        $banner.select('[data-action=accept]').on('click', function (e) {
            var category = e.target.getAttribute('data-category');
            if (category) {
                cnil_cookie_1.cnilCookie.setCategory(category, true, cnil_cookie_1.BANNER_ACTION);
            }
            else {
                cnil_cookie_1.cnilCookie.writeValues(cnil_cookie_1.ALL_ON, cnil_cookie_1.BANNER_ACTION);
            }
            if ($banner) {
                $banner.css('display', 'none');
            }
            if (cb) {
                cb();
            }
        });
        $banner.select('[data-action=consent]').on('click', function (e) {
            var purpose = e.target.getAttribute('data-purpose');
            didomi_1.CmpDidomi.enablePurpose(purpose);
            if ($banner) {
                $banner.css('display', 'none');
            }
            if (cb) {
                cb();
            }
        });
        $banner.select('[data-action=close]').on('click', function (e) {
            if ($banner) {
                $banner.css('display', 'none');
            }
        });
    }
    cnilCookieBanner.injectBanner = injectBanner;
    function hideMainBanner() {
        if ($mainBanner) {
            $mainBanner.css('display', 'none');
        }
    }
    cnilCookieBanner.hideMainBanner = hideMainBanner;
    function showMainBanner() {
        if ($mainBanner) {
            $mainBanner.css('display', '');
        }
    }
    cnilCookieBanner.showMainBanner = showMainBanner;
    function prependHTML(elParent, html) {
        if (!elParent) {
            return;
        }
        var elChild = document.createElement('div');
        elChild.innerHTML = html;
        elParent.insertBefore(elChild, elParent.firstChild);
    }
    function displayDidomiBanners(purpose, display) {
        var $banners = $(document.body).select("[data-role=cnil-banner][data-purpose=" + purpose + "]");
        if ($banners.length) {
            $banners.forEach(function (banner) { return $(banner).css('display', display ? 'block' : 'none'); });
        }
    }
    cnilCookieBanner.displayDidomiBanners = displayDidomiBanners;
})(cnilCookieBanner = exports.cnilCookieBanner || (exports.cnilCookieBanner = {}));
