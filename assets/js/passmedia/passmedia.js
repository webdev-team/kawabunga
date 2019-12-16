"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var passmedia_capping_1 = require("./passmedia-capping");
var http = require("superagent");
var cookies = require("js-cookie");
var scriptLoader = require("../../js/utils/script-loader");
var passmedia_env_1 = require("./passmedia-env");
var Response;
(function (Response) {
    Response["ASK_EMAIL"] = "ASK_FOR_EMAIL_VERIFICATION";
    Response["REQUEST_APPROVAL"] = "REQUEST_APPROVAL";
    Response["LOGIN_SUCCESS"] = "LOGIN_SUCCESS";
    Response["ERROR"] = "ERROR_INVALID_REQUEST";
})(Response = exports.Response || (exports.Response = {}));
var PassMedia = /** @class */ (function () {
    function PassMedia() {
        this.capping = new passmedia_capping_1.default(cookies.getJSON(passmedia_env_1.COOKIE.NAME));
    }
    Object.defineProperty(PassMedia.prototype, "token", {
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PassMedia.prototype, "state", {
        get: function () {
            return {
                emailVerified: this.emailVerified
            };
        },
        enumerable: true,
        configurable: true
    });
    PassMedia.prototype.loadGigya = function () {
        return scriptLoader.ensureLoaded("https://cdns.eu1.gigya.com/js/gigya.js?apikey=" + passmedia_env_1.API.GIGYA_KEY);
    };
    PassMedia.prototype.requestAutologin = function (result) {
        return new Promise(function (resolve) {
            if (!('id_token' in result)) {
                resolve(false);
            }
            var params = { 'token': result.id_token };
            http.post(passmedia_env_1.API.AUTOLOGIN)
                .withCredentials()
                .type('json')
                .send(params)
                .end(function (err, res) {
                resolve(__assign({}, res, params));
            });
        });
    };
    PassMedia.prototype.requestLogin = function () {
        var params = { 'token': this._token };
        return new Promise(function (resolve) {
            http.post(passmedia_env_1.API.LOGIN)
                .withCredentials()
                .type('json')
                .send(params)
                .end(function (err, res) {
                resolve(res);
            });
        });
    };
    PassMedia.prototype.isAuthorizedToLoad = function () {
        return this.capping.canHit() && !window.disablePassmedia;
    };
    PassMedia.prototype.rejectAutologin = function () {
        cookies.set(passmedia_env_1.COOKIE.NAME, this.capping.getJSON(), __assign({}, passmedia_env_1.COOKIE.DURATION, passmedia_env_1.COOKIE.PATH_AND_DOMAIN));
    };
    PassMedia.prototype.enableAutologin = function (enable) {
        if (enable) {
            cookies.remove(passmedia_env_1.COOKIE.NAME, passmedia_env_1.COOKIE.PATH_AND_DOMAIN);
        }
        else {
            this.rejectAutologin();
        }
    };
    PassMedia.prototype.countHit = function () {
        this.capping.hit();
        cookies.set(passmedia_env_1.COOKIE.NAME, this.capping.getJSON(), passmedia_env_1.COOKIE.PATH_AND_DOMAIN);
    };
    return PassMedia;
}());
exports.PassMedia = PassMedia;
