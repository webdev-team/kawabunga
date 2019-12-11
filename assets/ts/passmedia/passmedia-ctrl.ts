import * as env from '../env/env';
import PassMediaPopup from './passmedia-popup';
import {PassMedia, Response} from "./passmedia";

declare global {
    interface Window {
        location: Location;
        gigya: any;
        disablePassmedia: boolean;
    }
}

export namespace PassMediaCtrl {
    let passmedia = new PassMedia();

    export let init = function (): Promise<boolean> {
        return new Promise((resolve) => {

            if (!passmedia.isAuthorizedToLoad()) {
                resolve(false);

                return;
            }

            passmedia.loadGigya()
                .then(env.isProd() ? passmedia.getTokenJWT_onLogin : passmedia.getTokenJWT) // event onLogin isn't fired on local
                .then(passmedia.requestAutologin)
                .then(askAutologinApproval)
                .then(resolve)
                .catch((err) => {
                    console.error('Gigya Error :', err);
                    resolve(false);
                });
        });
    };

    let askAutologinApproval = function(res) {
        passmedia.token = res.token;

        return new Promise( (resolve) => {
            switch (res.body.type) {
                case Response.ASK_EMAIL:
                    console.log('PASSMEDIA - Ask for email verification');
                    resolve(false);
                    displayVerifyEmailPopup(res.body.email);
                    break;
                case Response.REQUEST_APPROVAL:
                    displayLoginPopup(resolve);
                    break;
                case Response.LOGIN_SUCCESS:
                    resolve(true);
                    break;
                case Response.ERROR:
                    console.log('PASSMEDIA - Invalid request');
                    resolve(false);
                    break;
            }
        });
    };

    export let displayLoginPopup = function (resolve) {
        const requestLogin = () => env.isProd() ? passmedia.requestLogin().then((result) => handleLogin(result, resolve)) : console.log('REQUEST LOGIN');

        // todo fill CGU link
        new PassMediaPopup({
            type: 'login',
            htmlClass: 'passmedia--login',
            onOk: requestLogin,
            afterDelay: requestLogin,
            onClose: () => {
                passmedia.enableAutologin(false);
                passmedia.countHit();
            }
        });
    };

    export let handleLogin = function (res, resolve) {
        switch (res.body.type) {
            case Response.ASK_EMAIL:
                console.log('PASSMEDIA - Ask for email verification');
                resolve(false);
                displayVerifyEmailPopup(res.body.email);
                break;
            case Response.LOGIN_SUCCESS:
                console.log('PASSMEDIA - Login success');
                resolve(true);
                passmedia.enableAutologin(true);
                break;
            case Response.ERROR:
                console.log('PASSMEDIA - Invalid request');
                resolve(false);
                break;
        }
    };

    export let displayVerifyEmailPopup = function (email) {
        new PassMediaPopup({
            type: 'verifyEmail',
            htmlClass: 'passmedia--verify',
            data: {
                email: email,
            },
            onOk: () => {
                // passmedia.enableAutologin(true);
                passmedia.sendValidationEmail(email);
                displayFeedbackPopup(email);
            },
            onClose: () => {
                passmedia.enableAutologin(false);
                passmedia.countHit();
            }
        });
    };


    export let displayFeedbackPopup = function (email: string) {
      new PassMediaPopup({
         type: 'feedback',
         htmlClass: 'passmedia--verify',
         data: { email: email }
      });
    };
}
