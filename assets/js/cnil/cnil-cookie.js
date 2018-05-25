"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cookies = require("js-cookie");
var env = require("../env/env");
// categories
exports.ADS = 'ads';
exports.ANALYTICS = 'analytics';
exports.SOCIAL = 'social';
exports.PLAYER = 'player';
exports.COOKIE_NAME = 'cnil-cookie-v2';
exports.COOKIE_DURATION = 365 + 28; // about 13 months
exports.ALL_ON = { ads: true, analytics: true, social: true, player: true };
exports.ALL_OFF = { ads: false, analytics: false, social: false, player: false };
var cnilCookie;
(function (cnilCookie) {
    function writeValues(categories) {
        cookies.set(exports.COOKIE_NAME, JSON.stringify(categories), { expires: exports.COOKIE_DURATION, path: '/', domain: env.getCookieDomain() });
    }
    cnilCookie.writeValues = writeValues;
    function setCategory(category, value) {
        var cookie = this.readValues() || { ads: true, analytics: true, social: true, player: true };
        cookie[category] = value;
        this.writeValues(cookie);
    }
    cnilCookie.setCategory = setCategory;
    function readValues() {
        var values = cookies.get(exports.COOKIE_NAME);
        try {
            return JSON.parse(values);
        }
        catch (e) {
            return null;
        }
    }
    cnilCookie.readValues = readValues;
    function hasValidCookie() {
        return readValues() != null;
    }
    cnilCookie.hasValidCookie = hasValidCookie;
    function isOn(category) {
        var categories = readValues();
        if (categories) {
            return categories[category];
        }
        else {
            return false;
        }
    }
    cnilCookie.isOn = isOn;
})(cnilCookie = exports.cnilCookie || (exports.cnilCookie = {}));
