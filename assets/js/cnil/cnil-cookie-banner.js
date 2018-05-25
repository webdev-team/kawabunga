"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = require("../../js/env/user-agent");
var cnil_cookie_1 = require("./cnil-cookie");
var $ = require("../../js/utils/dom");
var cnil_cookie_2 = require("./cnil-cookie");
var cnil_cookie_form_page_1 = require("./cnil-cookie-form-page");
var cnilCookieBanner;
(function (cnilCookieBanner) {
    function init() {
        if (isActive()) {
            injectBanner($('#main-wrapper'));
        }
    }
    cnilCookieBanner.init = init;
    function isActive() {
        return !userAgent.isBot() && !cnil_cookie_2.cnilCookie.hasValidCookie() && !cnil_cookie_form_page_1.cnilCookieFormPage.isCnilSafe();
    }
    cnilCookieBanner.isActive = isActive;
    function injectBanner($mainWrapper) {
        $mainWrapper.prepend(createBannerHtml());
        cnilCookieBanner.$banner = $mainWrapper.select('[data-role=cnil-banner]');
        cnilCookieBanner.$banner.select('button').on('click', function (e) {
            cnil_cookie_2.cnilCookie.writeValues(cnil_cookie_1.ALL_ON);
            hide();
        });
    }
    cnilCookieBanner.injectBanner = injectBanner;
    function createBannerHtml() {
        return "\n            <div class=\"cnil-banner-v2\" data-role=\"cnil-banner\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-lg-9 g-gutter\">\n                            <p class=\"cnil-banner-v2__text\">En poursuivant votre navigation sur notre service ou en ouvrant nos communications directes, vous acceptez l\u2019utilisation de cookies, y compris de partenaires tiers, pour r\u00E9aliser des statistiques de visites, pour vous proposer des services et des publicit\u00E9s adapt\u00E9s \u00E0 vos centres d\u2019int\u00E9r\u00EAt (sur internet et via nos communications directes), pour vous proposer des fonctionnalit\u00E9s relatives aux r\u00E9seaux sociaux ainsi que de la lecture directe de vid\u00E9os. <a class=\"cnil-banner-v2__more\" href=\"/cnil/preferences\" data-cnil=\"1\">En savoir plus et modifier les param\u00E8tres</a>.</p>\n                        </div>\n                        <div class=\"col-12 col-lg-3 g-gutter\">\n                            <button type=\"button\" class=\"cnil-banner-v2__btn btn btn-flat btn-flat--sm\" data-action=\"accept\">J'accepte</button>\n                            <a href=\"/cnil/preferences\" class=\"cnil-banner-v2__link\" data-cnil=\"1\"><span class=\"icon icon-arrow-right-circle\"></span>Param\u00E9trer les traceurs</a>\n                        </div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"cnil-banner-v2__close\" data-action=\"close\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\" class=\"icon icon-close-circle\"></span>\n                </button>\n            </div>\n        ";
    }
    cnilCookieBanner.createBannerHtml = createBannerHtml;
    function injectPlayerBanner($holder, callback) {
        $holder.prepend(createBannerPlayerHtml());
        var newPlayerBanner = $holder.select('[data-role=cnil-banner]');
        newPlayerBanner.select('button').on('click', function (e) {
            cnil_cookie_2.cnilCookie.setCategory(cnil_cookie_1.PLAYER, true);
            newPlayerBanner.css('display', 'none');
            callback();
        });
    }
    cnilCookieBanner.injectPlayerBanner = injectPlayerBanner;
    function createBannerPlayerHtml() {
        return "\n            <div class=\"cnil-banner-v2 cnil-banner-v2--player\" data-role=\"cnil-banner\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <p class=\"cnil-banner-v2__text\">En poursuivant votre navigation sur notre service ou en ouvrant nos communications directes, vous acceptez l\u2019utilisation de cookies, y compris de partenaires tiers, pour r\u00E9aliser des statistiques de visites, pour vous proposer des services et des publicit\u00E9s adapt\u00E9s \u00E0 vos centres d\u2019int\u00E9r\u00EAt (sur internet et via nos communications directes), pour vous proposer des fonctionnalit\u00E9s relatives aux r\u00E9seaux sociaux ainsi que de la lecture directe de vid\u00E9os. <a class=\"cnil-banner-v2__more\" href=\"/cnil/preferences\" data-cnil=\"1\">En savoir plus et modifier les param\u00E8tres</a>.</p>\n                        </div>\n                        <div class=\"col-12\">\n                            <button type=\"button\" class=\"cnil-banner-v2__btn btn btn-flat btn-flat--sm\" data-action=\"accept\">J'accepte</button>\n                            <a href=\"/cnil/preferences\" class=\"cnil-banner-v2__link\" data-cnil=\"1\"><span class=\"icon icon-arrow-right-circle\"></span>Param\u00E9trer les traceurs</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
    }
    cnilCookieBanner.createBannerPlayerHtml = createBannerPlayerHtml;
    function hide() {
        cnilCookieBanner.$banner.css('display', 'none');
    }
    cnilCookieBanner.hide = hide;
})(cnilCookieBanner = exports.cnilCookieBanner || (exports.cnilCookieBanner = {}));
