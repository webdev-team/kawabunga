export interface DidomiOptions {
    apiKey: string;
    logoUrl: string;
}
export declare let didomiConfig: (options: DidomiOptions) => {
    app: {
        apiKey: string;
        logoUrl: string;
        vendors: {
            didomi: string[];
            iab: {
                include: number[];
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
    preferences: {
        enableAllButtons: boolean;
        canCloseWhenConsentIsMissing: boolean;
        showWhenConsentIsMissing: boolean;
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
    notice: {
        enable: boolean;
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
    };
};
