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
    SOCIAL = "social_network",
    PERSONNALISATION = "personnalisation"
}
export declare namespace CmpDidomi {
    let init: (options: DidomiOptions) => void;
    let trackConsent: () => void;
    let isConsentedPurpose: (purpose: Purpose) => boolean;
    /**
     * can return true or false or undefined (if CMP is still displayed)
     */
    let getUserConsentStatusForPurpose: (purpose: Purpose) => boolean;
    let attach: (eventType: any, action: any) => void;
    let enablePurpose: (purpose: Purpose) => void;
    /**
     * Calls fnDo then consent is available.
     * Otherwise wait for user to choose through displayed notice
     */
    let waitForDidomiConsent: (purpose: Purpose, fnDo: any) => void;
    let doOnDidomiConsent: (purpose: Purpose, fnDo: any, fnElseDo: any) => void;
    let displayDidomiBanners: (purpose: Purpose, display: boolean) => void;
    let toPurposeId: (purpose: Purpose) => String;
}
