"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scriptLoader = require("../../js/utils/script-loader.js");
var didomi_config_1 = require("./didomi-config");
var Purpose;
(function (Purpose) {
    Purpose["COOKIE"] = "cookies";
    Purpose["AD_PERSONALIZATION"] = "advertising_personalization";
    Purpose["CONTENT_PERSONALIZATION"] = "content_personalization";
    Purpose["ANALYTICS"] = "analytics";
    Purpose["AD_DELIVERY"] = "ad_delivery";
})(Purpose = exports.Purpose || (exports.Purpose = {}));
exports.init = function (options) {
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
    window.didomiConfig = didomi_config_1.didomiConfig(options);
    scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js');
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
