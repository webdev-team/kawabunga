import * as $ from '../../js/utils/dom';
import debounce from '../../js/utils/debounce';
import {ALL_ON, CLICK_ACTION, cnilCookie, SCROLL_ACTION} from './cnil-cookie';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import * as env from '../env/env';

export namespace cnilCookieAutoUpdater {
    export function init() {
        if (cnilCookie.isActive()) {

            $(document.body).on('click', 'a:not([data-cnil="1"])', e => {
                let $anchor = $(e.target).parent('A');

                if ($anchor.length == 1 && $anchor[0].href.indexOf(env.getSite()) !== -1) {
                    cnilCookie.writeValues(ALL_ON, CLICK_ACTION);
                }
            });

            window.addEventListener('scroll', debounce(() => {
                if (window.pageYOffset > window.innerHeight) {
                    cnilCookie.writeValues(ALL_ON, SCROLL_ACTION);
                    cnilCookieBanner.hideMainBanner();
                }
            }, 500));
        }
    }

    export function isCnilSafe(): boolean {
        return document.querySelector('[data-cnil-safe="true"]') != undefined;
    }
}
