import * as env from "../env/env";

export interface DidomiOptions {
    apiKey: string;
    logoUrl: string;
    themeColor?: string;
}

let getThemeColor = function(): string {
    let themeColor: string;

    switch(env.getSite()) {
        case 'www.rtl.fr':
            themeColor = '#E1001B';
            break;
        case 'www.funradio.fr':
            themeColor = '#00AFEC';
            break;
        default:
            themeColor = '#E1001B';
    }

    return themeColor;
};

export let didomiConfig = function(options: DidomiOptions) {
    options.themeColor = getThemeColor();

    return {
        app: {
            name: 'RTL',
            apiKey: options.apiKey,
            logoUrl: options.logoUrl,
            privacyPolicyURL: 'https://www.rtl.fr/cnil/charte-de-confidentialite',
            gdprAppliesGlobally: true,
            gdprAppliesWhenUnknown: true,
            vendors: {
                didomi: ['google', 'amazon', 'facebook', 'twitter'],
                iab: {
                    include :[28,27,25,24,11,15,7,2,13,32,10,57,49,45,52,71,79,91,69,98,62,36,80,81,23,61,76,66,41,3,82,60,50,21,77,93,132,22,102,18,68,97,74,138,127,154,153,157,131,130,129,128,164,144,114,14,210,226,225,31,115,126,245,244,234,254,215,274,239,201,150,285,259,272,253,317,278,295,165,316,199,119,264,309,284,64,275,262,331,345,333,202,343,231,152,184,373,388,413,436,443,452,381,340,431,430,468,458,484,507,487,506,501,569]
                },
                custom: [
                    {
                        id: 'custom-vendor-osd',
                        name: 'OSD',
                        purposeIds: ['cookies', 'advertising_personalization', 'content_personalization', 'ad_delivery', 'analytics'],
                        policyUrl: ''
                    },
                    {
                        id: 'custom-vendor-krux',
                        name: 'Krux',
                        purposeIds: ['cookies', 'advertising_personalization', 'content_personalization', 'ad_delivery', 'analytics'],
                        policyUrl: 'https://www.salesforce.com/products/marketing-cloud/sfmc/salesforce-dmp-privacy/'
                    }
                ]
            },
            customPurposes: [
                {
                    id: 'audience_measurement',
                    name: {
                        fr: "Mesure d'audience"
                    },
                    description: {
                        fr: "Ces cookies permettent d’établir des statistiques de fréquentation de nos services. Les désactiver nous empêche de suivre et d’améliorer la qualité de nos services."
                    }
                },
                {
                    id: 'targeted_advertising',
                    name: {
                        fr: 'Publicité ciblée'
                    },
                    description: {
                        fr: "Ces cookies permettent d’analyser votre navigation et de définir vos centres d’intérêts pour vous proposer des publicités plus pertinentes. Les désactiver n’a aucun impact sur le volume de publicité que vous recevrez."
                    }
                },
                {
                    id: 'social_network',
                    name: {
                        fr: 'Réseaux sociaux'
                    },
                    description: {
                        fr: "Ces cookies vous permettent de partager des contenus avec d'autres personnes ou de faire connaître votre consultation ou votre opinion (boutons J'aime). Les désactiver peut vous empêcher de vous connecter à votre réseau social."
                    }
                }
            ]
        },
        notice: {
            enable: false,
            position: 'top',
            logoAlignment: 'center',
            closeOnClick: true,
            closeOnClickNavigationDelay: 500,
            closeOnClickBackdrop: true
        },
        preferences: {
            canCloseWhenConsentIsMissing: false,
            showWhenConsentIsMissing: true,
            enableAllButtons: true,
            information: {
                enable: true, // Enable block popin (don't miss disabable notice)
                content: {
                    // popup:{fr:'Votre vie privée nous importe'},
                    title:{fr:'Votre vie privée nous importe'},
                    text: {fr: 'En poursuivant votre navigation sur notre service ou en ouvrant nos communications directes, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des statistiques de visites, pour vous proposer des services et des publicités adaptés à vos centres d’intérêt (sur internet et via nos communications directes), pour vous proposer des fonctionnalités relatives aux réseaux sociaux ainsi que de la lecture directe de vidéos. <br/><a href="#" onclick="Didomi.preferences.show(\'vendors\');" class="didomi-content-p-link">Voir la liste des partenaires</a>'},
                    learnMore: {fr: 'Paramétrer les cookies'},
                    agreeAndClose: {fr: 'J\'accepte'}
                }

            },
            content: {
                title:{fr:'Votre vie privée nous importe'},
                agreeToAll : {fr: 'Accepter tout'},
                disagreeToAll : {fr: 'Refuser tout'},
            },
            categories: [
                {
                    type: 'purpose',
                    purposeId: 'audience_measurement'
                },
                {
                    type: 'purpose',
                    purposeId: 'targeted_advertising'
                },
                {
                    type: 'purpose',
                    purposeId: 'social_network'
                }
            ]
        },
        languages: {
            enabled: ['fr'],
            default: 'fr'
        },
        theme: {
            color: '#D1D1D1', // Principal color used by the SDK
            linkColor: options.themeColor,
            font: 'Arial', // Font used by the SDK
            buttons: {
                regularButtons: { // Learn more/disagree/disagree to all buttons.
                    backgroundColor: '#eeeeee',
                        textColor: '#212121',
                        borderColor: 'rgba(34, 34, 34, 0.2)',
                        borderWidth: '1px',
                        borderRadius: '0px'
                },
                highlightButtons: { // Agree/save/agree to all buttons.
                    backgroundColor: options.themeColor,
                        textColor: '#ffffff',
                        borderColor: options.themeColor,
                        borderWidth: '1px',
                        borderRadius: '0px'
                }
            }
        },
        tagManager: {
            provider: 'gtm'
        },
        user: {
            bots: {
                consentRequired: false,
                types: ['crawlers','performance'],
                extraUserAgents: []
            }
        }
    }
};

