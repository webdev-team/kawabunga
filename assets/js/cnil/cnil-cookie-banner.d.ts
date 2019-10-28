import { Purpose } from "../cmp/didomi";
export declare type OkCallback = () => void;
export interface BannerOptions {
    $container: any;
    html: string;
}
export declare namespace cnilCookieBanner {
    function init(options: BannerOptions, cb?: OkCallback): void;
    function injectBanner(options: BannerOptions, cb?: OkCallback): void;
    function hideMainBanner(): void;
    function showMainBanner(): void;
    function displayDidomiBanners(purpose: Purpose, display: boolean): void;
}
