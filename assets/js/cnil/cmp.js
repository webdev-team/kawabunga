"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iab_1 = require("./iab");
var euconsent_cookie_1 = require("./euconsent-cookie");
var cnil_1 = require("./cnil");
var env = require("../env/env");
function ping(callback) {
    var result = new iab_1.PingReturn();
    result.gpdrAppliesGlobaly = true;
    result.cmpLoaded = true;
    callback(result, true);
}
exports.ping = ping;
function getConsentData(consentStringVersion, callback) {
    var result = new iab_1.VendorConsentData();
    result.gpdrApplies = true;
    result.hasGlobalScope = true;
    result.consentData = euconsent_cookie_1.euconsent.cookie.read().getConsentString();
    callback(result, true);
}
exports.getConsentData = getConsentData;
function getVendorConsents(vendorsId, callback) {
    var consent = euconsent_cookie_1.euconsent.cookie.read();
    var result = new iab_1.VendorConsents();
    var purposeConsents = {};
    for (var _i = 0, _a = iab_1.m6Vendors.purposes; _i < _a.length; _i++) {
        var purpose = _a[_i];
        purposeConsents[purpose.id] = true;
    }
    var vendorConsents = {};
    for (var _b = 0, _c = consent.getVendorsAllowed(); _b < _c.length; _b++) {
        var vendor = _c[_b];
        if (vendorsId) {
            if (vendorsId.indexOf(vendor) != -1) {
                vendorConsents[vendor] = true;
            }
        }
        else {
            vendorConsents[vendor] = true;
        }
    }
    // clean consent to build metadata
    consent.setPurposesAllowed([]);
    consent.setVendorsAllowed([]);
    var metadata = consent.getConsentString();
    result.gpdrApplies = true;
    result.hasGlobalScope = true;
    result.purposeConsents = purposeConsents;
    result.vendorConsents = vendorConsents;
    result.metadata = metadata;
    callback(result, true);
}
exports.getVendorConsents = getVendorConsents;
function onCnilCategoriesChange(categories) {
    var consent = euconsent_cookie_1.euconsent.cookie.read();
    if (consent == null) {
        consent = euconsent_cookie_1.euconsent.newFullConsent();
    }
    if (categories.ads) {
        consent.setPurposesAllowed(euconsent_cookie_1.euconsent.allPurposeIds());
    }
    else {
        consent.setPurposesAllowed([]);
    }
    euconsent_cookie_1.euconsent.cookie.write(consent);
}
exports.onCnilCategoriesChange = onCnilCategoriesChange;
if (env.isFlag("cmp")) {
    window.__cmp = function (command, parameter, callback) {
        if (parameter === void 0) { parameter = null; }
        if (callback === void 0) { callback = null; }
        switch (command) {
            case 'ping':
                ping(callback);
                break;
            case 'getVendorConsents':
                getVendorConsents(parameter, callback);
                break;
            case 'getConsentData':
                getConsentData(parameter, callback);
                break;
            case 'showConsentTool':
                cnil_1.cnil.banner.showMainBanner();
                break;
            default:
                console.error('unsupported __cmp command');
        }
    };
    // init euconsent cookie with cnil cookie if euconsent wasn't there
    if (cnil_1.cnil.cookie.hasValidCookie() && !euconsent_cookie_1.euconsent.cookie.exists()) {
        onCnilCategoriesChange(cnil_1.cnil.cookie.readValues());
    }
    cnil_1.cnil.cookie.onChange(onCnilCategoriesChange);
}
