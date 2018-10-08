import { VendorList } from 'consent-string/src';
export {  };
declare global  {
    interface Window {
        __cmp: (command: string, parameter?: any, callback?: any) => void;
    }
}
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
export declare let m6Vendors: VendorList;
