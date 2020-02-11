import { DidomiOptions } from "./didomi-config";
declare global {
    interface Window {
        gdprAppliesGlobally: any;
        didomiConfig: any;
        didomiOnReady: any;
        didomiEventListeners: Array<any>;
        Didomi: any;
    }
}
export declare enum Purpose {
    ANALYTICS = "audience_measurement",
    ADS = "targeted_advertising",
    SOCIAL = "social_network"
}
export declare namespace CmpDidomi {
    let init: (options: DidomiOptions) => void;
    let logConsent: () => void;
    let trackConsent: () => void;
    let isConsentedPurpose: (purpose: Purpose) => boolean;
    let attach: (eventType: any, action: any) => void;
    let enablePurpose: (purpose: Purpose) => void;
    let doOnDidomiConsent: (purpose: Purpose, fnDo: any, fnElseDo: any) => void;
    let displayDidomiBanners: (purpose: Purpose, display: boolean) => void;
    let getDidomiUserConsentStatusForVendor: (id: string) => boolean;
    let getDidomiConsentData: () => string;
}
