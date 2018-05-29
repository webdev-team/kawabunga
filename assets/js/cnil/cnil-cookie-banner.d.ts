export declare type OkCallback = () => void;
export interface BannerOptions {
    $container: any;
    html: string;
}
export declare namespace cnilCookieBanner {
    function injectBanner2(options: BannerOptions, cb?: OkCallback): void;
    function hide(): void;
}
