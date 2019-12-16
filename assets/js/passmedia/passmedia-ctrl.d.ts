declare global {
    interface Window {
        location: Location;
        gigya: any;
        disablePassmedia: boolean;
    }
}
export declare namespace PassMediaCtrl {
    let init: (options?: {
        onLogin: boolean;
    }) => Promise<boolean>;
    let displayLoginPopup: (resolve: any) => void;
    let handleLogin: (res: any, resolve: any) => void;
    let displayVerifyEmailPopup: (email: any) => void;
    let displayFeedbackPopup: (email: string) => void;
}
