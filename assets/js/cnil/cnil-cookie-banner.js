"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = require("../env/user-agent");
var cnil_cookie_1 = require("./cnil-cookie");
var $ = require("../../js/utils/dom");
var cnil_cookie_2 = require("./cnil-cookie");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var cnilCookieBanner;
(function (cnilCookieBanner) {
    cnilCookieBanner.$playerBanners = [];
    function init() {
        if (this.isActive()) {
            this.injectBanner($('#main-wrapper'));
        }
    }
    cnilCookieBanner.init = init;
    function setCookieOn(category) {
        if (category === void 0) { category = null; }
        if (category) {
            this.$playerBanners.forEach(function (banner) { return banner.css('display', 'none'); });
            var cookie = cnil_cookie_2.cnilCookie.readValues();
            if (!cookie) {
                cnil_cookie_2.cnilCookie.writeValues(cnil_cookie_1.ALL_ON);
                return;
            }
            cookie[category] = true;
            cnil_cookie_2.cnilCookie.writeValues(cookie);
        }
        else {
            this.hide();
            cnil_cookie_2.cnilCookie.writeValues(cnil_cookie_1.ALL_ON);
        }
    }
    cnilCookieBanner.setCookieOn = setCookieOn;
    function isActive() {
        return !userAgent.isBot() && !cnil_cookie_2.cnilCookie.hasValidCookie() && !cnil_cookie_form_page_1.cnilCookieFormPage.isFormPage();
    }
    cnilCookieBanner.isActive = isActive;
    function injectBanner($mainWrapper) {
        var _this = this;
        $mainWrapper.prepend(this.createBannerHtml());
        this.$banner = $mainWrapper.select('[data-role=cnil-banner]');
        this.$banner.select('button').on('click', function (e) { return _this.setCookieOn(); });
    }
    cnilCookieBanner.injectBanner = injectBanner;
    function createBannerHtml() {
        return "\n            <div class=\"cnil-banner-v2\" data-role=\"cnil-banner\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-9 g-gutter\">\n                            <p class=\"cnil-banner-v2__text\">En poursuivant votre navigation sur notre service, vous acceptez l\u2019utilisation de cookies, y compris de partenaires tiers, pour r\u00E9aliser des mesures d'audience, vous proposer des services, contenus et publicit\u00E9s adapt\u00E9s \u00E0 vos centres d\u2019int\u00E9r\u00EAt sur internet ou par communication directe de RTL, et pour vous proposer des boutons de partage et de remont\u00E9es de contenus sur les r\u00E9seaux sociaux. <a class=\"cnil-banner-v2__more\" href=\"/cnil/preferences\" data-cnil=\"1\">En savoir plus / param\u00E9trer</a>.</p>\n                        </div>\n                        <div class=\"col-12 col-lg-3 g-gutter\">\n                            <button type=\"button\" class=\"cnil-banner-v2__btn btn btn-flat btn-flat--sm my-2\" data-action=\"accept\">J'accepte</button>\n                            <a href=\"/cnil/preferences\" class=\"cnil-banner-v2__link my-2\" data-cnil=\"1\"><span class=\"icon icon-arrow-right-circle\"></span>Param\u00E9trer les traceurs</a>\n                        </div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"cnil-banner-v2__close\" data-action=\"close\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\" class=\"icon icon-close-circle\"></span>\n                </button>\n            </div>\n        ";
    }
    cnilCookieBanner.createBannerHtml = createBannerHtml;
    function injectPlayerBanner($holder, callback) {
        var _this = this;
        $holder.prepend(this.createBannerPlayerHtml());
        var newPlayerBanner = $holder.select('[data-role=cnil-banner]');
        newPlayerBanner.select('button').on('click', function (e) {
            _this.setCookieOn(cnil_cookie_1.PLAYER);
            callback();
        });
        this.$playerBanners.push(newPlayerBanner);
    }
    cnilCookieBanner.injectPlayerBanner = injectPlayerBanner;
    function createBannerPlayerHtml() {
        return "\n            <div class=\"cnil-banner-v2 cnil-banner-v2--player\" data-role=\"cnil-banner\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <p class=\"cnil-banner-v2__text\">En poursuivant votre navigation sur notre service, vous acceptez l\u2019utilisation de cookies, y compris de partenaires tiers, pour r\u00E9aliser des mesures d'audience, vous proposer des services, contenus et publicit\u00E9s adapt\u00E9s \u00E0 vos centres d\u2019int\u00E9r\u00EAt sur internet ou par communication directe de RTL, et pour vous proposer des boutons de partage et de remont\u00E9es de contenus sur les r\u00E9seaux sociaux. <a class=\"cnil-banner-v2__more\" href=\"/cnil/preferences\" data-cnil=\"1\">En savoir plus / param\u00E9trer</a>.</p>\n                        </div>\n                        <div class=\"col-12\">\n                            <button type=\"button\" class=\"cnil-banner-v2__btn btn btn-flat btn-flat--sm my-2\" data-action=\"accept\">J'accepte</button>\n                            <a href=\"/cnil/preferences\" class=\"cnil-banner-v2__link my-2\" data-cnil=\"1\"><span class=\"icon icon-arrow-right-circle\"></span>Param\u00E9trer les traceurs</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
    }
    cnilCookieBanner.createBannerPlayerHtml = createBannerPlayerHtml;
    function hide() {
        this.$banner.css('display', 'none');
    }
    cnilCookieBanner.hide = hide;
})(cnilCookieBanner = exports.cnilCookieBanner || (exports.cnilCookieBanner = {}));
