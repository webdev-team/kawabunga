import {ConsentString} from 'consent-string';
import * as cookies from 'js-cookie';
import {m6Vendors} from './vendor-list';
import {COOKIE_DURATION} from '../cnil/cnil-cookie';
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

    export function newNoConsent() : ConsentString {
        let consent = new ConsentString();

        consent.setCmpId(euconsent.CMP_ID);
        consent.setCmpVersion(CMP_VERSION);
        consent.setConsentLanguage('fr');
        consent.setGlobalVendorList(m6Vendors);
        consent.setPurposesAllowed([]);
        consent.setVendorsAllowed([]);

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

            if (value) {
                let consent = new ConsentString(value);

                consent.setGlobalVendorList(m6Vendors);

                return consent;
            } else {
                return null;
            }
        }

        export function write(consent: ConsentString) : void {
            cookies.set(COOKIE_NAME, consent.getConsentString(), {expires: COOKIE_DURATION, path: '/', domain: env.getCookieDomain()});
        }
    }
}



