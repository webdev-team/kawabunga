import { CnilCategoriesChangeEvent } from '../cnil/cnil-cookie';
export declare class PingReturn {
    gdprAppliesGlobaly: boolean;
    cmpLoaded: boolean;
}
export declare class VendorConsentData {
    consentData: string;
    gdprApplies: boolean;
    hasGlobalScope: boolean;
}
export declare class VendorConsents {
    metadata: string;
    gdprApplies: boolean;
    hasGlobalScope: boolean;
    purposeConsents: any;
    vendorConsents: any;
}
export declare function ping(callback: (pingReturn: PingReturn, success: boolean) => void): void;
export declare function getConsentData(consentStringVersion: string, callback: (vendorConsentData: VendorConsentData, success: boolean) => void): void;
export declare function getVendorConsents(vendorsId: number[], callback: (vendorConsents: VendorConsents, success: boolean) => void): void;
export declare function onCnilCategoriesChange(event: CnilCategoriesChangeEvent): void;
export declare function __cmp(command: any, parameter?: any, callback?: any): void;
