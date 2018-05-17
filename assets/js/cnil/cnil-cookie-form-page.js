"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../js/utils/dom");
var cnil_cookie_1 = require("./cnil-cookie");
var cnilCookieFormPage;
(function (cnilCookieFormPage) {
    function init() {
        var _this = this;
        var form = document.forms['form-cnil'];
        if (form) {
            this.initFormWithCookie();
            form.addEventListener('submit', function (e) {
                cnil_cookie_1.cnilCookie.writeValues(_this.getValue());
                _this.fakeSave($(e.target));
                e.preventDefault();
            });
        }
    }
    cnilCookieFormPage.init = init;
    function isFormPage() {
        return document.forms['form-cnil'] != undefined;
    }
    cnilCookieFormPage.isFormPage = isFormPage;
    function initFormWithCookie() {
        var categories = cnil_cookie_1.cnilCookie.readValues();
        if (categories) {
            $("input[name=cookiesForAds]")[0].checked = categories.ads;
            $("input[name=cookiesForAnalytics]")[0].checked = categories.analytics;
            $("input[name=cookiesForSocial]")[0].checked = categories.social;
            $("input[name=cookiesForPlayer]")[0].checked = categories.player;
        }
    }
    cnilCookieFormPage.initFormWithCookie = initFormWithCookie;
    function getValue() {
        return {
            ads: $("input[name=cookiesForAds]")[0].checked,
            analytics: $("input[name=cookiesForAnalytics]")[0].checked,
            social: $("input[name=cookiesForSocial]")[0].checked,
            player: $("input[name=cookiesForPlayer]")[0].checked
        };
    }
    cnilCookieFormPage.getValue = getValue;
    function fakeSave($form) {
        var $submitBtn = $form.select('button');
        var defaultText = $submitBtn[0].innerText;
        $submitBtn[0].innerText = "Chargement...";
        $submitBtn[0].disabled = true;
        setTimeout(function () {
            $submitBtn[0].innerText = defaultText;
            $submitBtn[0].disabled = false;
        }, 300);
    }
    cnilCookieFormPage.fakeSave = fakeSave;
})(cnilCookieFormPage = exports.cnilCookieFormPage || (exports.cnilCookieFormPage = {}));
