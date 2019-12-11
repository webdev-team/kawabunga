"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = require("../env/env");
var passmedia_popup_1 = require("./passmedia-popup");
var passmedia_1 = require("./passmedia");
var PassMediaCtrl;
(function (PassMediaCtrl) {
    var passmedia = new passmedia_1.PassMedia();
    PassMediaCtrl.init = function () {
        return new Promise(function (resolve) {
            if (!passmedia.isAuthorizedToLoad()) {
                resolve(false);
                return;
            }
            passmedia.loadGigya()
                .then(env.isProd() ? passmedia.getTokenJWT_onLogin : passmedia.getTokenJWT) // event onLogin isn't fired on local
                .then(passmedia.requestAutologin)
                .then(askAutologinApproval)
                .then(resolve)
                .catch(function (err) {
                console.error('Gigya Error :', err);
                resolve(false);
            });
        });
    };
    var askAutologinApproval = function (res) {
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
        var requestLogin = function () { return env.isProd() ? passmedia.requestLogin().then(function (result) { return PassMediaCtrl.handleLogin(result, resolve); }) : console.log('REQUEST LOGIN'); };
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
                // passmedia.enableAutologin(true);
                passmedia.sendValidationEmail(email);
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
