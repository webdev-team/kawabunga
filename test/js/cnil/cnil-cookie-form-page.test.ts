import * as $ from '../../../assets/js/utils/dom';
import {testEnv} from '../test-env';
import {COOKIE_NAME} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieFormPage} from "../../../assets/ts/cnil/cnil-cookie-form-page";
import {cnilCookieAutoUpdater} from "../../../assets/ts/cnil/cnil-cookie-auto-updater";


describe('cnil-cookie-form-page.ts', () => {

    beforeEach(() => {
        cookies.remove(COOKIE_NAME);

        testEnv.setHTML(`
            <div id="main-wrapper" data-cnil-safe="true">
                <form action="" name="form-cnil">
                    <input type="checkbox" name="cookiesForAds">
                    <input type="checkbox" name="cookiesForAnalytics">
                    <input type="checkbox" name="cookiesForSocial">
                </form>
            </div>
        `);
    });

    describe('Initialization', () => {

        test('Should detect form page when form element is found', () => {
            cnilCookieFormPage.init();

            expect(cnilCookieAutoUpdater.isCnilSafe()).toBe(true);
        });

        test('Should not detect form page when no form element found', () => {
            testEnv.setHTML(`<div id="main-wrapper"></div>`);
            cnilCookieFormPage.init();

            expect(cnilCookieAutoUpdater.isCnilSafe()).toBe(false);
        });

        test('Should init form inputs function to existing cookie', () => {
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":false,"social":false}');
            cnilCookieFormPage.init();

            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":false,"social":false});
        });
    });

    describe('Behavior and cookie management', () => {

        test('Should set all inputs to "checked" on init, but without any cookie created', () => {
            cnilCookieFormPage.init();

            expect( $('input[name="cookiesForAds"]')[0].checked ).toBe(true);
            expect( $('input[name="cookiesForAnalytics"]')[0].checked ).toBe(true);
            expect( $('input[name="cookiesForSocial"]')[0].checked ).toBe(true);

            expect(cnilCookie.hasValidCookie()).toBe(false);
        });

        test('Should create cookie with all consents at true when any input clicked, except the consent that is clicked', () => {
            cnilCookieFormPage.init();

            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('input[name="cookiesForAnalytics"]')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":false,"social":true});
        });

        test('Should update existing cookie when submit button clicked', () => {
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":true,"social":true}');
            cnilCookieFormPage.init();

            $('input[name="cookiesForAnalytics"]')[0].click();

            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":false,"social":true});
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true}')
        });
    });
});