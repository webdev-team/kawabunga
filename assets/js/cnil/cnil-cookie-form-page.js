"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../js/utils/dom");
var cnil_cookie_1 = require("./cnil-cookie");
var cnilCookieFormPage;
(function (cnilCookieFormPage) {
    function init() {
        var form = document.forms['form-cnil'];
        if (form) {
            initFormWithCookie();
            $("input[type=checkbox]").forEach(function (input) {
                input.addEventListener('change', function () {
                    cnil_cookie_1.cnilCookie.writeValues(getValue(), cnil_cookie_1.PREFERENCES_ACTION);
                });
            });
        }
    }
    cnilCookieFormPage.init = init;
    function initFormWithCookie() {
        var categories = cnil_cookie_1.cnilCookie.readValues();
        if (categories) {
            $("input[name=cookiesForAds]")[0].checked = categories.ads;
            $("input[name=cookiesForAnalytics]")[0].checked = categories.analytics;
            $("input[name=cookiesForSocial]")[0].checked = categories.social;
        }
        else {
            $("input[type=checkbox]").forEach(function (input) { return input.checked = false; });
        }
    }
    cnilCookieFormPage.initFormWithCookie = initFormWithCookie;
    function getValue() {
        return {
            ads: $("input[name=cookiesForAds]")[0].checked,
            analytics: $("input[name=cookiesForAnalytics]")[0].checked,
            social: $("input[name=cookiesForSocial]")[0].checked,
        };
    }
    cnilCookieFormPage.getValue = getValue;
})(cnilCookieFormPage = exports.cnilCookieFormPage || (exports.cnilCookieFormPage = {}));
