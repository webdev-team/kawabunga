import * as $ from '../../../assets/js/utils/dom';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieAutoUpdater} from "../../../assets/ts/cnil/cnil-cookie-auto-updater";
import {COOKIE_NAME} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import {testEnv} from "../test-env";
import * as env from "../../../assets/ts/env/env";

let writeValuesSpy = jest.spyOn(cnilCookie, "writeValues");
let getSiteSpy = jest.spyOn(env, "getSite");

describe('cnil-cookie-auto-updater.ts', () => {

    describe('Consent by navigating through website', () => {
        beforeAll(() => {
            cnilCookieAutoUpdater.init();

            getSiteSpy.mockReturnValue('www.rtl2.fr');
        });

        beforeEach(() => {
            cookies.remove(COOKIE_NAME);

            testEnv.setHTML(`
                <div id="main-wrapper">
                    <a href="http://www.rtl2.fr" id="internal-link"></a>
                    <a href="http://www.rtl2.fr">
                        <span id="internal-link-span"></span>
                    </a>
                    <a href="http://www.rtl2.fr" data-cnil="1" id="non-consenting-link"></a>
                    
                    <a href="http://www.externalwebsite.fr" id="external-link"></a>
                </div>
            `);
        });

        afterEach(() => {
            cnilCookieAutoUpdater.consumed = false;

            writeValuesSpy.mockClear();
        })

        test('Should create cookie when an internal link clicked', () => {
            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#internal-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(writeValuesSpy).toHaveBeenCalledTimes(1);
        });

        test('Should create cookie when an element within internal link clicked', () => {
            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#internal-link-span')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(writeValuesSpy).toHaveBeenCalledTimes(1);
        });

        test('Should not create cookie when external link clicked', () => {
            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#external-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(false);
            expect(writeValuesSpy).not.toHaveBeenCalled();
        });

        test('Should not create cookie when specific cnil link clicked', () => {
            $('#non-consenting-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(false);
            expect(writeValuesSpy).not.toHaveBeenCalled();
        });

        it('should only write cookie once', () => {
            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#internal-link')[0].click();
            $('#internal-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(writeValuesSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('Consent on scrolling', () => {
        beforeEach(() => {
            testEnv.setHTML(`
            <div id="main-wrapper">
                <div style="
                    display: block;
                    height: 4000px;
                    width: 10px;
                "></div>
            </div>
        `);

            window.scroll = jest.fn((x, y) => {
                window.pageXOffset = x
                window.pageYOffset = y
                window.dispatchEvent(new window.UIEvent('scroll'))
            })
        });

        test('Should not set cookie when scroll is lower than 1.5 times page height', () => {
            window.innerHeight = 500;
            window.document.height = 1200;

            cnilCookieAutoUpdater.init();
            expect(writeValuesSpy).not.toHaveBeenCalled();
        });

        // test('Should set cookie when scroll is greater than 1.5 times page height', () => {
        //     window.innerHeight = 500;
        //     window.scrollTo(0, 2000);
        //
        //     console.log('pageYOffset', window.pageYOffset);
        //
        //     cnilCookieAutoUpdater.init();
        //     expect(writeValuesSpy).toHaveBeenCalled();
        // });
    });
});