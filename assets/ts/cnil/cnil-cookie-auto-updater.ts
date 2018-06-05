import * as $ from '../../js/utils/dom';
import debounce from '../../js/utils/debounce';
import {ALL_ON, CLICK_ACTION, cnilCookie, SCROLL_ACTION} from './cnil-cookie';
import {cnilCookieBanner} from "./cnil-cookie-banner";
import * as env from '../env/env';

export namespace cnilCookieAutoUpdater {
    export let consumed = false;

    function onClick(e) {
        if (consumed) {
            return;
        }

        let $anchor = $(e.target).parent('A');

        if ($anchor.length == 1 && $anchor[0].href.indexOf(env.getSite()) !== -1) {
            cnilCookie.writeValues(ALL_ON, CLICK_ACTION);
        }
    }

    function onScroll() {
        if (consumed) {
            return;
        }

        if (window.pageYOffset > window.innerHeight) {
            cnilCookie.writeValues(ALL_ON, SCROLL_ACTION);
            cnilCookieBanner.hideMainBanner();
        }
    }

    export function init() {
        if (cnilCookie.isActive()) {
            $(document.body).on('click', 'a:not([data-cnil="1"])', onClick);

            window.addEventListener('scroll', debounce(() => onScroll(), 300));

            cnilCookie.onChange(() => {
                // cookie has been written (through this module code or even banner or else)
                consumed = true;
            })
        }
    }

    export function isCnilSafe(): boolean {
        return document.querySelector('[data-cnil-safe="true"]') != undefined;
    }
}
