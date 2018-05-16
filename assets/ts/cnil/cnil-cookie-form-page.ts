import * as $ from '../../js/utils/dom';
import {cnilCookie} from './cnil-cookie';

export namespace cnilCookieFormPage {
    export function init() {
        let form = document.forms['form-cnil'];

        if (form) {
            this.initFormWithCookie();

            form.addEventListener('submit', (e) => {
                cnilCookie.writeValues(this.getValue());

                this.fakeSave($(e.target));

                e.preventDefault();
            });
        }
    }

    export function isFormPage(): boolean {
        return document.forms['form-cnil'] != undefined;
    }

    export function initFormWithCookie(): void {
        let categories = cnilCookie.readValues();

        if (categories) {
            $(`input[name=cookiesForAds]`)[0].checked = categories.ads;
            $(`input[name=cookiesForAnalytics]`)[0].checked = categories.analytics;
            $(`input[name=cookiesForSocial]`)[0].checked = categories.social;
            $(`input[name=cookiesForPlayer]`)[0].checked = categories.player;
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

    export function fakeSave($form: any) {
        let $submitBtn = $form.select('button');
        let defaultText = $submitBtn[0].innerText;
        $submitBtn[0].innerText = "Chargement...";
        $submitBtn[0].disabled = true;

        setTimeout(() => {
            $submitBtn[0].innerText = defaultText;
            $submitBtn[0].disabled = false;
        }, 300);
    }
}