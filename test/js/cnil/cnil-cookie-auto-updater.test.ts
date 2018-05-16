import * as $ from '../../../assets/js/utils/dom';
import {cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {cnilCookieAutoUpdater} from "../../../assets/ts/cnil/cnil-cookie-auto-updater";
import {COOKIE_NAME} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import {testEnv} from "../test-env";

let writeValuesSpy = jest.spyOn(cnilCookie, "writeValues");

describe('cnil-cookie-auto-updater.ts', () => {

    describe('Consent by navigating through website', () => {
        beforeEach(() => {
            cookies.remove(COOKIE_NAME);
            writeValuesSpy.mockClear();

            testEnv.setHTML(`
                <div id="main-wrapper">
                    <a href="#" id="consenting-link"></a>
                    <a href="#" data-cnil="1" id="non-consenting-link"></a>
                </div>
            `);
        });

        test('Should create cookie when any link clicked', () => {
            cnilCookieAutoUpdater.init();

            expect(cnilCookie.hasValidCookie()).toBe(false);

            $('#consenting-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(true);
            expect(writeValuesSpy).toHaveBeenCalledTimes(1);
        });

        test('Should not create cookie when specific cnil link clicked', () => {
            cnilCookieAutoUpdater.init();

            $('#non-consenting-link')[0].click();

            expect(cnilCookie.hasValidCookie()).toBe(false);
            expect(writeValuesSpy).not.toHaveBeenCalled();
        });
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