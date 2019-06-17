import * as $ from '../../../assets/js/utils/dom';
import * as userAgent from '../../../assets/js/env/user-agent';
import {testEnv} from '../test-env';
import * as cookies from 'js-cookie';
import {cnil} from "../../../assets/ts/cnil/cnil";
import {ALL_ON, ALL_OFF, cnilCookie, COOKIE_NAME} from "../../../assets/ts/cnil/cnil-cookie";
import {BannerOptions, cnilCookieBanner} from "../../../assets/ts/cnil/cnil-cookie-banner";
import {cnilCookieAutoUpdater} from "../../../assets/ts/cnil/cnil-cookie-auto-updater";

let isBotSpy = jest.spyOn(userAgent, "isBot");
let v2ActiveSpy = jest.spyOn(cnil, "v2Active");
let hasValidCookieSpy = jest.spyOn(cnilCookie, "hasValidCookie");
let isCnilSafeSpy = jest.spyOn(cnilCookieAutoUpdater, "isCnilSafe");

describe('cnil-cookie-banner.ts', () => {
    let bannerOptions: BannerOptions;

    beforeEach(() => {
        testEnv.setHTML('<div id="main-wrapper"></div>');
        jest.resetAllMocks();
        v2ActiveSpy.mockReturnValue(true);
        cookies.remove(COOKIE_NAME);

        bannerOptions = {
            $container: $('#main-wrapper'),
            html: `
                <div id="cnil-banner" data-role="cnil-banner">
                    <p>Lorem <a href="/cnil/preferences" data-cnil="1">En savoir plus</a>.</p>
                    <button id="accept-btn" data-action="accept"></button>
                    <button id="accept-ads-btn" data-action="accept" data-category="ads"></button>
                    <button id="accept-analytics-btn" data-action="accept" data-category="analytics"></button>
                    <a href="/cnil/preferences" data-cnil="1">Paramétrer les traceurs</a>
                            
                    <button id="close-btn" data-action="close"></button>
                </div>`
        };
    });

    describe( 'Class', () => {

        test('hideMainBanner()', () => {
            cnilCookieBanner.init(bannerOptions);
            cnilCookieBanner.hideMainBanner();
            expect($('#cnil-banner').css('display')).toBe('none');
        });
    });

    describe('Display', () => {

        afterEach(() => {
            isBotSpy.mockReturnValue(false);
            isCnilSafeSpy.mockReturnValue(false);
            hasValidCookieSpy.mockReturnValue(false);
        });

        test('Should display banner on any page', () => {
            cnilCookieBanner.init(bannerOptions);
            expect($('#cnil-banner').css('display')).toBe('block');
        });

        test('Should not display banner when useragent is a bot', () => {
            isBotSpy.mockReturnValue(true);

            cnilCookieBanner.init(bannerOptions);
            expect(isBotSpy).toHaveBeenCalledTimes(1);
            expect($('#cnil-banner')[0]).toBeUndefined();
        });

        test('Should not display banner when current page is form page', () => {
            isCnilSafeSpy.mockReturnValue(true);

            cnilCookieBanner.init(bannerOptions);
            expect(isCnilSafeSpy).toHaveBeenCalledTimes(1);
            expect($('#cnil-banner')[0]).toBeUndefined();
        });

        test('Should not display banner when valid cookie exists', () => {
            hasValidCookieSpy.mockReturnValue(true);

            cnilCookieBanner.init(bannerOptions);
            expect(hasValidCookieSpy).toHaveBeenCalledTimes(1);
            expect($('#cnil-banner')[0]).toBeUndefined();
        });
    });

    describe('Behavior and cookie management', () => {

        test('Should set cookie when accept button clicked', () => {
            cnilCookieBanner.init(bannerOptions);
            $('#cnil-banner').select('#accept-btn')[0].click();

            expect(cnilCookie.readValues()).toEqual(ALL_ON);
        });

        test('Should not set cookie when close icon clicked', () => {

            cnilCookieBanner.init(bannerOptions);
            $('#cnil-banner').select('#close-btn')[0].click();

            expect(cnilCookie.readValues()).toBeNull();
        });

        test('Should set corresponding category to true when category accept btn clicked', () => {

            cnilCookieBanner.init(bannerOptions);
            cnilCookie.writeValues(ALL_OFF);
            expect(cnilCookie.readValues()).toEqual(ALL_OFF);

            $('#cnil-banner').select('#accept-ads-btn')[0].click();
            expect(cnilCookie.readValues()).toEqual({ads: true, analytics: false, social: false});

            $('#cnil-banner').select('#accept-analytics-btn')[0].click();
            expect(cnilCookie.readValues()).toEqual({ads: true, analytics: true, social: false});
        });

        test('Should not set cookie when other links are clicked in banner', () => {
            cnilCookieBanner.init(bannerOptions);
            $('#cnil-banner').select('[data-cnil="1"]')[0].click();
            $('#cnil-banner').select('[data-cnil="1"]')[1].click();

            expect(cnilCookie.readValues()).toBeNull();
        });
    });
});