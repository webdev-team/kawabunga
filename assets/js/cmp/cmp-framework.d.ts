import { CnilCategories } from '../cnil/cnil-cookie';
export declare class PingReturn {
    gpdrAppliesGlobaly: boolean;
    cmpLoaded: boolean;
}
export declare class VendorConsentData {
    consentData: string;
    gpdrApplies: boolean;
    hasGlobalScope: boolean;
}
export declare class VendorConsents {
    metadata: string;
    gpdrApplies: boolean;
    hasGlobalScope: boolean;
    purposeConsents: any;
    vendorConsents: any;
}
export declare function ping(callback: (pingReturn: PingReturn, success: boolean) => void): void;
export declare function getConsentData(consentStringVersion: string, callback: (vendorConsentData: VendorConsentData, success: boolean) => void): void;
export declare function getVendorConsents(vendorsId: number[], callback: (vendorConsents: VendorConsents, success: boolean) => void): void;
export declare function onCnilCategoriesChange(categories: CnilCategories): void;
export declare function __cmp(command: any, parameter?: any, callback?: any): void;