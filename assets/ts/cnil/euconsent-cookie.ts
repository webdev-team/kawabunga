/**
 * https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS has not been released with correct typings yet
 * See https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS/issues/21
 * Once release import may change
 */

import { ConsentString } from 'consent-string/src';
import * as cookies from 'js-cookie';
import {m6Vendors} from './iab';
import {COOKIE_DURATION} from './cnil-cookie';
import * as env from '../env/env';


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
        consent.setGlobalVendorList(m6Vendors);
        consent.setPurposesAllowed(allPurposeIds());
        consent.setVendorsAllowed(allVendorIds());

        return consent;
    }

    export function allPurposeIds() : number[] {
        return m6Vendors.purposes.map(purpose => purpose.id);
    }

    export function allVendorIds() :number[] {
        return m6Vendors.vendors.map(vendor => vendor.id)
    }

    export namespace cookie {
        export function exists() : boolean {
            return read() != null;
        }

        export function read() : ConsentString {
            let value = cookies.get(COOKIE_NAME);

            return value ? new ConsentString(value) : null;
        }

        export function write(consent: ConsentString) : void {
            cookies.set(COOKIE_NAME, consent.getConsentString(), {expires: COOKIE_DURATION, path: '/', domain: env.getCookieDomain()});
        }
    }
}



