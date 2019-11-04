"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../../assets/js/utils/dom");
var scriptLoader = require("../../js/utils/script-loader.js");
var didomi_config_1 = require("./didomi-config");
var didomi_css_1 = require("./didomi-css");
var Purpose;
(function (Purpose) {
    Purpose["ANALYTICS"] = "audience_measurement";
    Purpose["ADS"] = "targeted_advertising";
    Purpose["SOCIAL"] = "social_network";
})(Purpose = exports.Purpose || (exports.Purpose = {}));
var CmpDidomi;
(function (CmpDidomi) {
    CmpDidomi.init = function (options) {
        window.gdprAppliesGlobally = true;
        // @ts-ignore
        (function () { function n() { if (!window.frames.__cmpLocator) {
            if (document.body && document.body.firstChild) {
                var e = document.body;
                var t = document.createElement("iframe");
                t.style.display = "none";
                t.name = "__cmpLocator";
                e.insertBefore(t, e.firstChild);
            }
            else {
                setTimeout(n, 5);
            }
        } } function e(e, t, n) { if (typeof n !== "function") {
            return;
        } if (!window.__cmpBuffer) {
            window.__cmpBuffer = [];
        } if (e === "ping") {
            n({ gdprAppliesGlobally: window.gdprAppliesGlobally, cmpLoaded: false }, true);
        }
        else {
            window.__cmpBuffer.push({ command: e, parameter: t, callback: n });
        } } e.stub = true; function t(a) { if (!window.__cmp || window.__cmp.stub !== true) {
            return;
        } if (!a.data) {
            return;
        } var r = typeof a.data === "string"; var e; try {
            e = r ? JSON.parse(a.data) : a.data;
        }
        catch (t) {
            return;
        } if (e.__cmpCall) {
            var i = e.__cmpCall;
            window.__cmp(i.command, i.parameter, function (e, t) { var n = { __cmpReturn: { returnValue: e, success: t, callId: i.callId } }; a.source.postMessage(r ? JSON.stringify(n) : n, "*"); });
        } } if (typeof window.__cmp !== "function") {
            window.__cmp = e;
            if (window.addEventListener) {
                window.addEventListener("message", t, false);
            }
            else {
                window.attachEvent("onmessage", t);
            }
        } n(); })();
        // window.didomiConfig = didomiConfig(options);
        window.didomiConfig = didomi_config_1.turboConfig();
        var style = document.createElement('style');
        style.innerHTML = didomi_css_1.didomiCustomCss(options);
        document.head.appendChild(style);
        scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js');
    };
    CmpDidomi.isConsentedPurpose = function (purpose) {
        return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purpose) || false;
    };
    CmpDidomi.attach = function (eventType, action) {
        window[eventType] = window[eventType] || [];
        window[eventType].push(action);
    };
    CmpDidomi.enablePurpose = function (purpose) {
        var transaction = window.Didomi.openTransaction();
        transaction.enablePurpose(purpose);
        transaction.commit();
    };
    CmpDidomi.doOnDidomiConsent = function (purpose, fnDo, fnElseDo) {
        CmpDidomi.attach('didomiOnReady', function () {
            if (CmpDidomi.isConsentedPurpose(purpose)) {
                fnDo();
            }
            else {
                fnElseDo();
                CmpDidomi.attach('didomiEventListeners', {
                    event: 'consent.changed',
                    listener: function () {
                        if (CmpDidomi.isConsentedPurpose(purpose)) {
                            CmpDidomi.displayDidomiBanners(purpose, false);
                            fnDo();
                        }
                    }
                });
            }
        });
    };
    CmpDidomi.displayDidomiBanners = function (purpose, display) {
        var $banners = $(document.body).select("[data-role=cnil-banner][data-purpose=" + purpose + "]");
        if ($banners.length) {
            $banners.forEach(function (banner) { return $(banner).css('display', display ? 'block' : 'none'); });
        }
    };
})(CmpDidomi = exports.CmpDidomi || (exports.CmpDidomi = {}));
