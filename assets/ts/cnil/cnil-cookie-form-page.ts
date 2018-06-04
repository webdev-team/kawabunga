import * as $ from '../../js/utils/dom';
import {cnilCookie} from './cnil-cookie';

export namespace cnilCookieFormPage {
    export function init() {
        let form = document.forms['form-cnil'];

        if (form) {
            initFormWithCookie();

            $(`input[type=checkbox]`).forEach((input) => {
                input.addEventListener('change', () => {
                    cnilCookie.writeValues(getValue());
                });
            });
        }
    }

    export function initFormWithCookie(): void {
        let categories = cnilCookie.readValues();

        if (categories) {
            $(`input[name=cookiesForAds]`)[0].checked = categories.ads;
            $(`input[name=cookiesForAnalytics]`)[0].checked = categories.analytics;
            $(`input[name=cookiesForSocial]`)[0].checked = categories.social;
            $(`input[name=cookiesForPlayer]`)[0].checked = categories.player;
        } else {
            $(`input[type=checkbox]`).forEach((input) => input.checked = true);
        }
    }

    export function getValue(): any {
        return {
            ads: $(`input[name=cookiesForAds]`)[0].checked,
            analytics: $(`input[name=cookiesForAnalytics]`)[0].checked,
            social: $(`input[name=cookiesForSocial]`)[0].checked,
            player: $(`input[name=cookiesForPlayer]`)[0].checked
        };
    }
}