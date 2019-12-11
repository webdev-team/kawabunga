export declare enum Response {
    ASK_EMAIL = "ASK_FOR_EMAIL_VERIFICATION",
    REQUEST_APPROVAL = "REQUEST_APPROVAL",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    ERROR = "ERROR_INVALID_REQUEST",
}
export declare class PassMedia {
    private capping;
    emailVerified: boolean;
    private _token;
    constructor();
    token: string;
    readonly state: {
        emailVerified: boolean;
    };
    loadGigya(): any;
    getTokenJWT_onLogin(): Promise<boolean>;
    getTokenJWT(): Promise<boolean>;
    requestAutologin(result: any): Promise<any>;
    requestLogin(): Promise<any>;
    sendValidationEmail(email: string): void;
    isAuthorizedToLoad(): boolean;
    rejectAutologin(): void;
    enableAutologin(enable: boolean): void;
    countHit(): void;
}
