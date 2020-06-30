declare global {
    interface Window {
        eStatTag(config: any): void;
    }
}
export declare let ensureLoaded: () => any;
/**
 * estat should be loaded before calling this function
 */
export declare let createEstatTag: (config: any) => any;
