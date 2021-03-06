"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = require("../../js/env/user-agent");
var cookies = require("js-cookie");
var env = require("../env/env");
var random = require("../utils/random");
var cnil_cookie_auto_updater_1 = require("./cnil-cookie-auto-updater");
var observable_1 = require("../utils/observable");
// categories
exports.ADS = 'ads';
exports.ANALYTICS = 'analytics';
exports.SOCIAL = 'social';
exports.COOKIE_NAME = 'cnil-cookie-v2';
exports.COOKIE_ID_NAME = 'cnil-cookie-id';
var ONE_YEAR = 365;
exports.COOKIE_DURATION = ONE_YEAR + 28; // about 13 months
exports.COOKIE_ID_DURATION = 10 * ONE_YEAR;
exports.ALL_ON = { ads: true, analytics: true, social: true };
exports.ALL_OFF = { ads: false, analytics: false, social: false };
// action types
exports.BANNER_ACTION = 'banner';
exports.CLICK_ACTION = 'click';
exports.SCROLL_ACTION = 'scroll';
exports.PREFERENCES_ACTION = 'preferences';
var cnilCookie;
(function (cnilCookie) {
    var observable = new observable_1.Observable();
    function ensureId() {
        if (!cookies.get(exports.COOKIE_ID_NAME)) {
            cookies.set(exports.COOKIE_ID_NAME, random.uuid(), { expires: exports.COOKIE_ID_DURATION, path: '/', domain: env.getCookieDomain() });
        }
    }
    cnilCookie.ensureId = ensureId;
    function getId() {
        if (!cookies.get(exports.COOKIE_ID_NAME)) {
            ensureId();
        }
        return cookies.get(exports.COOKIE_ID_NAME);
    }
    cnilCookie.getId = getId;
    function writeValues(categories, actionType) {
        var oldValue = readValues();
        cookies.set(exports.COOKIE_NAME, JSON.stringify(categories), { expires: exports.COOKIE_DURATION, path: '/', domain: env.getCookieDomain() });
        observable.fire({ value: readValues(), oldValue: oldValue });
    }
    cnilCookie.writeValues = writeValues;
    function setCategory(category, value, actionType) {
        var cookie = readValues() || { ads: true, analytics: true, social: true };
        cookie[category] = value;
        writeValues(cookie, actionType);
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
    function isActive() {
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnil_cookie_auto_updater_1.cnilCookieAutoUpdater.isCnilSafe();
    }
    cnilCookie.isActive = isActive;
    function onChange(handler) {
        observable.observe(handler);
    }
    cnilCookie.onChange = onChange;
})(cnilCookie = exports.cnilCookie || (exports.cnilCookie = {}));
