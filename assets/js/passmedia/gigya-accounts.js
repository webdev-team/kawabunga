"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GigyaAccounts;
(function (GigyaAccounts) {
    GigyaAccounts.getTokenJWT = function () {
        return new Promise(function (resolve, reject) {
            window.gigya.accounts.getJWT({
                fields: 'profile.email,data.mailVerified',
                callback: function (result) {
                    if (result.status === 'OK') {
                        resolve(result);
                    }
                    else {
                        reject(new Error('Passmedia Email not verified'));
                    }
                }
            });
        });
    };
    GigyaAccounts.getTokenJWT_onLogin = function () {
        return new Promise(function (resolve, reject) {
            window.gigya.accounts.addEventHandlers({
                onLogin: function () { return GigyaAccounts.getTokenJWT().then(resolve).catch(reject); }
            });
        });
    };
    GigyaAccounts.sendValidationEmail = function (email) {
        window.gigya.accounts.resendVerificationCode({
            email: email
        });
    };
})(GigyaAccounts = exports.GigyaAccounts || (exports.GigyaAccounts = {}));
