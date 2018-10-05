import {m6Vendors, PingReturn, VendorConsentData, VendorConsents} from './iab';
import {euconsent} from './euconsent-cookie';
import {cnil} from './cnil';
import * as env from '../env/env';
import {CnilCategories} from './cnil-cookie';

export function ping(callback: (pingReturn: PingReturn, success: boolean) => void)  {
    let result = new PingReturn();

    result.gpdrAppliesGlobaly = true;
    result.cmpLoaded = true;

    callback(result, true);
}

export function getConsentData(consentStringVersion: string, callback: (vendorConsentData: VendorConsentData, success: boolean) => void)  {
    let result = new VendorConsentData();

    result.gpdrApplies = true;
    result.hasGlobalScope = true;
    result.consentData = euconsent.cookie.read().getConsentString();


    callback(result, true);
}

export function getVendorConsents(vendorsId: number[], callback: (vendorConsents: VendorConsents, success: boolean) => void) {
    let consent = euconsent.cookie.read();

    let result = new VendorConsents();

    let purposeConsents = {};

    for (const purpose of m6Vendors.purposes) {
        purposeConsents[purpose.id] = true
    }

    let vendorConsents = {};

    for (const vendor of consent.getVendorsAllowed()) {
        if (vendorsId) {
            if (vendorsId.indexOf(vendor) != -1) {
                vendorConsents[vendor] = true
            }
        } else {
            vendorConsents[vendor] = true
        }
    }

    // clean consent to build metadata
    consent.setPurposesAllowed([]);
    consent.setVendorsAllowed([]);

    let metadata = consent.getConsentString();

    result.gpdrApplies = true;
    result.hasGlobalScope = true;
    result.purposeConsents = purposeConsents;
    result.vendorConsents = vendorConsents;
    result.metadata = metadata

    callback(result, true);
}

export function onCnilCategoriesChange(categories: CnilCategories) {
    let consent = euconsent.cookie.read();

    if (consent == null) {
        consent = euconsent.newFullConsent();
    }

    if (categories.ads) {
        consent.setPurposesAllowed(euconsent.allPurposeIds());
    } else {
        consent.setPurposesAllowed([]);
    }

    euconsent.cookie.write(consent);
}

if (env.isFlag("cmp")) {
    window.__cmp = function (command, parameter = null, callback = null) {
        switch (command) {
            case 'ping':
                ping(callback);
                break;
            case 'getVendorConsents':
                getVendorConsents(parameter, callback);
                break;
            case 'getConsentData':
                getConsentData(parameter, callback);
                break;
            case 'showConsentTool':
                cnil.banner.showMainBanner();
                break;
            default:
                console.error('unsupported __cmp command');
        }
    }

    // init euconsent cookie with cnil cookie if euconsent wasn't there
    if (cnil.cookie.hasValidCookie() && !euconsent.cookie.exists()) {
        onCnilCategoriesChange(cnil.cookie.readValues());
    }

    cnil.cookie.onChange(onCnilCategoriesChange);
}
