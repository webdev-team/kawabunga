/**
 * https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS has not been released with correct typings yet
 * See https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS/issues/21
 * Once release import may change
 */

import { ConsentString } from 'consent-string/src';
import * as cookies from 'js-cookie';
import {vendors} from './iab';


export namespace euconsent {
    export const COOKIE_NAME = 'euconsent';
    export const CMP_VERSION = 1;
    /**
     * TODO : use correct id
     */
    export const CMP_ID = 12345678;

    export function newFullConsent() : ConsentString {
        let consent = new ConsentString();

        consent.setCmpId(euconsent.CMP_ID);
        consent.setCmpVersion(CMP_VERSION);
        consent.setConsentLanguage('fr');
        consent.setGlobalVendorList(vendors);
        consent.setPurposesAllowed([1, 2, 3, 4, 5]);
        consent.setVendorsAllowed(vendors.vendors.map(vendor => vendor.id));

        return consent;
    }

    export namespace cookie {
        export function read() : ConsentString {
            let value = cookies.get(COOKIE_NAME);

            return value ? new ConsentString(value) : null;
        }

        export function write(consent: ConsentString) : void {
            cookies.set(COOKIE_NAME, consent.getConsentString());
        }
    }
}



