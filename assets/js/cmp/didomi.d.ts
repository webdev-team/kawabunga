declare global {
    interface Window {
        gdprAppliesGlobally: any;
        didomiConfig: any;
        didomiEventListeners: Array<any>;
        Didomi: any;
    }
}
export declare enum Purpose {
    COOKIE = "cookies",
    AD_PERSONALIZATION = "advertising_personalization",
    CONTENT_PERSONALIZATION = "content_personalization",
    ANALYTICS = "analytics",
    AD_DELIVERY = "ad_delivery"
}
export declare let init: () => void;
export declare let isConsentedPurpose: (purpose: Purpose) => boolean;
export declare let onChange: (handler: (event: object) => void) => void;
