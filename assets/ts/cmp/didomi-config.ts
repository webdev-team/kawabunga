import * as env from "../env/env";

export interface DidomiOptions {
    apiKey: string;
    logoUrl: string;
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
    let themeColor = getThemeColor();

    return {
        app: {
            apiKey: options.apiKey,
            logoUrl: options.logoUrl,
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
        preferences: {
            enableAllButtons: true,
            canCloseWhenConsentIsMissing: false,
            showWhenConsentIsMissing: true,
            information: {
                enable: true, // Enable block popin (don't miss disabable notice)
                content: {
                    popup:{fr:'Votre vie privée nous importe'},
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
        notice: {
            enable: false
        },
        languages: {
            enabled: ['fr'],
            default: 'fr'
        },
        theme: {
            color: '#D1D1D1', // Principal color used by the SDK
                linkColor: themeColor,
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
                    backgroundColor: themeColor,
                        textColor: '#ffffff',
                        borderColor: themeColor,
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
