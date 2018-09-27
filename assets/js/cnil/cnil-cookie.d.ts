export interface CnilCategories {
    ads: boolean;
    analytics: boolean;
    social: boolean;
    player: boolean;
}
export declare const ADS = "ads";
export declare const ANALYTICS = "analytics";
export declare const SOCIAL = "social";
export declare const PLAYER = "player";
export declare const COOKIE_NAME = "cnil-cookie-v2";
export declare const COOKIE_ID_NAME = "cnil-cookie-id";
export declare const COOKIE_DURATION: number;
export declare const COOKIE_ID_DURATION: number;
export declare const ALL_ON: CnilCategories;
export declare const ALL_OFF: CnilCategories;
export declare const BANNER_ACTION = "banner";
export declare const CLICK_ACTION = "click";
export declare const SCROLL_ACTION = "scroll";
export declare const PREFERENCES_ACTION = "preferences";
export declare namespace cnilCookie {
    function ensureId(): void;
    function getId(): string;
    function writeValues(categories: CnilCategories, actionType?: string): void;
    function setCategory(category: string, value: boolean, actionType?: string): void;
    function readValues(): CnilCategories;
    function hasValidCookie(): boolean;
    function isOn(category: string): boolean;
    function isActive(): boolean;
    function onChange(handler: (categories: CnilCategories) => void): void;
}
