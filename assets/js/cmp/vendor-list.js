"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// M6 Web vendor list + gravity (WEBDEV-4026)
exports.m6Vendors = {
    "vendorListVersion": 2,
    /* "lastUpdated": "2018-07-04T09:32:13.524Z", */
    "purposes": [{
            "id": 1,
            "name": "Stockage d'informations et accès",
            "description": "Autoriser le stockage ou l'accès aux informations sur l'appareil d'un utilisateur. Selon le type de données qu'ils collectent, utilisent et traitent, ainsi que d'autres facteurs, y compris la vie privée dès la conception, certains partenaires dépendent de votre consentement tandis que d'autres vous demandent de vous désinscrire. Pour plus d'informations sur chaque fournisseur et pour exercer vos choix, voir ci-dessous."
        }, {
            "id": 2,
            "name": "Personnalisation",
            "description": "Autoriser le traitement des données d'un utilisateur pour fournir et informer une publicité personnalisée (y compris la diffusion, la mesure et la création de rapports) en fonction des préférences ou des intérêts d'un utilisateur connus ou inférés à partir de données collectées sur plusieurs sites, applications ou appareils et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes: Correspondance des données aux sources déconnectées - combinant des données provenant de sources hors ligne initialement collectées dans d'autres contextes. Liaison de périphériques - permet le traitement des données d'un utilisateur pour connecter un tel utilisateur sur plusieurs périphériques. Données géographiques précises - permettent le traitement des données géographiques précises d'un utilisateur à l'appui d'une fin pour laquelle ce tiers a donné son consentement. Selon le type de données qu'ils collectent, utilisent et traitent, ainsi que d'autres facteurs, y compris la vie privée dès la conception, certains partenaires dépendent de votre consentement tandis que d'autres vous demandent de vous désinscrire. Pour plus d'informations sur chaque fournisseur et pour exercer vos choix, voir ci-dessous."
        }, {
            "id": 3,
            "name": "Sélection d'annonce, livraison, analyse",
            "description": "La collecte d'informations, et la combinaison avec des informations précédemment collectées, pour sélectionner et livrer des publicités pour vous, et pour mesurer la livraison et l'efficacité de ces publicités. Cela inclut l'utilisation d'informations précédemment collectées sur vos centres d'intérêt pour sélectionner des publicités, le traitement des données affichées, la fréquence à laquelle elles ont été diffusées, le moment et l'endroit où elles ont été diffusées. annonce ou faire un achat. Cela n'inclut pas la personnalisation, qui est la collecte et le traitement d'informations sur votre utilisation de ce service pour ensuite personnaliser la publicité et / ou le contenu pour vous dans d'autres contextes, tels que des sites Web ou des applications, au fil du temps."
        }, {
            "id": 4,
            "name": "Sélection de contenu, livraison, analyse",
            "description": "Autoriser le traitement des données d'un utilisateur pour fournir du contenu ou des publicités et mesurer la diffusion de ces contenus ou publicités, extraire des informations et générer des rapports pour comprendre l'utilisation des services; et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes: Correspondance des données aux sources déconnectées - combinant des données provenant de sources hors ligne initialement collectées dans d'autres contextes. Liaison de périphériques - permet le traitement des données d'un utilisateur pour connecter un tel utilisateur sur plusieurs périphériques. Données géographiques précises - permettent le traitement des données géographiques précises d'un utilisateur à l'appui d'une fin pour laquelle ce tiers a donné son consentement. Selon le type de données qu'ils collectent, utilisent et traitent, ainsi que d'autres facteurs, y compris la vie privée dès la conception, certains partenaires dépendent de votre consentement tandis que d'autres vous demandent de vous désinscrire. Pour plus d'informations sur chaque fournisseur et pour exercer vos choix, voir ci-dessous."
        }, {
            "id": 5,
            "name": "La mesure",
            "description": "Ce que cela signifie: La collecte d'informations sur votre utilisation du contenu, et la combinaison avec des informations précédemment collectées, utilisées pour mesurer, comprendre et rendre compte de votre utilisation du service. Cela n'inclut pas la personnalisation, la collecte d'informations sur votre utilisation de ce service pour personnaliser ultérieurement le contenu et / ou la publicité dans d'autres contextes, par exemple sur d'autres services, tels que des sites Web ou des applications. Selon le type de données qu'ils collectent, utilisent et traitent, ainsi que d'autres facteurs, y compris la vie privée dès la conception, certains partenaires dépendent de votre consentement tandis que d'autres vous demandent de vous désinscrire. Pour plus d'informations sur chaque fournisseur et pour exercer vos choix, voir ci-dessous."
        }],
    "features": [{
            "id": 1,
            "name": "Matching Data to Offline Sources",
            "description": "Combining data from offline sources that were initially collected in other contexts."
        }, {
            "id": 2,
            "name": "Linking Devices",
            "description": "Allow processing of a user's data to connect such user across multiple devices."
        }, {
            "id": 3,
            "name": "Precise Geographic Location Data",
            "description": "Allow processing of a user's precise geographic location data in support of a purpose for which that certain third party has consent."
        }],
    "vendors": [{
            "id": 28,
            "name": "TripleLift, Inc.",
            "policyUrl": "https://triplelift.com/privacy/",
            "purposeIds": [1, 3],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 27,
            "name": "ADventori SAS",
            "policyUrl": "https://www.adventori.com/with-us/legal-notice/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 25,
            "name": "Oath (EMEA) Limited",
            "policyUrl": "https://policies.oath.com/ie/en/oath/privacy/index.html",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 24,
            "name": "Conversant Europe Ltd.",
            "policyUrl": "https://www.conversantmedia.eu/legal/privacy-policy",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 11,
            "name": "Quantcast International Limited",
            "policyUrl": "https://www.quantcast.com/privacy/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2]
        }, {
            "id": 15,
            "name": "Adikteev",
            "policyUrl": "https://www.adikteev.com/eu/privacy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 7,
            "name": "Vibrant Media Limited",
            "policyUrl": "https://www.vibrantmedia.com/en/privacy-policy/",
            "purposeIds": [2, 3, 4, 5],
            "legIntPurposeIds": [1],
            "featureIds": []
        }, {
            "id": 2,
            "name": "Captify Technologies Limited",
            "policyUrl": "http://www.captify.co.uk/privacy-policy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [5],
            "featureIds": [2]
        }, {
            "id": 13,
            "name": "Sovrn Holdings Inc",
            "policyUrl": "https://www.sovrn.com/sovrn-privacy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": [2, 3]
        }, {
            "id": 32,
            "name": "AppNexus Inc.",
            "policyUrl": "https://www.appnexus.com/en/company/platform-privacy-policy",
            "purposeIds": [1],
            "legIntPurposeIds": [3],
            "featureIds": [2, 3]
        }, {
            "id": 10,
            "name": "Index Exchange, Inc. ",
            "policyUrl": "www.indexexchange.com/privacy",
            "purposeIds": [1],
            "legIntPurposeIds": [],
            "featureIds": [2, 3]
        }, {
            "id": 57,
            "name": "ADARA MEDIA UNLIMITED",
            "policyUrl": "https://adara.com/privacy-promise/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2]
        }, {
            "id": 49,
            "name": "Tradelab, SAS",
            "policyUrl": "http://tradelab.com/en/privacy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 45,
            "name": "Smart Adserver",
            "policyUrl": "http://smartadserver.com/company/privacy-policy/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3, 5],
            "featureIds": [3]
        }, {
            "id": 52,
            "name": "The Rubicon Project, Limited",
            "policyUrl": "http://rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [3]
        }, {
            "id": 71,
            "name": "Dataxu, Inc. ",
            "policyUrl": "https://www.dataxu.com/about-us/privacy/data-collection-platform/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 79,
            "name": "MediaMath, Inc.",
            "policyUrl": "http://www.mediamath.com/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 91,
            "name": "Criteo SA",
            "policyUrl": "https://www.criteo.com/privacy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": [1, 2]
        }, {
            "id": 69,
            "name": "OpenX Software Ltd. and its affiliates",
            "policyUrl": "https://www.openx.com/legal/privacy-policy/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 62,
            "name": "Justpremium BV",
            "policyUrl": "http://justpremium.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 36,
            "name": "RhythmOne, LLC",
            "policyUrl": "https://www.rhythmone.com/privacy-policy",
            "purposeIds": [5],
            "legIntPurposeIds": [1, 2, 3, 4],
            "featureIds": [1, 2, 3]
        }, {
            "id": 80,
            "name": "Sharethrough, Inc",
            "policyUrl": "https://platform-cdn.sharethrough.com/privacy-policy",
            "purposeIds": [3, 5],
            "legIntPurposeIds": [1],
            "featureIds": []
        }, {
            "id": 81,
            "name": "PulsePoint, Inc.",
            "policyUrl": "https://www.pulsepoint.com/privacy-policy",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 23,
            "name": "Amobee, Inc. ",
            "policyUrl": "https://www.amobee.com/trust/privacy-guidelines",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 61,
            "name": "GumGum, Inc.",
            "policyUrl": "https://gumgum.com/privacy-policy",
            "purposeIds": [1, 2, 3, 5],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 76,
            "name": "PubMatic, Inc.",
            "policyUrl": "https://pubmatic.com/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": []
        }, {
            "id": 66,
            "name": "adsquare GmbH",
            "policyUrl": "www.adsquare.com/privacy",
            "purposeIds": [1, 2, 3, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 41,
            "name": "Adverline",
            "policyUrl": "https://www.adverline.com/privacy/",
            "purposeIds": [2],
            "legIntPurposeIds": [1, 3],
            "featureIds": []
        }, {
            "id": 3,
            "name": "affilinet",
            "policyUrl": "https://www.affili.net/de/footeritem/datenschutz",
            "purposeIds": [2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 82,
            "name": "Smaato, Inc.",
            "policyUrl": "https://www.smaato.com/privacy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 60,
            "name": "Rakuten Marketing LLC",
            "policyUrl": "https://rakutenmarketing.com/legal-notices/services-privacy-policy",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 50,
            "name": "Adform A/S",
            "policyUrl": "https://site.adform.com/privacy-policy-opt-out/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2]
        }, {
            "id": 21,
            "name": "The Trade Desk, Inc and affiliated companies",
            "policyUrl": "https://www.thetradedesk.com/general/privacy-policy",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3],
            "featureIds": [1, 2, 3]
        }, {
            "id": 77,
            "name": "comScore, Inc.",
            "policyUrl": "https://www.comscore.com/About-comScore/Privacy-Policy",
            "purposeIds": [1, 5],
            "legIntPurposeIds": [],
            "featureIds": [2]
        }, {
            "id": 93,
            "name": "Adloox SA",
            "policyUrl": "http://adloox.com/disclaimer",
            "purposeIds": [null],
            "legIntPurposeIds": [5],
            "featureIds": []
        }, {
            "id": 132,
            "name": "Teads ",
            "policyUrl": "https://teads.tv/privacy-policy/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3],
            "featureIds": [1, 2]
        }, {
            "id": 22,
            "name": "admetrics GmbH",
            "policyUrl": "https://admetrics.io/en/privacy_policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [3, 4, 5],
            "featureIds": []
        }, {
            "id": 102,
            "name": "SlimCut Media SAS",
            "policyUrl": "http://www.slimcutmedia.com/privacy-policy/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3],
            "featureIds": []
        }, {
            "id": 18,
            "name": "Widespace AB",
            "policyUrl": "https://www.widespace.com/legal/privacy-policy-notice/",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 68,
            "name": "Sizmek Technologies, Inc. ",
            "policyUrl": "https://www.sizmek.com/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [2]
        }, {
            "id": 97,
            "name": "LiveRamp, Inc.",
            "policyUrl": "www.liveramp.com/service-privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2]
        }, {
            "id": 74,
            "name": "Admotion SRL",
            "policyUrl": "http://www.admotion.com/policy/",
            "purposeIds": [1, 3],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 138,
            "name": "ConnectAd Realtime GmbH",
            "policyUrl": "http://connectadrealtime.com/privacy/",
            "purposeIds": [1],
            "legIntPurposeIds": [3],
            "featureIds": []
        }, {
            "id": 127,
            "name": "PIXIMEDIA SAS",
            "policyUrl": "https://piximedia.com/privacy/",
            "purposeIds": [1, 2, 4],
            "legIntPurposeIds": [3, 5],
            "featureIds": [3]
        }, {
            "id": 124,
            "name": "Teemo SA",
            "policyUrl": "https://teemo.co/fr/confidentialite/",
            "purposeIds": [1, 2, 3, 5],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 154,
            "name": "YOC AG",
            "policyUrl": "https://yoc.com/privacy/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3, 5],
            "featureIds": [3]
        }, {
            "id": 153,
            "name": "MADVERTISE MEDIA",
            "policyUrl": "http://madvertise.com/en/gdpr/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 157,
            "name": "Seedtag Advertising S.L",
            "policyUrl": "https://www.seedtag.com/en/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [3],
            "featureIds": []
        }, {
            "id": 131,
            "name": "ID5 Technology SAS",
            "policyUrl": "https://www.id5.io/privacy",
            "purposeIds": [1],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 130,
            "name": "AdRoll Inc",
            "policyUrl": "adrollgroup.com/privacy",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3],
            "featureIds": [1, 2]
        }, {
            "id": 129,
            "name": "IPONWEB GmbH",
            "policyUrl": "https://www.iponweb.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 128,
            "name": "BIDSWITCH GmbH",
            "policyUrl": "http://www.bidswitch.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 164,
            "name": "Outbrain UK Ltd",
            "policyUrl": "https://www.outbrain.com/legal/",
            "purposeIds": [1, 2, 3, 5],
            "legIntPurposeIds": [4],
            "featureIds": [1]
        }, {
            "id": 144,
            "name": "district m inc.",
            "policyUrl": "https://districtm.net/en/page/platforms-data-and-privacy-policy/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3, 5],
            "featureIds": [3]
        }, {
            "id": 114,
            "name": "Sublime Skinz",
            "policyUrl": "http://ayads.co/privacy.php",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [5],
            "featureIds": []
        }, {
            "id": 14,
            "name": "Adkernel LLC",
            "policyUrl": "http://adkernel.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [2, 3]
        }, {
            "id": 210,
            "name": "Zemanta, Inc.",
            "policyUrl": "http://www.zemanta.com/legal/privacy",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1]
        }, {
            "id": 226,
            "name": "Publicis Media GmbH",
            "policyUrl": "https://www.publicismedia.de/datenschutz/",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 4, 5],
            "featureIds": [1]
        }, {
            "id": 225,
            "name": "Ligatus GmbH",
            "policyUrl": "https://www.ligatus.com/en/privacy-policy",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 5],
            "featureIds": [3]
        }, {
            "id": 31,
            "name": "Ogury Ltd.",
            "policyUrl": "https://www.ogury.com/privacy/",
            "purposeIds": [1, 2, 3, 4],
            "legIntPurposeIds": [5],
            "featureIds": [2]
        }, {
            "id": 115,
            "name": "smartclip Holding AG",
            "policyUrl": "http://privacy-portal.smartclip.net/",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 126,
            "name": "DoubleVerify Inc.​",
            "policyUrl": "https://www.doubleverify.com/privacy/",
            "purposeIds": [5],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 193,
            "name": "Mediasmart Mobile S.L.",
            "policyUrl": "http://mediasmart.io/privacy/",
            "purposeIds": [1, 3],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 245,
            "name": "IgnitionOne",
            "policyUrl": "https://www.ignitionone.com/privacy-policy/",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 4, 5],
            "featureIds": [1, 2]
        }, {
            "id": 244,
            "name": "Leadplace - Temelio",
            "policyUrl": "https://temelio.com/vie-privee",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2]
        }, {
            "id": 254,
            "name": "LiquidM Technology GmbH",
            "policyUrl": "https://liquidm.com/privacy-policy/",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 5],
            "featureIds": [3]
        }, {
            "id": 215,
            "name": "ARMIS SAS",
            "policyUrl": "http://armis.tech/infos-cookies/",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [3],
            "featureIds": [1, 2, 3]
        }, {
            "id": 201,
            "name": "TimeOne",
            "policyUrl": "https://www.timeonegroup.com/en/privacy-policies/",
            "purposeIds": [null],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [2]
        }, {
            "id": 150,
            "name": "Inskin Media LTD",
            "policyUrl": "http://www.inskinmedia.com/privacy-policy.html",
            "purposeIds": [3],
            "legIntPurposeIds": [1],
            "featureIds": []
        }, {
            "id": 285,
            "name": "Comcast International France SAS",
            "policyUrl": "freewheel.tv/privacy-policy",
            "purposeIds": [1],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 259,
            "name": "ADYOULIKE SA",
            "policyUrl": "https://www.adyoulike.com/privacy_policy.php",
            "purposeIds": [1, 2, 3, 4],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 272,
            "name": "A.Mob",
            "policyUrl": "https://adotmob.com/privacy.html",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 253,
            "name": "Improve Digital International BV",
            "policyUrl": "https://www.improvedigital.com/platform-privacy-policy",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [2, 3]
        }, {
            "id": 317,
            "name": "mainADV Srl",
            "policyUrl": "http://www.mainad.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [2, 3]
        }, {
            "id": 295,
            "name": "Sojern, Inc.",
            "policyUrl": "https://www.sojern.com/privacy/product-privacy-policy/",
            "purposeIds": [1, 2, 3, 5],
            "legIntPurposeIds": [],
            "featureIds": [2]
        }, {
            "id": 165,
            "name": "SpotX",
            "policyUrl": "https://www.spotx.tv/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 316,
            "name": "Gamned",
            "policyUrl": "https://www.gamned.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 199,
            "name": "ADUX",
            "policyUrl": "http://www.adux.com/donnees-personelles/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 119,
            "name": "S4M",
            "policyUrl": "http://www.s4m.io/privacy-policy/",
            "purposeIds": [2],
            "legIntPurposeIds": [1, 3],
            "featureIds": [1, 3]
        }, {
            "id": 264,
            "name": "Adobe Advertising Cloud",
            "policyUrl": "https://www.adobe.com/nz/privacy/marketing-cloud.html",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [2]
        }, {
            "id": 309,
            "name": "Videology Ltd.",
            "policyUrl": "https://videologygroup.com/en/privacy-policy",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 5],
            "featureIds": [1]
        }, {
            "id": 284,
            "name": "WEBORAMA",
            "policyUrl": "https://weborama.com/privacy_en/",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 64,
            "name": "DigiTrust / IAB Tech Lab",
            "policyUrl": "http://www.digitru.st/privacy-policy/",
            "purposeIds": [1],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 275,
            "name": "TabMo SAS",
            "policyUrl": "http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html",
            "purposeIds": [1, 2, 3],
            "legIntPurposeIds": [],
            "featureIds": [1, 3]
        }, {
            "id": 262,
            "name": "Fyber ",
            "policyUrl": "https://www.fyber.com/legal/privacy-policy/",
            "purposeIds": [3],
            "legIntPurposeIds": [],
            "featureIds": [3]
        }, {
            "id": 331,
            "name": "ad6media",
            "policyUrl": "https://www.ad6media.fr/privacy",
            "purposeIds": [1, 2, 4],
            "legIntPurposeIds": [3, 5],
            "featureIds": [2, 3]
        }, {
            "id": 345,
            "name": "The Kantar Group Limited",
            "policyUrl": "http://www.kantar.com/cookies-policies",
            "purposeIds": [1, 3, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 333,
            "name": "InMobi Pte Ltd",
            "policyUrl": "https://www.inmobi.com/privacy-policy-for-eea",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2, 3]
        }, {
            "id": 343,
            "name": "DIGITEKA Technologies",
            "policyUrl": "https://www.ultimedia.com/POLICY.html",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 2, 3, 4, 5],
            "featureIds": [3]
        }, {
            "id": 231,
            "name": "Acuityads Inc.",
            "policyUrl": "https://www.acuityads.com/privacy-policy/",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": []
        }, {
            "id": 152,
            "name": "Meetrics GmbH",
            "policyUrl": "https://www.meetrics.com/en/data-privacy/",
            "purposeIds": [null],
            "legIntPurposeIds": [1, 3, 4, 5],
            "featureIds": []
        }, {
            "id": 184,
            "name": "mediarithmics SAS",
            "policyUrl": "http://www.mediarithmics.com/en/data-privacy.html",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 373,
            "name": "Nielsen Marketing Cloud",
            "policyUrl": "http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html",
            "purposeIds": [1, 2],
            "legIntPurposeIds": [5],
            "featureIds": [1, 2]
        }, {
            "id": 388,
            "name": "1000mercis",
            "policyUrl": "http://ads.1000mercis.com/fr.html",
            "purposeIds": [1],
            "legIntPurposeIds": [2, 3, 4, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 436,
            "name": "INVIBES GROUP",
            "policyUrl": "http://www.invibes.com/terms",
            "purposeIds": [2, 3, 4],
            "legIntPurposeIds": [1, 5],
            "featureIds": [1, 2, 3]
        }, {
            "id": 501,
            "name": "Alliance Gravity Data Media",
            "policyUrl": "https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles",
            "purposeIds": [1, 2, 3, 4, 5],
            "legIntPurposeIds": [],
            "featureIds": [1, 2]
        }]
};
