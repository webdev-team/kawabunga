import * as userAgent from '../env/user-agent';
import * as $ from '../../js/utils/dom';
import {cnilCookie} from './cnil-cookie';
import {ALL_ON} from './cnil-cookie';
import debounce from '../utils/debounce';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import {cnilCookieFormPage} from './cnil-cookie-form-page';

export namespace cnilCookieAutoUpdater {

    export function init() {
        if (this.isActive()) {

            $(document.body).on('click', 'a:not([data-cnil="1"])', (e) => {
                cnilCookie.writeValues(ALL_ON);
            });

            window.addEventListener('scroll', debounce(() => {
                if (window.pageYOffset > window.innerHeight) {
                    cnilCookie.writeValues(ALL_ON);
                    cnilCookieBanner.hide();
                }
            }, 500));
        }
    }

    export function isActive() {
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnilCookieFormPage.isFormPage();
    }
}

