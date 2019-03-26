"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var euconsent_cookie_1 = require("./euconsent-cookie");
var cnil_1 = require("../cnil/cnil");
var PingReturn = /** @class */ (function () {
    function PingReturn() {
    }
    return PingReturn;
}());
exports.PingReturn = PingReturn;
var VendorConsentData = /** @class */ (function () {
    function VendorConsentData() {
    }
    return VendorConsentData;
}());
exports.VendorConsentData = VendorConsentData;
var VendorConsents = /** @class */ (function () {
    function VendorConsents() {
    }
    return VendorConsents;
}());
exports.VendorConsents = VendorConsents;
function ping(callback) {
    var result = new PingReturn();
    result.gdprAppliesGlobaly = true;
    result.cmpLoaded = true;
    callback(result, true);
}
exports.ping = ping;
function getConsentData(consentStringVersion, callback) {
    var result = new VendorConsentData();
    result.gdprApplies = true;
    result.hasGlobalScope = true;
    if (euconsent_cookie_1.euconsent.cookie.exists()) {
        result.consentData = euconsent_cookie_1.euconsent.cookie.read().getConsentString();
    }
    else {
        result.consentData = euconsent_cookie_1.euconsent.newNoConsent().getConsentString();
    }
    callback(result, true);
}
exports.getConsentData = getConsentData;
function getVendorConsents(vendorsId, callback) {
    var consent = euconsent_cookie_1.euconsent.cookie.read();
    if (consent == null) {
        consent = euconsent_cookie_1.euconsent.newNoConsent();
    }
    var result = new VendorConsents();
    var purposeConsents = {};
    for (var _i = 0, _a = consent.getPurposesAllowed(); _i < _a.length; _i++) {
        var purpose = _a[_i];
        purposeConsents[purpose] = true;
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
    result.gdprApplies = true;
    result.hasGlobalScope = true;
    result.purposeConsents = purposeConsents;
    result.vendorConsents = vendorConsents;
    result.metadata = metadata;
    callback(result, true);
}
exports.getVendorConsents = getVendorConsents;
function onCnilCategoriesChange(event) {
    if (event.oldValue != null && event.oldValue.ads == event.value.ads) {
        return;
    }
    var consent = euconsent_cookie_1.euconsent.cookie.read();
    if (consent == null) {
        consent = euconsent_cookie_1.euconsent.newFullConsent();
    }
    if (event.value.ads) {
        consent.setPurposesAllowed(euconsent_cookie_1.euconsent.allPurposeIds());
        consent.setVendorsAllowed(euconsent_cookie_1.euconsent.allVendorIds());
    }
    else {
        consent.setPurposesAllowed([]);
        consent.setVendorsAllowed([]);
    }
    euconsent_cookie_1.euconsent.cookie.write(consent);
}
exports.onCnilCategoriesChange = onCnilCategoriesChange;
function __cmp(command, parameter, callback) {
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
}
exports.__cmp = __cmp;
