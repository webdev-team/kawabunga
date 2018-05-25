import * as $ from '../../../assets/js/utils/dom';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieAutoUpdater} from "../../../assets/ts/cnil/cnil-cookie-auto-updater";
import {COOKIE_NAME} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import {testEnv} from "../test-env";

let writeValuesSpy = jest.spyOn(cnilCookie, "writeValues");

describe('cnil-cookie-auto-updater.ts', () => {

    describe('Consent by navigating through website', () => {
        beforeAll(() => {
            cnilCookieAutoUpdater.init();
        });

        beforeEach(() => {

            cookies.remove(COOKIE_NAME);
            writeValuesSpy.mockClear();

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

        test('Should create cookie when an internal link clicked', () => {
            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#internal-link')[0].click();

            expect(cnilCookie.hasValidCookie()). toBe(true);
            expect(writeValuesSpy).toHaveBeenCalledTimes(1);
        });

    //     test('Should create cookie when an element within internal link clicked', () => {
    //         console.log('2', cnilCookie.hasValidCookie(), cnilCookie.readValues(), document.cookie);
    //         expect(cnilCookie.hasValidCookie()).toBe(false);
    //
    //         $('#internal-link-span')[0].click();
    //
    //         expect(cnilCookie.hasValidCookie()). toBe(true);
    //         expect(writeValuesSpy).toHaveBeenCalledTimes(1);
    //     });
    //
    //     test('Should not create cookie when external link clicked', () => {
    //         expect(cnilCookie.hasValidCookie()).toBe(false);
    //
    //         $('#external-link')[0].click();
    //
    //         expect(cnilCookie.hasValidCookie()).toBe(false);
    //         expect(writeValuesSpy).not.toHaveBeenCalled();;
    //     });
    //
    //     test('Should not create cookie when specific cnil link clicked', () => {
    //         $('#non-consenting-link')[0].click();
    //
    //         expect(cnilCookie.hasValidCookie()).toBe(false);
    //         expect(writeValuesSpy).not.toHaveBeenCalled();
    //     });
    });

    // describe('Consent on scrolling', () => {
    //     beforeEach(() => {
    //         testEnv.setHTML(`
    //         <div id="main-wrapper">
    //             <div style="
    //                 display: block;
    //                 height: 4000px;
    //                 width: 10px;
    //             "></div>
    //         </div>
    //     `);
    //
    //         global.scroll = jest.fn((x, y) => {
    //             global.pageXOffset = x
    //             global.pageYOffset = y
    //             global.dispatchEvent(new global.UIEvent('scroll'))
    //         })
    //     });
    //
    //     test('Should not set cookie when scroll is lower than 1.5 times page height', () => {
    //         global.innerHeight = 500;
    //         global.document.height = 1200;
    //
    //         cnilCookieAutoUpdater.init();
    //         expect(writeValuesSpy).not.toHaveBeenCalled();
    //     });
    //
    //     test('Should set cookie when scroll is greater than 1.5 times page height', () => {
    //         global.innerHeight = 500;
    //         global.scrollTo(0, 2000);
    //
    //         console.log('pageYOffset' global.pageYOffset);
    //
    //         cnilCookieAutoUpdater.init();
    //         expect(writeValuesSpy).toHaveBeenCalled();
    //     });
    // });
});