export declare const NETWORK_CODE = 42159803;
export declare const ADUNIT_CODE = "RTL/OTHERS";
export declare const PREBID_SCRIPT = "http://static-preprod.m6tech.net/radins/prebid-radins.js";
export declare const PREBID_LOADER_SCRIPT = "http://static-preprod.m6tech.net/radins/prebid-loader.js";
export interface NameValue {
    name: string;
    value: string;
}
declare global  {
    interface Window {
        _networkCode: number;
        _adunitCode: string;
        pageCriterias: Array<NameValue>;
        _activeAdslots: Array<string>;
        displayAd(slot: string): void;
        pageDataLayer: any;
        Krux: any;
    }
}
export declare let init: () => Promise<void>;
export {};
