import PassMediaCapping from "./passmedia-capping";
import * as http from 'superagent';
import * as cookies from 'js-cookie';
import * as scriptLoader from "../../js/utils/script-loader";
import {API, COOKIE} from './passmedia-env';


export enum Response {
    ASK_EMAIL = 'ASK_FOR_EMAIL_VERIFICATION',
    REQUEST_APPROVAL = 'REQUEST_APPROVAL',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    ERROR = 'ERROR_INVALID_REQUEST'
}

export class PassMedia {
    private capping: PassMediaCapping;
    public emailVerified: boolean;
    private _token: string;

    constructor() {
        this.capping = new PassMediaCapping(cookies.getJSON(COOKIE.NAME));
    }

    set token(token: string) {
        this._token = token;
    }

    get state() {
        return {
            emailVerified: this.emailVerified
        }
    }

    loadGigya() {
        return scriptLoader.ensureLoaded(`https://cdns.eu1.gigya.com/js/gigya.js?apikey=${API.GIGYA_KEY}`);
    }

    requestAutologin(result): Promise<any> {
        return new Promise((resolve) => {

            if (!('id_token' in result)) {
                resolve(false);
            }

            let params = {'token': result.id_token};

            http.post(API.AUTOLOGIN)
                .withCredentials()
                .type('json')
                .send(params)
                .end((err, res) => {
                    resolve({...res, ...params});
                });
        });
    }

    requestLogin(): Promise<any> {
        let params = {'token': this._token};
        return new Promise( (resolve) => {
            http.post(API.LOGIN)
                .withCredentials()
                .type('json')
                .send(params)
                .end((err, res) => {
                    resolve(res);
                });
        });
    }

    isAuthorizedToLoad(): boolean {
        return this.capping.canHit() && !window.disablePassmedia;
    }

    rejectAutologin(): void {
        cookies.set(COOKIE.NAME, this.capping.getJSON(), {...COOKIE.DURATION, ...COOKIE.PATH_AND_DOMAIN})
    }

    enableAutologin(enable: boolean): void {
        if (enable) {
            cookies.remove(COOKIE.NAME, COOKIE.PATH_AND_DOMAIN);
        } else {
            this.rejectAutologin();
        }
    }

    countHit() {
        this.capping.hit();
        cookies.set(COOKIE.NAME, this.capping.getJSON(), COOKIE.PATH_AND_DOMAIN);
    }
}
