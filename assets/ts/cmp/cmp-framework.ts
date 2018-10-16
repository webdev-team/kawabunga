import {m6Vendors} from './vendor-list';
import {euconsent} from './euconsent-cookie';
import {cnil} from '../cnil/cnil';
import {CnilCategoriesChangeEvent} from '../cnil/cnil-cookie';

export class PingReturn {
    gpdrAppliesGlobaly: boolean;
    cmpLoaded: boolean;
}

export class VendorConsentData {
    consentData: string;
    gpdrApplies: boolean;
    hasGlobalScope: boolean;
}

export class VendorConsents {
    metadata: string;
    gpdrApplies: boolean;
    hasGlobalScope: boolean;
    purposeConsents: any;
    vendorConsents: any;
}

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

    if (euconsent.cookie.exists()) {
        result.consentData = euconsent.cookie.read().getConsentString();
    } else {
        result.consentData = euconsent.newNoConsent().getConsentString();
    }

    callback(result, true);
}

export function getVendorConsents(vendorsId: number[], callback: (vendorConsents: VendorConsents, success: boolean) => void) {
    let consent = euconsent.cookie.read();

    if (consent == null) {
        consent = euconsent.newNoConsent();
    }

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

export function onCnilCategoriesChange(event: CnilCategoriesChangeEvent) {
    if (event.oldValue != null && event.oldValue.ads == event.value.ads) {
        return;
    }

    let consent = euconsent.cookie.read();

    if (consent == null) {
        consent = euconsent.newFullConsent();
    }

    if (event.value.ads) {
        consent.setPurposesAllowed(euconsent.allPurposeIds());
        consent.setVendorsAllowed(euconsent.allVendorIds());
    } else {
        consent.setPurposesAllowed([]);
        consent.setVendorsAllowed([]);
    }

    euconsent.cookie.write(consent);
}

export function __cmp(command, parameter = null, callback = null) {
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
