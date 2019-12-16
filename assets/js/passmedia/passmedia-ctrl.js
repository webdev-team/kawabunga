"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var passmedia_popup_1 = require("./passmedia-popup");
var passmedia_1 = require("./passmedia");
var gigya_accounts_1 = require("./gigya-accounts");
var PassMediaCtrl;
(function (PassMediaCtrl) {
    var passmedia = new passmedia_1.PassMedia();
    var DEFAULT_OPTIONS = { onLogin: false };
    PassMediaCtrl.init = function (options) {
        if (options === void 0) { options = DEFAULT_OPTIONS; }
        return new Promise(function (resolve) {
            if (!passmedia.isAuthorizedToLoad()) {
                resolve(false);
                return;
            }
            passmedia.loadGigya()
                .then(options.onLogin ? gigya_accounts_1.GigyaAccounts.getTokenJWT_onLogin : gigya_accounts_1.GigyaAccounts.getTokenJWT)
                .then(passmedia.requestAutologin)
                .then(handleAutologinApproval)
                .then(resolve)
                .catch(function (err) {
                console.error('Gigya Error :', err);
                resolve(false);
            });
        });
    };
    var handleAutologinApproval = function (res) {
        passmedia.token = res.token;
        return new Promise(function (resolve) {
            switch (res.body.type) {
                case passmedia_1.Response.ASK_EMAIL:
                    console.log('PASSMEDIA - Ask for email verification');
                    resolve(false);
                    PassMediaCtrl.displayVerifyEmailPopup(res.body.email);
                    break;
                case passmedia_1.Response.REQUEST_APPROVAL:
                    PassMediaCtrl.displayLoginPopup(resolve);
                    break;
                case passmedia_1.Response.LOGIN_SUCCESS:
                    resolve(true);
                    break;
                case passmedia_1.Response.ERROR:
                    console.log('PASSMEDIA - Invalid request');
                    resolve(false);
                    break;
            }
        });
    };
    PassMediaCtrl.displayLoginPopup = function (resolve) {
        var requestLogin = function () {
            if (env.getEnv() == 'prod' || env.getEnv() == 'lab') {
                passmedia.requestLogin().then(function (result) { return PassMediaCtrl.handleLogin(result, resolve); });
            }
            else {
                console.log('REQUEST LOGIN');
            }
        };
        // todo fill CGU link
        new passmedia_popup_1.default({
            type: 'login',
            htmlClass: 'passmedia--login',
            onOk: requestLogin,
            afterDelay: requestLogin,
            onClose: function () {
                passmedia.enableAutologin(false);
                passmedia.countHit();
            }
        });
    };
    PassMediaCtrl.handleLogin = function (res, resolve) {
        switch (res.body.type) {
            case passmedia_1.Response.ASK_EMAIL:
                console.log('PASSMEDIA - Ask for email verification');
                resolve(false);
                PassMediaCtrl.displayVerifyEmailPopup(res.body.email);
                break;
            case passmedia_1.Response.LOGIN_SUCCESS:
                console.log('PASSMEDIA - Login success');
                resolve(true);
                passmedia.enableAutologin(true);
                break;
            case passmedia_1.Response.ERROR:
                console.log('PASSMEDIA - Invalid request');
                resolve(false);
                break;
        }
    };
    PassMediaCtrl.displayVerifyEmailPopup = function (email) {
        new passmedia_popup_1.default({
            type: 'verifyEmail',
            htmlClass: 'passmedia--verify',
            data: {
                email: email,
            },
            onOk: function () {
                gigya_accounts_1.GigyaAccounts.sendValidationEmail(email);
                PassMediaCtrl.displayFeedbackPopup(email);
            },
            onClose: function () {
                passmedia.enableAutologin(false);
                passmedia.countHit();
            }
        });
    };
    PassMediaCtrl.displayFeedbackPopup = function (email) {
        new passmedia_popup_1.default({
            type: 'feedback',
            htmlClass: 'passmedia--verify',
            data: { email: email }
        });
    };
})(PassMediaCtrl = exports.PassMediaCtrl || (exports.PassMediaCtrl = {}));
