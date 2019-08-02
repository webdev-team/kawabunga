"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var scriptLoader = require("../../js/utils/script-loader.js");
var Purpose;
(function (Purpose) {
    Purpose["COOKIE"] = "cookies";
    Purpose["AD_PERSONALIZATION"] = "advertising_personalization";
    Purpose["CONTENT_PERSONALIZATION"] = "content_personalization";
    Purpose["ANALYTICS"] = "analytics";
    Purpose["AD_DELIVERY"] = "ad_delivery";
})(Purpose = exports.Purpose || (exports.Purpose = {}));
var getThemeColor = function () {
    var themeColor;
    switch (env.getSite()) {
        case 'www.rtl.fr':
            themeColor = '#E1001B';
            break;
        case 'www.funradio.fr':
            themeColor = '#00AFEC';
            break;
        default:
            themeColor = '#E1001B';
    }
    return themeColor;
};
exports.init = function () {
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
    window.didomiConfig = didomiConfig();
    scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js');
};
var didomiConfig = function () {
    var themeColor = getThemeColor();
    return {
        app: {
            apiKey: '<Your API key>',
            vendors: {
                iab: {
                    all: true
                }
            }
        },
        preferences: {
            enableAllButtons: true,
        },
        notice: {
            position: 'top'
        },
        theme: {
            color: '#D1D1D1',
            linkColor: themeColor,
            font: 'Arial',
            buttons: {
                regularButtons: {
                    backgroundColor: '#eeeeee',
                    textColor: '#212121',
                    borderColor: 'rgba(34, 34, 34, 0.2)',
                    borderWidth: '1px',
                    borderRadius: '0px'
                },
                highlightButtons: {
                    backgroundColor: themeColor,
                    textColor: '#ffffff',
                    borderColor: themeColor,
                    borderWidth: '1px',
                    borderRadius: '0px'
                }
            }
        }
    };
};
exports.isConsentedPurpose = function (purpose) {
    return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purpose) || false;
};
exports.attach = function (eventType, action) {
    window[eventType] = window[eventType] || [];
    window[eventType].push(action);
};
exports.isCookiesAllowed = function () {
    return exports.isConsentedPurpose(Purpose.COOKIE);
};
exports.isAdPersonalizationAllowed = function () {
    return exports.isConsentedPurpose(Purpose.AD_PERSONALIZATION);
};
exports.isContentPersonalizationAllowed = function () {
    return exports.isConsentedPurpose(Purpose.CONTENT_PERSONALIZATION);
};
exports.isAnalyticsAllowed = function () {
    return exports.isConsentedPurpose(Purpose.ANALYTICS);
};
exports.isAdDeliveryAllowed = function () {
    return exports.isConsentedPurpose(Purpose.AD_DELIVERY);
};
