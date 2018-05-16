import * as $ from '../../../assets/js/utils/dom';
import {testEnv} from '../test-env';
import {COOKIE_NAME} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieFormPage} from "../../../assets/ts/cnil/cnil-cookie-form-page";


describe('cnil-cookie-form-page.ts', () => {

    beforeEach(() => {
        cookies.remove(COOKIE_NAME);

        testEnv.setHTML(`
            <div id="main-wrapper">
                <form action="" name="form-cnil">
                    <input type="checkbox" name="cookiesForAds" checked>
                    <input type="checkbox" name="cookiesForAnalytics" checked>
                    <input type="checkbox" name="cookiesForSocial" checked>
                    <input type="checkbox" name="cookiesForPlayer" checked>
                    
                    <button type="submit" data-cnil="1">Mettre à jour</button>
                </form>
            </div>
        `);
    });

    describe('Initialization', () => {

        test('Should detect form page when form element is found', () => {
            cnilCookieFormPage.init();

            expect(cnilCookieFormPage.isFormPage()).toBe(true);
        });

        test('Should not detect form page when no form element found', () => {
            testEnv.setHTML(`<div id="main-wrapper"></div>`);
            cnilCookieFormPage.init();

            expect(cnilCookieFormPage.isFormPage()).toBe(false);
        });

        test('Should init form inputs function to existing cookie', () => {
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":false,"social":false,"player":false}');
            cnilCookieFormPage.init();

            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":false,"social":false,"player":false});
        });
    });

    describe('Behavior and cookie management', () => {

        test('Should create cookie with all consents at true when submit button clicked', () => {
            cnilCookieFormPage.init();

            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('button[type=submit]')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":true,"social":true,"player":true});
        });

        test('Should update existing cookie when submit button clicked', () => {
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":true,"social":true,"player":true}');
            cnilCookieFormPage.init();

            $('input[name="cookiesForAnalytics"]')[0].checked = false;
            $('input[name="cookiesForPlayer"]')[0].checked = false;

            expect(cnilCookieFormPage.getValue()).toMatchObject({"ads":true,"analytics":false,"social":true,"player":false});

            $('button[type=submit]')[0].click();

            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true,"player":false}')
        });
    });
});