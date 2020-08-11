import {euconsent} from '../../../assets/ts/cmp/euconsent-cookie';
import * as cookies from 'js-cookie';

describe('euconsent-cookie', () => {
    beforeEach(() => {
        cookies.remove(euconsent.COOKIE_NAME);
    });

    describe('read', () => {
        beforeEach(() => {
            cookies.remove(euconsent.COOKIE_NAME);
        });

        test('should read cookie and return ConsentString', () => {
            // sample value from http://www.meteocity.com
            cookies.set(euconsent.COOKIE_NAME, 'BOUzuZ7OUzwFfCIABBFRAB-AAAAVkQNyfYiERoTqwtwBQCADED-CCCpAwAAAABQCEAYQAMBhKAEAAAAAQMABQBQ');

            let consent = euconsent.cookie.read();

            expect(consent.getVersion()).toBe(1);
            expect(consent.getCmpId()).toBe(136);
            expect(consent.getPurposesAllowed()).toEqual([1, 2, 3, 4, 5]);
        });

        test('should read cookie and return null if cookie was empty', () => {
            let consent = euconsent.cookie.read();

            expect(consent).toBeNull();
        });

        /**
         * writing and then reading empties vendor list and raises :
         * Error: ConsentString - A vendor list is required to encode a consent string
         */
        test('should be able to write and then read and call getConsentString', () => {
            let consent = euconsent.newFullConsent();

            euconsent.cookie.write(consent);

            consent = euconsent.cookie.read();

            expect(consent.getConsentString()).toBeTruthy();
        })
    });

    describe('write', () => {
        test('should write cookie value from ConsentString', () => {
            let consent = euconsent.newFullConsent();

            euconsent.cookie.write(consent);

            expect(cookies.get(euconsent.COOKIE_NAME)).not.toBeNull();
        });
    });


});