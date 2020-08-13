"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var $ = require("../../../assets/js/utils/dom");
var cookies = require("js-cookie");
var didomi_config_1 = require("./didomi-config");
var cnil_log_service_1 = require("../cnil/cnil-log-service");
var cnil_log_1 = require("../cnil/cnil-log");
var Purpose;
(function (Purpose) {
    Purpose["ANALYTICS"] = "audience_measurement";
    Purpose["ADS"] = "targeted_advertising";
    Purpose["SOCIAL"] = "social_network";
    Purpose["PERSONNALISATION"] = "personnalisation";
})(Purpose = exports.Purpose || (exports.Purpose = {}));
var RTLPurposeIds = {
    'audience_measurement': 'mesurerl-TH6fifgP',
    'targeted_advertising': 'publicite-qfTFazXj',
    'social_network': 'reseauxso-e7EUAMeD',
    'personnalisation': 'personnali-jCkrDhEj',
};
var FunRadioPurposeIds = {
    'audience_measurement': 'mesurerl-TH6fifgP',
    'targeted_advertising': 'publicite-qfTFazXj',
    'social_network': 'reseauxso-e7EUAMeD',
    'personnalisation': 'personnali-jCkrDhEj',
};
var CmpDidomi;
(function (CmpDidomi) {
    CmpDidomi.init = function (options) {
        window.gdprAppliesGlobally = true;
        options.apiKey = options.apiKey || didomi_config_1.DEFAULT_OPTIONS.apiKey;
        // @ts-ignore
        (function () { function a(e) { if (!window.frames[e]) {
            if (document.body && document.body.firstChild) {
                var t = document.body;
                var n = document.createElement("iframe");
                n.style.display = "none";
                n.name = e;
                n.title = e;
                t.insertBefore(n, t.firstChild);
            }
            else {
                setTimeout(function () { a(e); }, 5);
            }
        } } function e(n, r, o, c, s) { function e(e, t, n, a) { if (typeof n !== "function") {
            return;
        } if (!window[r]) {
            window[r] = [];
        } var i = false; if (s) {
            i = s(e, t, n);
        } if (!i) {
            window[r].push({ command: e, parameter: t, callback: n, version: a });
        } } e.stub = true; function t(a) { if (!window[n] || window[n].stub !== true) {
            return;
        } if (!a.data) {
            return;
        } var i = typeof a.data === "string"; var e; try {
            e = i ? JSON.parse(a.data) : a.data;
        }
        catch (t) {
            return;
        } if (e[o]) {
            var r = e[o];
            window[n](r.command, r.parameter, function (e, t) { var n = {}; n[c] = { returnValue: e, success: t, callId: r.callId }; a.source.postMessage(i ? JSON.stringify(n) : n, "*"); }, r.version);
        } } if (typeof window[n] !== "function") {
            window[n] = e;
            if (window.addEventListener) {
                window.addEventListener("message", t, false);
            }
            else {
                window.attachEvent("onmessage", t);
            }
        } } e("__tcfapi", "__tcfapiBuffer", "__tcfapiCall", "__tcfapiReturn"); a("__tcfapiLocator"); })();
        // @ts-ignore
        (function (e) { var t = document.createElement("script"); t.id = "spcloader"; t.type = "text/javascript"; t.async = true; t.src = "https://sdk.privacy-center.org/" + e + "/loader.js?target=" + document.location.hostname; t.charset = "utf-8"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); })(options.apiKey);
        CmpDidomi.attach('didomiOnReady', function (Didomi) {
            console.log("didomiOnReady : trackConsent + logConsent");
            CmpDidomi.trackConsent();
            CmpDidomi.logConsent();
        });
    };
    CmpDidomi.logConsent = function () {
        CmpDidomi.attach('didomiEventListeners', {
            event: 'consent.changed',
            listener: function () {
                var id = cookies.get('didomi_token');
                if (id) {
                    cnil_log_service_1.cnilLogService.save(new cnil_log_1.CnilLog(id, 'popup', {
                        ads: CmpDidomi.isConsentedPurpose(Purpose.ADS),
                        analytics: CmpDidomi.isConsentedPurpose(Purpose.ANALYTICS),
                        social: CmpDidomi.isConsentedPurpose(Purpose.SOCIAL)
                    }));
                }
            }
        });
    };
    CmpDidomi.trackConsent = function () {
        var isEitherRtlOrFun = ['RTL', 'FUN_RADIO'].indexOf(env.getRenaissanceDomain()) > -1;
        if (!isEitherRtlOrFun) {
            return;
        }
        CmpDidomi.attach('didomiOnReady', function (Didomi) {
            if (Didomi.notice.isVisible()) {
                var img = document.createElement('img');
                img.src = 'https://www.dahta.fr/c/cs';
                document.getElementsByTagName('body')[0].appendChild(img);
            }
        });
        CmpDidomi.attach('didomiEventListeners', {
            event: 'consent.changed',
            listener: function () {
                var statusForAll = window.Didomi.getUserConsentStatusForAll();
                var status = '';
                if (statusForAll.purposes.enabled.length > 0 && statusForAll.purposes.disabled.length === 0)
                    status = 'ca';
                else if (statusForAll.purposes.enabled.length === 0 && statusForAll.purposes.disabled.length > 0)
                    status = 'cr';
                else if (statusForAll.purposes.enabled.length > 0 && statusForAll.purposes.disabled.length > 0)
                    status = 'cp';
                var img = document.createElement('img');
                img.src = 'https://www.dahta.fr/c/' + status;
                document.getElementsByTagName('body')[0].appendChild(img);
            }
        });
    };
    CmpDidomi.isConsentedPurpose = function (purpose) {
        var purposeId = CmpDidomi.toPurposeId(purpose);
        return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purposeId) || false;
    };
    CmpDidomi.attach = function (eventType, action) {
        window[eventType] = window[eventType] || [];
        window[eventType].push(action);
    };
    CmpDidomi.enablePurpose = function (purpose) {
        var purposeId = CmpDidomi.toPurposeId(purpose);
        var transaction = window.Didomi.openTransaction();
        transaction.enablePurpose(purposeId);
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
    CmpDidomi.toPurposeId = function (purpose) {
        var ids = RTLPurposeIds;
        return ids[purpose];
    };
})(CmpDidomi = exports.CmpDidomi || (exports.CmpDidomi = {}));
