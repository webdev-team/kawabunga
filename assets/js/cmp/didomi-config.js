"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_OPTIONS = {
    name: 'rtl.fr',
    apiKey: '4801407c-7ff1-4aed-aa34-71b05434f911',
    logoUrl: 'https://cdn-static.rtl.fr/versions/www/6.0.816/img/logo-rtl-86x60.jpg',
    themeColor: '#E1001B',
    privacyPolicyURL: 'https://www.rtl.fr/cnil/charte-de-confidentialite'
};
exports.didomiConfig = function (options) {
    options = options || DEFAULT_OPTIONS;
    options.name = options.name || DEFAULT_OPTIONS.name;
    options.apiKey = options.apiKey || DEFAULT_OPTIONS.apiKey;
    options.logoUrl = options.logoUrl || DEFAULT_OPTIONS.logoUrl;
    options.themeColor = options.themeColor || DEFAULT_OPTIONS.themeColor;
    options.privacyPolicyURL = options.privacyPolicyURL || DEFAULT_OPTIONS.privacyPolicyURL;
    return {
        app: {
            name: options.name,
            apiKey: options.apiKey,
            logoUrl: options.logoUrl,
            privacyPolicyURL: options.privacyPolicyURL,
            gdprAppliesGlobally: true,
            gdprAppliesWhenUnknown: true,
            vendors: {
                didomi: ['google', 'amazon', 'facebook', 'twitter'],
                iab: {
                    all: true,
                    exclude: [740, 720, 723, 733, 718, 728, 717, 678, 721, 724, 729, 713, 707, 708, 737, 716, 719, 293, 744, 171]
                },
                custom: [
                    {
                        id: 'custom-vendor-osd',
                        name: 'OSD',
                        purposeIds: ['cookies', 'advertising_personalization', 'content_personalization', 'ad_delivery', 'analytics'],
                        policyUrl: ''
                    }
                ]
            },
            customPurposes: [
                {
                    id: 'audience_measurement',
                    name: {
                        fr: options.name + " - Mesure d'audience"
                    },
                    description: {
                        fr: "Ces cookies permettent d’établir des statistiques de fréquentation de nos services. Les désactiver nous empêche de suivre et d’améliorer la qualité de nos services."
                    }
                },
                {
                    id: 'targeted_advertising',
                    name: {
                        fr: options.name + " - Publicit\u00E9 cibl\u00E9e"
                    },
                    description: {
                        fr: "Ces cookies permettent d’analyser votre navigation et de définir vos centres d’intérêts pour vous proposer des publicités plus pertinentes. Les désactiver n’a aucun impact sur le volume de publicité que vous recevrez."
                    }
                },
                {
                    id: 'social_network',
                    name: {
                        fr: options.name + " - R\u00E9seaux sociaux"
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
                enable: true,
                content: {
                    popup: { fr: 'Votre vie privée nous importe' },
                    title: { fr: 'Votre vie privée nous importe' },
                    text: { fr: 'En poursuivant votre navigation sur notre service vous acceptez que le Groupe M6 et ses partenaires utilisent des traceurs (comme des cookies ou l’identifiant unique de votre appareil) et traitent des données à caractère personnel (comme vos données de navigation et votre adresse IP) dans le but : d’afficher de la publicité personnalisée en fonction de votre navigation et de votre profil, de personnaliser l’affichage de nos produits, services et contenus en fonction de ceux que vous avez précédemment consultés, de mesurer l’audience de notre service, de vous permettre de partager du contenu sur les réseaux sociaux. Vous pouvez choisir de ne pas consentir à ces exploitations en cliquant sur le bouton « Paramétrer mes choix » et modifier vos préférences à tout moment en cliquant sur le lien « Préférences Cookies » figurant sur notre service.' },
                    learnMore: { fr: 'Paramétrer mes choix' },
                    agreeAndClose: { fr: 'Accepter en continuant sur le site' }
                }
            },
            content: {
                title: { fr: 'Votre vie privée nous importe' },
                agreeToAll: { fr: 'Accepter tout' },
                disagreeToAll: { fr: 'Refuser tout' },
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
            color: '#D1D1D1',
            linkColor: options.themeColor,
            font: 'Arial',
            buttons: {
                regularButtons: {
                    backgroundColor: '#eeeeee',
                    textColor: '#212121',
                    borderColor: 'rgba(34, 34, 34, 0.2)',
                    borderWidth: '1px',
                    borderRadius: '0px'
                },
                highlightButtons: {
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
                types: ['crawlers', 'performance'],
                extraUserAgents: []
            }
        }
    };
};
