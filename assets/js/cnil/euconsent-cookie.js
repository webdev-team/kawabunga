"use strict";
/**
 * https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS has not been released with correct typings yet
 * See https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS/issues/21
 * Once release import may change
 */
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("consent-string/src");
var cookies = require("js-cookie");
var iab_1 = require("./iab");
var cnil_cookie_1 = require("./cnil-cookie");
var env = require("../env/env");
var euconsent;
(function (euconsent) {
    euconsent.COOKIE_NAME = 'euconsent';
    euconsent.CMP_VERSION = 1;
    /**
     * TODO : use correct id
     */
    euconsent.CMP_ID = 12345678;
    function newFullConsent() {
        var consent = new src_1.ConsentString();
        consent.setCmpId(euconsent.CMP_ID);
        consent.setCmpVersion(euconsent.CMP_VERSION);
        consent.setConsentLanguage('fr');
        consent.setGlobalVendorList(iab_1.m6Vendors);
        consent.setPurposesAllowed(allPurposeIds());
        consent.setVendorsAllowed(allVendorIds());
        return consent;
    }
    euconsent.newFullConsent = newFullConsent;
    function allPurposeIds() {
        return iab_1.m6Vendors.purposes.map(function (purpose) { return purpose.id; });
    }
    euconsent.allPurposeIds = allPurposeIds;
    function allVendorIds() {
        return iab_1.m6Vendors.vendors.map(function (vendor) { return vendor.id; });
    }
    euconsent.allVendorIds = allVendorIds;
    var cookie;
    (function (cookie) {
        function exists() {
            return read() != null;
        }
        cookie.exists = exists;
        function read() {
            var value = cookies.get(euconsent.COOKIE_NAME);
            return value ? new src_1.ConsentString(value) : null;
        }
        cookie.read = read;
        function write(consent) {
            cookies.set(euconsent.COOKIE_NAME, consent.getConsentString(), { expires: cnil_cookie_1.COOKIE_DURATION, path: '/', domain: env.getCookieDomain() });
        }
        cookie.write = write;
    })(cookie = euconsent.cookie || (euconsent.cookie = {}));
})(euconsent = exports.euconsent || (exports.euconsent = {}));
