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
    COOKIE = "cookies",
    AD_PERSONALIZATION = "advertising_personalization",
    CONTENT_PERSONALIZATION = "content_personalization",
    ANALYTICS = "analytics",
    AD_DELIVERY = "ad_delivery"
}
export declare let init: () => void;
export declare let isConsentedPurpose: (purpose: Purpose) => boolean;
export declare let attach: (eventType: any, action: any) => void;
export declare let isCookiesAllowed: () => boolean;
export declare let isAdPersonalizationAllowed: () => boolean;
export declare let isContentPersonalizationAllowed: () => boolean;
export declare let isAnalyticsAllowed: () => boolean;
export declare let isAdDeliveryAllowed: () => boolean;
