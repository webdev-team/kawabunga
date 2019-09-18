import * as Promise from 'promise';
declare global  {
    interface Window {
        eStatTag(config: any): void;
    }
}
export declare let ensureLoaded: () => Promise<{}>;
/**
 * estat should be loaded before calling this function
 */
export declare let createEstatTag: (config: any) => any;
