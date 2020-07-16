export interface DidomiOptions {
    name?: string;
    apiKey?: string;
    logoUrl?: string;
    themeColor?: string;
    privacyPolicyURL?: string;
}
export declare let didomiConfig: (options?: DidomiOptions) => {
    app: {
        name: string;
        apiKey: string;
        logoUrl: string;
        privacyPolicyURL: string;
        gdprAppliesGlobally: boolean;
        gdprAppliesWhenUnknown: boolean;
        vendors: {
            didomi: string[];
            iab: {
                all: boolean;
                exclude: number[];
            };
            custom: {
                id: string;
                name: string;
                purposeIds: string[];
                policyUrl: string;
            }[];
        };
        customPurposes: {
            id: string;
            name: {
                fr: string;
            };
            description: {
                fr: string;
            };
        }[];
    };
    notice: {
        enable: boolean;
        position: string;
        logoAlignment: string;
        closeOnClick: boolean;
        closeOnClickNavigationDelay: number;
        closeOnClickBackdrop: boolean;
        daysBeforeShowingAgain: number;
    };
    preferences: {
        canCloseWhenConsentIsMissing: boolean;
        showWhenConsentIsMissing: boolean;
        enableAllButtons: boolean;
        information: {
            enable: boolean;
            content: {
                popup: {
                    fr: string;
                };
                title: {
                    fr: string;
                };
                text: {
                    fr: string;
                };
                learnMore: {
                    fr: string;
                };
                agreeAndClose: {
                    fr: string;
                };
            };
        };
        content: {
            title: {
                fr: string;
            };
            agreeToAll: {
                fr: string;
            };
            disagreeToAll: {
                fr: string;
            };
        };
        categories: {
            type: string;
            purposeId: string;
        }[];
    };
    languages: {
        enabled: string[];
        default: string;
    };
    theme: {
        color: string;
        linkColor: string;
        font: string;
        buttons: {
            regularButtons: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
                borderWidth: string;
                borderRadius: string;
            };
            highlightButtons: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
                borderWidth: string;
                borderRadius: string;
            };
        };
    };
    tagManager: {
        provider: string;
    };
    user: {
        bots: {
            consentRequired: boolean;
            types: string[];
            extraUserAgents: any[];
        };
        externalConsent: {
            enabled: boolean;
        };
    };
};
