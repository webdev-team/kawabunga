import * as userAgent from '../../js/env/user-agent';
import * as $ from '../../js/utils/dom';
import debounce from '../../js/utils/debounce';
import {ALL_ON, cnilCookie} from './cnil-cookie';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import {cnilCookieFormPage} from './cnil-cookie-form-page';
import * as env from '../env/env';

export namespace cnilCookieAutoUpdater {
    export function init() {
        if (isActive()) {

            $(document.body).on('click', 'a:not([data-cnil="1"])', e => {
                let $anchor = $(e.target).parent('A');

                if ($anchor.length == 1 && $anchor[0].href.indexOf(env.getSite()) !== -1) {
                    cnilCookie.writeValues(ALL_ON);
                }
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
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnilCookieFormPage.isCnilSafe();
    }

    function isInternalLink(linkElem): boolean {
        let internalSites: string[] = ['www.rtl.fr', 'www.rtl2.fr', 'www.funradio.fr'];
        let isInternalLink: boolean = false;

        internalSites.forEach((site) => {
            if (linkElem.href.indexOf(site) !== -1) {
                isInternalLink = true;
            }
        });

        return isInternalLink;
    }
}
