
import * as env from '../env/env';
import {cnilCookie} from './cnil-cookie';
import {cnilCookieAutoUpdater} from './cnil-cookie-auto-updater';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import {cnilCookieFormPage} from './cnil-cookie-form-page';

export namespace cnil {
    export function v2Active() {
        return env.isFlag('cnil-v2');
    }

    export function isOn(category: string) : boolean {
        if (!this.v2Active()) {
            // while v2 is not active, all is on
            return true;
        }

        return cnilCookie.isOn(category)
    }

    export function isOff(category: string) : boolean {
        return !this.isOn(category);
    }
}

if (cnil.v2Active()) {
    cnilCookieAutoUpdater.init();
    cnilCookieBanner.init();
    cnilCookieFormPage.init();
}