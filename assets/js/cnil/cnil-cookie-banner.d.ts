export declare type OkCallback = () => void;
export declare namespace cnilCookieBanner {
    let $banner: any;
    function init(): void;
    function isActive(): boolean;
    function injectBanner($mainWrapper: any): void;
    function createBannerHtml(): string;
    function injectPlayerBanner($holder: any, callback?: OkCallback): void;
    function createBannerPlayerHtml(): string;
    function hide(): void;
}
