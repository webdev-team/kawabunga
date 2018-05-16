import * as userAgent from '../env/user-agent';
import {ALL_OFF, ALL_ON, CnilCategories, PLAYER} from './cnil-cookie';
import * as $ from '../../js/utils/dom';
import {cnilCookie} from './cnil-cookie';
import {cnilCookieFormPage} from './cnil-cookie-form-page';

export type OkCallback = () => void;

export namespace cnilCookieBanner {
    export let $banner: any;
    export let $playerBanners: any[] = [];

    export function init() {
        if (this.isActive()) {
            this.injectBanner($('#main-wrapper'));
        }
    }

    export function setCookieOn(category: string = null): void {

        if (category) {
            this.$playerBanners.forEach(banner => banner.css('display', 'none'));

            let cookie = cnilCookie.readValues();

            if (!cookie) {
                cnilCookie.writeValues(ALL_ON);
                return;
            }

            cookie[category] = true;
            cnilCookie.writeValues(cookie);
        } else {
            this.hide();
            cnilCookie.writeValues(ALL_ON);
        }
    }

    export function isActive() {
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnilCookieFormPage.isFormPage();
    }

    export function injectBanner($mainWrapper: any): void {
        $mainWrapper.prepend(this.createBannerHtml());

        this.$banner = $mainWrapper.select('[data-role=cnil-banner]');

        this.$banner.select('button').on('click', e => this.setCookieOn());
    }

    export function createBannerHtml(): string {
        return `
            <div class="cnil-banner-v2" data-role="cnil-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-9 g-gutter">
                            <p class="cnil-banner-v2__text">En poursuivant votre navigation sur notre service, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des mesures d'audience, vous proposer des services, contenus et publicités adaptés à vos centres d’intérêt sur internet ou par communication directe de RTL, et pour vous proposer des boutons de partage et de remontées de contenus sur les réseaux sociaux. <a class="cnil-banner-v2__more" href="/cnil/preferences" data-cnil="1">En savoir plus / paramétrer</a>.</p>
                        </div>
                        <div class="col-12 col-lg-3 g-gutter">
                            <button type="button" class="cnil-banner-v2__btn btn btn-flat btn-flat--sm my-2" data-action="accept">J'accepte</button>
                            <a href="/cnil/preferences" class="cnil-banner-v2__link my-2" data-cnil="1"><span class="icon icon-arrow-right-circle"></span>Paramétrer les traceurs</a>
                        </div>
                    </div>
                </div>
                <button type="button" class="cnil-banner-v2__close" data-action="close" aria-label="Close">
                    <span aria-hidden="true" class="icon icon-close-circle"></span>
                </button>
            </div>
        `;
    }

    export function injectPlayerBanner($holder: any, callback?: OkCallback): void {
        $holder.prepend(this.createBannerPlayerHtml());

        let newPlayerBanner = $holder.select('[data-role=cnil-banner]');
        newPlayerBanner.select('button').on('click', e => {
            this.setCookieOn(PLAYER);
            callback();
        });

        this.$playerBanners.push(newPlayerBanner);
    }

    export function createBannerPlayerHtml(): string {
        return `
            <div class="cnil-banner-v2 cnil-banner-v2--player" data-role="cnil-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="cnil-banner-v2__text">En poursuivant votre navigation sur notre service, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des mesures d'audience, vous proposer des services, contenus et publicités adaptés à vos centres d’intérêt sur internet ou par communication directe de RTL, et pour vous proposer des boutons de partage et de remontées de contenus sur les réseaux sociaux. <a class="cnil-banner-v2__more" href="/cnil/preferences" data-cnil="1">En savoir plus / paramétrer</a>.</p>
                        </div>
                        <div class="col-12">
                            <button type="button" class="cnil-banner-v2__btn btn btn-flat btn-flat--sm my-2" data-action="accept">J'accepte</button>
                            <a href="/cnil/preferences" class="cnil-banner-v2__link my-2" data-cnil="1"><span class="icon icon-arrow-right-circle"></span>Paramétrer les traceurs</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    export function hide(): void {
        this.$banner.css('display', 'none');
    }
}