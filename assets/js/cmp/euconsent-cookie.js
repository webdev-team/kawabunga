"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consent_string_1 = require("consent-string");
var cookies = require("js-cookie");
var vendor_list_1 = require("./vendor-list");
var cnil_cookie_1 = require("../cnil/cnil-cookie");
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
        var consent = new consent_string_1.ConsentString();
        consent.setCmpId(euconsent.CMP_ID);
        consent.setCmpVersion(euconsent.CMP_VERSION);
        consent.setConsentLanguage('fr');
        consent.setGlobalVendorList(vendor_list_1.m6Vendors);
        consent.setPurposesAllowed(allPurposeIds());
        consent.setVendorsAllowed(allVendorIds());
        return consent;
    }
    euconsent.newFullConsent = newFullConsent;
    function newNoConsent() {
        var consent = new consent_string_1.ConsentString();
        consent.setCmpId(euconsent.CMP_ID);
        consent.setCmpVersion(euconsent.CMP_VERSION);
        consent.setConsentLanguage('fr');
        consent.setGlobalVendorList(vendor_list_1.m6Vendors);
        consent.setPurposesAllowed([]);
        consent.setVendorsAllowed([]);
        return consent;
    }
    euconsent.newNoConsent = newNoConsent;
    function allPurposeIds() {
        return vendor_list_1.m6Vendors.purposes.map(function (purpose) { return purpose.id; });
    }
    euconsent.allPurposeIds = allPurposeIds;
    function allVendorIds() {
        return vendor_list_1.m6Vendors.vendors.map(function (vendor) { return vendor.id; });
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
            if (value) {
                var consent = new consent_string_1.ConsentString(value);
                consent.setGlobalVendorList(vendor_list_1.m6Vendors);
                return consent;
            }
            else {
                return null;
            }
        }
        cookie.read = read;
        function write(consent) {
            cookies.set(euconsent.COOKIE_NAME, consent.getConsentString(), { expires: cnil_cookie_1.COOKIE_DURATION, path: '/', domain: env.getCookieDomain() });
        }
        cookie.write = write;
    })(cookie = euconsent.cookie || (euconsent.cookie = {}));
})(euconsent = exports.euconsent || (exports.euconsent = {}));
