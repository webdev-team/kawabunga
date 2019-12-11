export interface PopupData {
    email?: string;
}
export declare let renderLoginPopup: () => string;
export declare let renderVerifyEmailPopup: (data: PopupData) => string;
export declare let renderFeedbackPopup: (data: PopupData) => string;
export declare let renderer: {
    draw: (name: any, args: any) => any;
};
