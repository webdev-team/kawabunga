
import * as env from '../env/env';
import * as cookies from 'js-cookie';
import {cnilCookie} from './cnil-cookie';
import {cnilCookieAutoUpdater} from './cnil-cookie-auto-updater';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import {cnilCookieFormPage} from './cnil-cookie-form-page';

export namespace cnil {
    export let cookie = cnilCookie;
    export let banner = cnilCookieBanner;
    export let formPage = cnilCookieFormPage;

    export function v2Active() : boolean {
        return env.getCookieDomain() == 'rtl2.fr' || env.getCookieDomain() == 'FUN_RADIO' || cookies.get('cnil-cookie-mode') == 'v2';
    }

    export function activateV2() : void {
        cookies.set('cnil-cookie-mode', 'v2');
    }

    export function isOn(category: string) : boolean {
        if (!v2Active()) {
            // while v2 is not active, all is on
            return true;
        }

        return cnilCookie.isOn(category)
    }

    export function isOff(category: string) : boolean {
        return !isOn(category);
    }
}

if (window.location.search.indexOf('cnil-cookie-mode-v2') != -1) {
    cnil.activateV2();
}

if (cnil.v2Active()) {
    cnilCookieAutoUpdater.init();
    cnilCookieBanner.init();
    cnilCookieFormPage.init();
}