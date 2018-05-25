import * as $ from '../../../assets/js/utils/dom';
import * as userAgent from '../../../assets/js/env/user-agent';
import {testEnv} from '../test-env';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieBanner} from "../../../assets/ts/cnil/cnil-cookie-banner";
import {cnilCookieFormPage} from "../../../assets/ts/cnil/cnil-cookie-form-page";

let isBotSpy = jest.spyOn(userAgent, "isBot");
let hasValidCookieSpy = jest.spyOn(cnilCookie, "hasValidCookie");
let writeValuesSpy = jest.spyOn(cnilCookie, "writeValues");
let isCnilSafeSpy = jest.spyOn(cnilCookieFormPage, "isCnilSafe");

describe('cnil-cookie-banner.ts', () => {

    beforeEach(() => {
        testEnv.setHTML('<div id="main-wrapper"></div>');
        jest.resetAllMocks();
    });

    describe('Display', () => {

        afterEach(() => {
            isBotSpy.mockReturnValue(false);
            isCnilSafeSpy.mockReturnValue(false);
            hasValidCookieSpy.mockReturnValue(false);
        });

        test('Should display banner on any page', () => {
            cnilCookieBanner.init();
            expect($('.cnil-banner-v2').css('display')).toBe('block');
        });

        test('Should not display banner when useragent is a bot', () => {
            isBotSpy.mockReturnValue(true);

            cnilCookieBanner.init();
            expect(isBotSpy).toHaveBeenCalledTimes(1);
            expect($('.cnil-banner-v2')[0]).toBeUndefined();
        });

        test('Should not display banner when current page is form page', () => {
            isCnilSafeSpy.mockReturnValue(true);

            cnilCookieBanner.init();
            expect(isCnilSafeSpy).toHaveBeenCalledTimes(1);
            expect($('.cnil-banner-v2')[0]).toBeUndefined();
        });

        test('Should not display banner when valid cookie exists', () => {
            hasValidCookieSpy.mockReturnValue(true);

            cnilCookieBanner.init();
            expect(hasValidCookieSpy).toHaveBeenCalledTimes(1);
            expect($('.cnil-banner-v2')[0]).toBeUndefined();
        });
    });

    describe('Behavior and cookie management', () => {

        test('Should set cookie when accept button clicked', () => {
            cnilCookieBanner.init();
            cnilCookieBanner.$banner.select('[data-action="accept"]')[0].click();

            expect(writeValuesSpy).toHaveBeenCalled();
        });

        test('Should set cookie when close icon clicked', () => {
            cnilCookieBanner.init();
            cnilCookieBanner.$banner.select('[data-action="close"]')[0].click();

            expect(writeValuesSpy).toHaveBeenCalled();
        });

        test('Should not set cookie when other links are clicked in banner', () => {
            cnilCookieBanner.init();
            cnilCookieBanner.$banner.select('[data-cnil="1"]')[0].click();
            cnilCookieBanner.$banner.select('[data-cnil="1"]')[1].click();

            expect(writeValuesSpy).not.toHaveBeenCalled();
        });
    });
});