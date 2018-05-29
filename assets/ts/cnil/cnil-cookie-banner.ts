import * as userAgent from '../../js/env/user-agent';
import {ALL_ON, PLAYER} from './cnil-cookie';
import * as $ from '../../js/utils/dom';
import {cnilCookie} from './cnil-cookie';
import {cnilCookieFormPage} from './cnil-cookie-form-page';

export type OkCallback = () => void;

export namespace cnilCookieBanner {
    export let $banner: any;

    export function init() {
        if (isActive()) {
            injectBanner($('#main-wrapper'));
        }
    }

    export function isActive() {
        return !userAgent.isBot() && !cnilCookie.hasValidCookie() && !cnilCookieFormPage.isCnilSafe();
    }

    export function injectBanner($mainWrapper: any): void {
        $mainWrapper.prepend(createBannerHtml());

        $banner = $mainWrapper.select('[data-role=cnil-banner]');

        $banner.select('button').on('click', e => {
            cnilCookie.writeValues(ALL_ON);

            hide();
        });
    }

    export function createBannerHtml(): string {
        return `
            <div class="cnil-banner-v2" data-role="cnil-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-9 g-gutter">
                            <p class="cnil-banner-v2__text">En poursuivant votre navigation sur notre service ou en ouvrant nos communications directes, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des statistiques de visites, pour vous proposer des services et des publicités adaptés à vos centres d’intérêt (sur internet et via nos communications directes), pour vous proposer des fonctionnalités relatives aux réseaux sociaux ainsi que de la lecture directe de vidéos. <a class="cnil-banner-v2__more" href="/cnil/preferences" data-cnil="1">En savoir plus et modifier les paramètres</a>.</p>
                        </div>
                        <div class="col-12 col-lg-3 g-gutter">
                            <button type="button" class="cnil-banner-v2__btn btn btn-flat btn-flat--sm" data-action="accept">J'accepte</button>
                            <a href="/cnil/preferences" class="cnil-banner-v2__link" data-cnil="1"><span class="icon icon-arrow-right-circle"></span>Paramétrer les traceurs</a>
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
        $holder.prepend(createBannerPlayerHtml());

        let $playerBanner = $holder.select('[data-role=cnil-banner]');

        $playerBanner.select('button').on('click', e => {
            cnilCookie.setCategory(PLAYER, true);

            $playerBanner.css('display', 'none');

            callback();
        });
    }

    export function createBannerPlayerHtml(): string {
        return `
            <div class="cnil-banner-v2 cnil-banner-v2--player" data-role="cnil-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="cnil-banner-v2__text">En poursuivant votre navigation sur notre service ou en ouvrant nos communications directes, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des statistiques de visites, pour vous proposer des services et des publicités adaptés à vos centres d’intérêt (sur internet et via nos communications directes), pour vous proposer des fonctionnalités relatives aux réseaux sociaux ainsi que de la lecture directe de vidéos. <a class="cnil-banner-v2__more" href="/cnil/preferences" data-cnil="1">En savoir plus et modifier les paramètres</a>.</p>
                        </div>
                        <div class="col-12">
                            <button type="button" class="cnil-banner-v2__btn btn btn-flat btn-flat--sm" data-action="accept">J'accepte</button>
                            <a href="/cnil/preferences" class="cnil-banner-v2__link" data-cnil="1"><span class="icon icon-arrow-right-circle"></span>Paramétrer les traceurs</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    export function hide(): void {
        $banner.css('display', 'none');
    }
}