export let turboConfig = function() {

    return {
        preferences: {
            enableAllButtons: true,
        }
    };
    // return {
        // app: {
        //     apiKey: 'xxx',
        //     name: 'Turbo',
        //     logoUrl: 'https://www.turbo.fr/themes/turbo/img/header/logo-black.svg',
        //     privacyPolicyURL: 'https://gdpr.m6tech.net/charte-confidentialite-m6-web-turbo.pdf',
        //     vendors: {
        //         didomi: ['google', 'amazon', 'facebook', 'twitter'],
        //         iab: {
        //             include :[28,27,25,24,11,15,7,2,13,32,10,57,49,45,52,71,79,91,69,98,62,36,80,81,23,61,76,66,41,3,82,60,50,21,77,93,132,22,102,18,68,97,74,138,127,154,153,157,131,130,129,128,164,144,114,14,210,226,225,31,115,126,245,244,234,254,215,274,239,201,150,285,259,272,253,317,278,295,165,316,199,119,264,309,284,64,275,262,331,345,333,202,343,231,152,184,373,388,413,436,443,452,381,340,431,430,468,458,484,507,487,506,501,569]
        //         },
        //         custom: [
        //             {
        //                 id: 'custom-vendor-osd',
        //                 name: 'OSD',
        //                 purposeIds: ['cookies', 'advertising_personalization', 'content_personalization', 'ad_delivery', 'analytics'],
        //                 policyUrl: ''
        //             },
        //             {
        //                 id: 'custom-vendor-krux',
        //                 name: 'Krux',
        //                 purposeIds: ['cookies', 'advertising_personalization', 'content_personalization', 'ad_delivery', 'analytics'],
        //                 policyUrl: 'https://www.salesforce.com/products/marketing-cloud/sfmc/salesforce-dmp-privacy/'
        //             }
        //         ]
        //     },
        //     customPurposes: [
        //         {
        //             id: 'audience_measurement',
        //             name: {
        //                 fr: " Turbo - Mesure d'audience"
        //             },
        //             description: {
        //                 fr: "Nous permet de mesurer l'audience, de faire des statistiques et d'améliorer la qualité de nos services."
        //             }
        //         },
        //         {
        //             id: 'customisation',
        //             name: {
        //                 fr: ' Turbo - Personnalisation'
        //             },
        //             description: {
        //                 fr: 'Nous permet de suivre votre navigation et de réaliser des profils, afin de vous faire des recommandations de contenus pour une expérience personnalisée.'
        //             }
        //         },
        //         {
        //             id: 'targeted_advertising',
        //             name: {
        //                 fr: ' Turbo - Publicité ciblée'
        //             },
        //             description: {
        //                 fr: "Nous permet de suivre votre navigation et de réaliser des profils, afin de vous proposer des publicités plus pertinentes car adaptées à vos centres d'intérêt, et de mesurer l'efficacité des campagnes publicitaires."
        //             }
        //         },
        //         {
        //             id: 'social_network',
        //             name: {
        //                 fr: ' Turbo - Réseaux sociaux'
        //             },
        //             description: {
        //                 fr: "Ces cookies vous permettent de partager des contenus avec d'autres personnes ou de faire connaître votre consultation ou votre opinion (boutons J'aime). Les désactiver peut vous empêcher de vous connecter à votre réseau social."
        //             }
        //         }
        //     ]
        // },
        // notice: {
        //     enable: false, // Enable the notice
        //     position: 'top',
        //     logoAlignment: 'center',
        //     closeOnClick: true,
        //     closeOnClickNavigationDelay: 500,
        //     closeOnClickBackdrop: true
        // },
        // preferences: {
        //     // canCloseWhenConsentIsMissing: false,
        //     // showWhenConsentIsMissing: true, // Enable block popin (don't miss disabable notice)
        //     enableAllButtons: true,
        //     information: {
        //         enable: true, // Enable block popin (don't miss disabable notice)
        //         content: {
        //             popup:{fr:'Votre vie privée nous importe'},
        //             title:{fr:'Votre vie privée nous importe'},
        //             text: {fr: 'En poursuivant votre navigation sur notre service, vous acceptez l’utilisation de cookies, y compris de partenaires tiers, pour réaliser des statistiques de visites, pour vous proposer des services et des publicités adaptés à vos centres d’intérêt (sur internet et via nos communications directes), pour vous proposer des fonctionnalités relatives aux réseaux sociaux ainsi que de la lecture directe de vidéos. <br/><a href="#" onclick="Didomi.preferences.show(\'vendors\');" class="didomi-content-p-link">Voir la liste des partenaires</a>'},
        //             learnMore: {fr: 'Paramétrer les cookies'},
        //             agreeAndClose: {fr: 'OK CONTINUER SUR LE SITE'}
        //         }
        //
        //     },
        //     content:{
        //         title:{fr:'Votre vie privée nous importe'},
        //         agreeToAll : {fr: 'Accepter tout'},
        //         disagreeToAll : {fr: 'Refuser tout'},
        //     }
        // },
        // languages: {
        //     enabled: ['fr'],
        //     default: 'fr'
        // },
        // theme: {
        //     color: '#cccccc', // Principal color used by the SDK
        //     linkColor: '#181818',
        //     font: "'Arial',sans-serif", // Font used by the SDK
        //     buttons: {
        //         regularButtons: { // Learn more/disagree/disagree to all buttons.
        //             backgroundColor: '#ffffff',
        //             textColor: '#414141',
        //             borderColor: '#ffffff',
        //             borderWidth: '0px',
        //             borderRadius: '0px',
        //             font : "Montserrat, sans-serif"
        //         },
        //         highlightButtons: { // Agree/save/agree to all buttons.
        //             backgroundColor: '#EC4326',
        //             textColor: '#ffffff',
        //             borderColor: '#EC4326',
        //             borderWidth: '0px',
        //             borderRadius: '4px',
        //             font : "Montserrat, sans-serif"
        //         }
        //     }
        // },
        // tagManager: {
        //     provider: 'gtm'
        // },
        // user: {
        //     bots: {
        //         consentRequired: false,
        //         types: ['crawlers','performance'],
        //         extraUserAgents: []
        //     }
        // }
    // }
};
