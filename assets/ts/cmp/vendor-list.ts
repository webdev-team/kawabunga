import {VendorList} from 'consent-string';

// M6 Web vendor list + gravity (WEBDEV-4026)
export let m6Vendors: VendorList = {
    "vendorListVersion": 153,
    // "lastUpdated": "2019-06-27T16:00:16Z",
    "purposes": [
        {
            "id": 1,
            "name": "Information storage and access",
            "description": "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
        },
        {
            "id": 2,
            "name": "Personalisation",
            "description": "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
        },
        {
            "id": 3,
            "name": "Ad selection, delivery, reporting",
            "description": "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
        },
        {
            "id": 4,
            "name": "Content selection, delivery, reporting",
            "description": "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
        },
        {
            "id": 5,
            "name": "Measurement",
            "description": "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
        }
    ],
    "features": [
        {
            "id": 1,
            "name": "Matching Data to Offline Sources",
            "description": "Combining data from offline sources that were initially collected in other contexts."
        },
        {
            "id": 2,
            "name": "Linking Devices",
            "description": "Allow processing of a user's data to connect such user across multiple devices."
        },
        {
            "id": 3,
            "name": "Precise Geographic Location Data",
            "description": "Allow processing of a user's precise geographic location data in support of a purpose for which that certain third party has consent."
        }
    ],
    "vendors": [
        {
            "id": 8,
            "name": "Emerse Sverige AB",
            "policyUrl": "https://www.emerse.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 12,
            "name": "BeeswaxIO Corporation",
            "policyUrl": "https://www.beeswax.com/privacy.html",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 28,
            "name": "TripleLift, Inc.",
            "policyUrl": "https://triplelift.com/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 27,
            "name": "ADventori SAS",
            "policyUrl": "https://www.adventori.com/with-us/legal-notice/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 25,
            "name": "Oath (EMEA) Limited",
            "policyUrl": "https://policies.oath.com/ie/en/oath/privacy/index.html",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 26,
            "name": "Venatus Media Limited",
            "policyUrl": "https://www.venatusmedia.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 1,
            "name": "Exponential Interactive, Inc",
            "policyUrl": "http://exponential.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 6,
            "name": "AdSpirit GmbH",
            "policyUrl": "http://www.adspirit.de/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 30,
            "name": "BidTheatre AB",
            "policyUrl": "https://www.bidtheatre.com/privacy-policy",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 24,
            "name": "Conversant Europe Ltd.",
            "policyUrl": "https://www.conversantmedia.eu/legal/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 29,
            "name": "Etarget SE",
            "policyUrl": "https://www.etarget.sk/privacy.php",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 39,
            "name": "ADITION technologies AG",
            "policyUrl": "https://www.adition.com/datenschutz",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 11,
            "name": "Quantcast International Limited",
            "policyUrl": "https://www.quantcast.com/privacy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 15,
            "name": "Adikteev / Emoteev",
            "policyUrl": "https://www.adikteev.com/eu/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 4,
            "name": "Roq.ad GmbH",
            "policyUrl": "https://www.roq.ad/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 7,
            "name": "Vibrant Media Limited",
            "policyUrl": "https://www.vibrantmedia.com/en/privacy-policy/",
            "purposeIds": [
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 2,
            "name": "Captify Technologies Limited",
            "policyUrl": "http://www.captify.co.uk/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 37,
            "name": "NEURAL.ONE",
            "policyUrl": "https://web.neural.one/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 13,
            "name": "Sovrn Holdings Inc",
            "policyUrl": "https://www.sovrn.com/sovrn-privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 34,
            "name": "NEORY GmbH",
            "policyUrl": "https://www.neory.com/privacy.html",
            "purposeIds": [
                1,
                2,
                4,
                5
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 32,
            "name": "AppNexus Inc.",
            "policyUrl": "https://www.appnexus.com/en/company/platform-privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 10,
            "name": "Index Exchange, Inc. ",
            "policyUrl": "https://www.indexexchange.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 57,
            "name": "ADARA MEDIA UNLIMITED",
            "policyUrl": "https://adara.com/privacy-promise/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 63,
            "name": "Avocet Systems Limited",
            "policyUrl": "http://www.avocet.io/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": []
        },
        {
            "id": 51,
            "name": "xAd, Inc. dba GroundTruth",
            "policyUrl": "https://www.groundtruth.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 49,
            "name": "Tradelab, SAS",
            "policyUrl": "http://tradelab.com/en/privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 45,
            "name": "Smart Adserver",
            "policyUrl": "https://smartadserver.com/end-user-privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 52,
            "name": "The Rubicon Project, Inc. ",
            "policyUrl": "http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 71,
            "name": "Dataxu, Inc. ",
            "policyUrl": "https://www.dataxu.com/about-us/privacy/data-collection-platform/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 79,
            "name": "MediaMath, Inc.",
            "policyUrl": "http://www.mediamath.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 91,
            "name": "Criteo SA",
            "policyUrl": "https://www.criteo.com/privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 85,
            "name": "Crimtan Holdings Limited",
            "policyUrl": "https://crimtan.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 16,
            "name": "RTB House S.A.",
            "policyUrl": "https://www.rtbhouse.com/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 86,
            "name": "Scene Stealer Limited",
            "policyUrl": "http://scenestealer.tv/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 94,
            "name": "Blis Media Limited",
            "policyUrl": "http://www.blis.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 73,
            "name": "Simplifi Holdings Inc.",
            "policyUrl": "https://www.simpli.fi/site-privacy-policy2/",
            "purposeIds": [
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 33,
            "name": "ShareThis, Inc.",
            "policyUrl": "http://www.sharethis.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 20,
            "name": "N Technologies Inc.",
            "policyUrl": "https://n.rich/privacy-notice",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 55,
            "name": "Madison Logic, Inc.",
            "policyUrl": "https://www.madisonlogic.com/privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 53,
            "name": "Sirdata",
            "policyUrl": "https://www.sirdata.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 69,
            "name": "OpenX",
            "policyUrl": "https://www.openx.com/legal/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 98,
            "name": "GroupM",
            "policyUrl": "https://www.groupm.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 62,
            "name": "Justpremium BV",
            "policyUrl": "http://justpremium.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 19,
            "name": "Intent Media, Inc.",
            "policyUrl": "https://intentmedia.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 43,
            "name": "Vdopia DBA Chocolate Platform",
            "policyUrl": "https://chocolateplatform.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 36,
            "name": "RhythmOne, LLC",
            "policyUrl": "https://www.rhythmone.com/privacy-policy",
            "purposeIds": [
                5
            ],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 80,
            "name": "Sharethrough, Inc",
            "policyUrl": "https://platform-cdn.sharethrough.com/privacy-policy",
            "purposeIds": [
                3,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 81,
            "name": "PulsePoint, Inc.",
            "policyUrl": "https://www.pulsepoint.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 23,
            "name": "Amobee, Inc. ",
            "policyUrl": "https://www.amobee.com/trust/privacy-guidelines",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 75,
            "name": "M32 Connect Inc",
            "policyUrl": "https://m32.media/privacy-cookie-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 17,
            "name": "Greenhouse Group BV (with its trademark LemonPI)",
            "policyUrl": "https://www.lemonpi.io/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 61,
            "name": "GumGum, Inc.",
            "policyUrl": "https://gumgum.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 40,
            "name": "Active Agent AG",
            "policyUrl": "http://www.active-agent.com/de/unternehmen/datenschutzerklaerung/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 76,
            "name": "PubMatic, Inc.",
            "policyUrl": "https://pubmatic.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 89,
            "name": "Tapad, Inc. ",
            "policyUrl": "https://www.tapad.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 46,
            "name": "Skimbit Ltd",
            "policyUrl": "https://skimlinks.com/pages/privacy-policy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 66,
            "name": "adsquare GmbH",
            "policyUrl": "https://www.adsquare.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 105,
            "name": "Impression Desk Technologies Limited",
            "policyUrl": "https://impressiondesk.com/privacy-policy/",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 41,
            "name": "Adverline",
            "policyUrl": "https://www.adverline.com/privacy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": []
        },
        {
            "id": 82,
            "name": "Smaato, Inc.",
            "policyUrl": "https://www.smaato.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 60,
            "name": "Rakuten Marketing LLC",
            "policyUrl": "https://rakutenmarketing.com/legal-notices/services-privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 70,
            "name": "Yieldlab AG",
            "policyUrl": "http://www.yieldlab.de/meta-navigation/datenschutz/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 50,
            "name": "Adform A/S",
            "policyUrl": "https://site.adform.com/privacy-policy-opt-out/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 48,
            "name": "NetSuccess, s.r.o.",
            "policyUrl": "https://www.inres.sk/pp/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 100,
            "name": "Fifty Technology Limited",
            "policyUrl": "https://fifty.io/privacy-policy.php",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 21,
            "name": "The Trade Desk",
            "policyUrl": "https://www.thetradedesk.com/general/privacy-policy",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 110,
            "name": "Hottraffic BV (DMA Institute)",
            "policyUrl": "https://www.dma-institute.com/privacy-compliancy/",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 42,
            "name": "Taboola Europe Limited",
            "policyUrl": "https://www.taboola.com/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 112,
            "name": "Maytrics GmbH",
            "policyUrl": "https://maytrics.com/node/2",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 77,
            "name": "comScore, Inc.",
            "policyUrl": "https://www.comscore.com/About-comScore/Privacy-Policy",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 109,
            "name": "LoopMe Ltd",
            "policyUrl": "https://loopme.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 120,
            "name": "Eyeota Ptd Ltd",
            "policyUrl": "https://www.eyeota.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 93,
            "name": "Adloox SA",
            "policyUrl": "http://adloox.com/disclaimer",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 132,
            "name": "Teads ",
            "policyUrl": "https://teads.tv/privacy-policy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 22,
            "name": "admetrics GmbH",
            "policyUrl": "https://admetrics.io/en/privacy_policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 102,
            "name": "SlimCut Media SAS",
            "policyUrl": "http://www.slimcutmedia.com/privacy-policy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 108,
            "name": "Rich Audience",
            "policyUrl": "https://richaudience.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 18,
            "name": "Widespace AB",
            "policyUrl": "https://www.widespace.com/legal/privacy-policy-notice/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 68,
            "name": "Sizmek Technologies, Inc. ",
            "policyUrl": "https://www.sizmek.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 122,
            "name": "Avid Media Ltd",
            "policyUrl": "http://www.avidglobalmedia.eu/privacy-policy.html",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 97,
            "name": "LiveRamp, Inc.",
            "policyUrl": "https://www.liveramp.com/service-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 74,
            "name": "Admotion SRL",
            "policyUrl": "http://www.admotion.com/policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 138,
            "name": "ConnectAd Realtime GmbH",
            "policyUrl": "http://connectadrealtime.com/privacy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 72,
            "name": "Nano Interactive GmbH",
            "policyUrl": "http://www.nanointeractive.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 127,
            "name": "PIXIMEDIA SAS",
            "policyUrl": "https://piximedia.com/privacy/",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 136,
            "name": "Str\u00f6er SSP GmbH",
            "policyUrl": "https://www.stroeer.de/fileadmin/user_upload/Datenschutz.pdf",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 111,
            "name": "ShowHeroes GmbH",
            "policyUrl": "http://showheroes.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 56,
            "name": "Confiant Inc.",
            "policyUrl": "https://www.confiant.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 124,
            "name": "Teemo SA",
            "policyUrl": "https://teemo.co/fr/confidentialite/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 154,
            "name": "YOC AG",
            "policyUrl": "https://yoc.com/privacy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 38,
            "name": "Beemray Oy",
            "policyUrl": "https://www.beemray.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 101,
            "name": "MiQ",
            "policyUrl": "http://wearemiq.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 149,
            "name": "ADman Interactive SL",
            "policyUrl": "http://admanmedia.com/politica",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 151,
            "name": "Admedo Ltd",
            "policyUrl": "https://www.admedo.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 153,
            "name": "MADVERTISE MEDIA",
            "policyUrl": "https://madvertise.com/en/gdpr/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 159,
            "name": "Underdog Media LLC ",
            "policyUrl": "https://underdogmedia.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 157,
            "name": "Seedtag Advertising S.L",
            "policyUrl": "https://www.seedtag.com/en/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 145,
            "name": "Snapsort Inc., operating as Sortable",
            "policyUrl": "https://sortable.com/privacy",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 131,
            "name": "ID5 Technology SAS",
            "policyUrl": "https://www.id5.io/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 158,
            "name": "Reveal Mobile, Inc",
            "policyUrl": "https://revealmobile.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 147,
            "name": "Adacado Technologies Inc. (DBA Adacado)",
            "policyUrl": "https://www.adacado.com/privacy-policy-april-25-2018/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 130,
            "name": "AdRoll Inc",
            "policyUrl": "https://www.adrollgroup.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 129,
            "name": "IPONWEB GmbH",
            "policyUrl": "https://www.iponweb.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 128,
            "name": "BIDSWITCH GmbH",
            "policyUrl": "http://www.bidswitch.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 168,
            "name": "EASYmedia GmbH",
            "policyUrl": "https://login.rtbmarket.com/gdpr",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 164,
            "name": "Outbrain UK Ltd",
            "policyUrl": "https://www.outbrain.com/legal/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [
                4
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 144,
            "name": "district m inc.",
            "policyUrl": "https://districtm.net/en/page/platforms-data-and-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 163,
            "name": "Bombora Inc.",
            "policyUrl": "https://bombora.com/privacy",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 173,
            "name": "Yieldmo, Inc.",
            "policyUrl": "https://www.yieldmo.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 88,
            "name": "TreSensa, Inc.",
            "policyUrl": "https://www.tresensa.com/eu-privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3
            ],
            "featureIds": []
        },
        {
            "id": 78,
            "name": "Flashtalking, Inc.",
            "policyUrl": "http://www.flashtalking.com/privacypolicy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 59,
            "name": "Sift Media, Inc",
            "policyUrl": "https://www.sift.co/privacy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 114,
            "name": "Sublime",
            "policyUrl": "http://ayads.co/privacy.php",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 175,
            "name": "FORTVISION",
            "policyUrl": "http://fortvision.com/POC/index.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 133,
            "name": "digitalAudience",
            "policyUrl": "https://digitalaudience.io/legal/privacy-cookies/",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 14,
            "name": "Adkernel LLC",
            "policyUrl": "http://adkernel.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 180,
            "name": "Thirdpresence Oy",
            "policyUrl": "http://www.thirdpresence.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 183,
            "name": "EMX Digital LLC",
            "policyUrl": "https://emxdigital.com/privacy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 58,
            "name": "33Across",
            "policyUrl": "http://www.33across.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 140,
            "name": "Platform161",
            "policyUrl": "https://platform161.com/cookie-and-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 90,
            "name": "Teroa S.A.",
            "policyUrl": "https://www.e-planning.net/en/privacy.html",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 141,
            "name": "1020, Inc. dba Placecast and Ericsson Emodo",
            "policyUrl": "https://www.ericsson-emodo.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 142,
            "name": "Media.net Advertising FZ-LLC",
            "policyUrl": "https://www.media.net/en/privacy-policy",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 209,
            "name": "Delta Projects AB",
            "policyUrl": "http://www.deltaprojects.com/data-collection-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 195,
            "name": "advanced store GmbH",
            "policyUrl": "http://www.advanced-store.com/de/datenschutz/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 197,
            "name": "Switch Concepts Limited",
            "policyUrl": "https://www.switchconcepts.com/privacy-policy",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 190,
            "name": "video intelligence AG",
            "policyUrl": "https://www.vi.ai/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 84,
            "name": "Semasio GmbH",
            "policyUrl": "http://www.semasio.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 65,
            "name": "Location Sciences AI Ltd",
            "policyUrl": "https://www.locationsciences.ai/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 210,
            "name": "Zemanta, Inc.",
            "policyUrl": "http://www.zemanta.com/legal/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 200,
            "name": "Tapjoy, Inc.",
            "policyUrl": "https://www.tapjoy.com/legal/#privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 188,
            "name": "Sellpoints Inc.",
            "policyUrl": "https://retargeter.com/service-privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 217,
            "name": "2KDirect, Inc. (dba iPromote)",
            "policyUrl": "https://www.ipromote.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": []
        },
        {
            "id": 156,
            "name": "Centro, Inc.",
            "policyUrl": "https://www.centro.net/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 194,
            "name": "Rezonence Limited",
            "policyUrl": "https://rezonence.com/privacy-policy/",
            "purposeIds": [
                3,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 226,
            "name": "Publicis Media GmbH",
            "policyUrl": "https://www.publicismedia.de/datenschutz/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 198,
            "name": "SYNC",
            "policyUrl": "https://redirect.sync.tv/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 227,
            "name": "ORTEC B.V.",
            "policyUrl": "https://www.ortecadscience.com/privacy-policy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 225,
            "name": "Ligatus GmbH",
            "policyUrl": "https://www.ligatus.com/en/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 205,
            "name": "Adssets AB",
            "policyUrl": "http://adssets.com/policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 179,
            "name": "Collective Europe Ltd.",
            "policyUrl": "https://www.timeincuk.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 31,
            "name": "Ogury Ltd.",
            "policyUrl": "https://www.ogury.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 92,
            "name": "1plusX AG",
            "policyUrl": "https://www.1plusx.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 155,
            "name": "AntVoice",
            "policyUrl": "https://www.antvoice.com/en/privacypolicy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 115,
            "name": "smartclip Holding AG",
            "policyUrl": "http://privacy-portal.smartclip.net/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 126,
            "name": "DoubleVerify Inc.\u200b",
            "policyUrl": "https://www.doubleverify.com/privacy/",
            "purposeIds": [
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 193,
            "name": "Mediasmart Mobile S.L.",
            "policyUrl": "http://mediasmart.io/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 245,
            "name": "IgnitionOne",
            "policyUrl": "https://www.ignitionone.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 213,
            "name": "emetriq GmbH",
            "policyUrl": "https://www.emetriq.com/datenschutz/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 244,
            "name": "Leadplace - Temelio",
            "policyUrl": "https://temelio.com/vie-privee",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 224,
            "name": "adrule mobile GmbH",
            "policyUrl": "https://www.adrule.net/de/datenschutz/",
            "purposeIds": [
                2,
                4
            ],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 174,
            "name": "A Million Ads Limited",
            "policyUrl": "https://www.amillionads.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 192,
            "name": "remerge GmbH",
            "policyUrl": "https://remerge.io/privacy-policy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 232,
            "name": "Rockerbox, Inc",
            "policyUrl": "http://rockerbox.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 256,
            "name": "Bounce Exchange, Inc",
            "policyUrl": "https://www.bouncex.com/privacy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 234,
            "name": "ZBO Media",
            "policyUrl": "https://zbo.media/mentions-legales/politique-de-confidentialite-service-publicitaire/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 246,
            "name": "Smartology Limited",
            "policyUrl": "https://www.smartology.net/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 241,
            "name": "OneTag Ltd",
            "policyUrl": "https://www.onetag.net/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 254,
            "name": "LiquidM Technology GmbH",
            "policyUrl": "https://liquidm.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 215,
            "name": "ARMIS SAS",
            "policyUrl": "https://armis.tech/en/armis-personal-data-privacy-policy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 167,
            "name": "Audiens S.r.l.",
            "policyUrl": "http://www.audiens.com/privacy",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 240,
            "name": "7Hops.com Inc. (ZergNet)",
            "policyUrl": "https://zergnet.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 235,
            "name": "Bucksense Inc",
            "policyUrl": "http://www.bucksense.com/platform-privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 185,
            "name": "Bidtellect, Inc",
            "policyUrl": "https://www.bidtellect.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 258,
            "name": "Adello Group AG",
            "policyUrl": "https://www.adello.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 169,
            "name": "RTK.IO, Inc",
            "policyUrl": "http://www.rtk.io/privacy.html",
            "purposeIds": [
                1,
                4
            ],
            "legIntPurposeIds": [
                2,
                3,
                5
            ],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 208,
            "name": "Spotad",
            "policyUrl": "http://www.spotad.co/privacy-policy/",
            "purposeIds": [
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 211,
            "name": "AdTheorent, Inc",
            "policyUrl": "http://adtheorent.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 229,
            "name": "Digitize New Media Ltd",
            "policyUrl": "http://www.digitize.ie/online-privacy",
            "purposeIds": [
                2,
                4
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 273,
            "name": "Bannerflow AB",
            "policyUrl": "https://www.bannerflow.com/privacy ",
            "purposeIds": [],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 104,
            "name": "Sonobi, Inc",
            "policyUrl": "http://sonobi.com/privacy-policy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 162,
            "name": "Unruly Group Ltd",
            "policyUrl": "https://unruly.co/privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 249,
            "name": "Spolecznosci Sp. z o.o. Sp. k.",
            "policyUrl": "https://www.spolecznosci.pl/polityka-prywatnosci",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 125,
            "name": "Research Now Group, Inc",
            "policyUrl": "https://www.valuedopinions.co.uk/privacy",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 170,
            "name": "Goodway Group, Inc.",
            "policyUrl": "https://goodwaygroup.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 160,
            "name": "Netsprint SA",
            "policyUrl": "http://spoldzielnia.nsaudience.pl/opt-out/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 189,
            "name": "Intowow Innovation Ltd.",
            "policyUrl": "http://www.intowow.com/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 279,
            "name": "Mirando GmbH &amp; Co KG",
            "policyUrl": "https://wwwmirando.de/datenschutz/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 269,
            "name": "Sanoma Media Finland",
            "policyUrl": "https://sanoma.fi/tietoa-meista/tietosuoja/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 276,
            "name": "Viralize SRL",
            "policyUrl": "https://viralize.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 87,
            "name": "Genius Sports Media Limited",
            "policyUrl": "http://www.geniussports.com/privacy-policy/",
            "purposeIds": [
                2,
                4
            ],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 182,
            "name": "Collective, Inc. dba Visto",
            "policyUrl": "https://www.vistohub.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 255,
            "name": "Onnetwork Sp. z o.o.",
            "policyUrl": "https://www.onnetwork.tv/pp_services.php",
            "purposeIds": [
                2,
                3,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 203,
            "name": "Revcontent, LLC",
            "policyUrl": "https://faq.revcontent.com/customer/en/portal/articles/2703838-revcontent-s-privacy-and-cookie-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 260,
            "name": "RockYou, Inc.",
            "policyUrl": "https://rockyou.com/privacy-policy/",
            "purposeIds": [
                3
            ],
            "legIntPurposeIds": [
                1,
                2,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 237,
            "name": "LKQD, a division of Nexstar Digital, LLC.",
            "policyUrl": "http://www.lkqd.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 274,
            "name": "Golden Bees",
            "policyUrl": "http://goldenbees.fr/notre-politique-de-confidentialite/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 280,
            "name": "Spot.IM Ltd.",
            "policyUrl": "http://spot.im/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 239,
            "name": "Triton Digital Canada Inc.",
            "policyUrl": "https://www.tritondigital.com/privacy-policies",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 177,
            "name": "plista GmbH",
            "policyUrl": "https://www.plista.com/about/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 201,
            "name": "TimeOne",
            "policyUrl": "https://privacy.timeonegroup.com/en/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 150,
            "name": "Inskin Media LTD",
            "policyUrl": "http://www.inskinmedia.com/privacy-policy.html",
            "purposeIds": [
                2,
                3,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 252,
            "name": "Jaduda GmbH",
            "policyUrl": "https://www.jadudamobile.com/datenschutzerklaerung/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 248,
            "name": "Converge-Digital",
            "policyUrl": "https://converge-digital.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 161,
            "name": "Smadex SL",
            "policyUrl": "http://smadex.com/end-user-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 285,
            "name": "Comcast International France SAS",
            "policyUrl": "http://freewheel.tv/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 228,
            "name": "McCann Discipline LTD",
            "policyUrl": "https://www.primis.tech/wp-content/uploads/2019/03/Primis-Privacy-Policy-GDPR.pdf\r\n",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 299,
            "name": "AdClear GmbH",
            "policyUrl": "https://www.adclear.de/datenschutzerklaerung/",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [
                2,
                3,
                4
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 277,
            "name": "Codewise Sp. z o.o. Sp. k",
            "policyUrl": "https://voluumdsp.com/end-user-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 259,
            "name": "ADYOULIKE SA",
            "policyUrl": "https://www.adyoulike.com/privacy_policy.php",
            "purposeIds": [
                2,
                4
            ],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 289,
            "name": "mobalo GmbH",
            "policyUrl": "https://www.mobalo.com/datenschutz/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 272,
            "name": "A.Mob",
            "policyUrl": "https://www.we-are-adot.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 230,
            "name": "Steel House, Inc.",
            "policyUrl": "https://steelhouse.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 253,
            "name": "Improve Digital International BV",
            "policyUrl": "https://www.improvedigital.com/platform-privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 304,
            "name": "On Device Research Limited",
            "policyUrl": "https://s.on-device.com/privacyPolicy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 314,
            "name": "Keymantics",
            "policyUrl": "https://www.keymantics.com/assets/privacy-policy.pdf",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 257,
            "name": "R-TARGET",
            "policyUrl": "http://www.r-target.com/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 317,
            "name": "mainADV Srl",
            "policyUrl": "http://www.mainad.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 278,
            "name": "Integral Ad Science, Inc.",
            "policyUrl": "https://integralads.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 291,
            "name": "Qwertize",
            "policyUrl": "https://www.qwertize.com/en/privacy",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 295,
            "name": "Sojern, Inc.",
            "policyUrl": "https://www.sojern.com/privacy/product-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 315,
            "name": "Celtra, Inc.",
            "policyUrl": "https://www.celtra.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 165,
            "name": "SpotX",
            "policyUrl": "https://www.spotx.tv/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 47,
            "name": "ADMAN - Phaistos Networks, S.A.",
            "policyUrl": "http://www.adman.gr/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 134,
            "name": "SMARTSTREAM.TV GmbH",
            "policyUrl": "https://www.smartstream.tv/en/privacy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 325,
            "name": "Knorex Pte Ltd",
            "policyUrl": "https://www.knorex.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 316,
            "name": "Gamned",
            "policyUrl": "https://www.gamned.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 318,
            "name": "Accorp Sp. z o.o.",
            "policyUrl": "http://www.instytut-pollster.pl/privacy-policy/",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 199,
            "name": "ADUX",
            "policyUrl": "http://www.adux.com/donnees-personelles/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 236,
            "name": "PowerLinks Media Limited",
            "policyUrl": "https://www.powerlinks.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                5
            ],
            "legIntPurposeIds": [
                3,
                4
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 294,
            "name": "Jivox Corporation",
            "policyUrl": "https://www.jivox.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 143,
            "name": "Connatix Native Exchange Inc.",
            "policyUrl": "https://connatix.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 297,
            "name": "Polar Mobile Group Inc.",
            "policyUrl": "https://privacy.polar.me",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 319,
            "name": "Clipcentric, Inc.",
            "policyUrl": "https://clipcentric.com/privacy.bhtml",
            "purposeIds": [
                1,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 290,
            "name": "Readpeak Oy",
            "policyUrl": "http://readpeak.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 323,
            "name": "Perform Media Services Ltd",
            "policyUrl": "http://www.performgroup.com/media-privacy-notice",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 119,
            "name": "S4M",
            "policyUrl": "http://www.s4m.io/privacy-policy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3
            ],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 302,
            "name": "Mobile Professionals BV",
            "policyUrl": "https://mobpro.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 212,
            "name": "usemax advertisement (Emego GmbH)",
            "policyUrl": "http://www.usemax.de/?l=privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 264,
            "name": "Adobe Advertising Cloud",
            "policyUrl": "https://www.adobe.com/nz/privacy/marketing-cloud.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 44,
            "name": "The ADEX GmbH",
            "policyUrl": "https://www.theadex.com/privacy-opt-out/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 282,
            "name": "Welect GmbH",
            "policyUrl": "https://www.welect.de/datenschutz",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 238,
            "name": "StackAdapt",
            "policyUrl": "https://www.stackadapt.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 284,
            "name": "WEBORAMA",
            "policyUrl": "https://weborama.com/privacy_en/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 148,
            "name": "Liveintent Inc.",
            "policyUrl": "https://liveintent.com/services-privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 64,
            "name": "DigiTrust / IAB Tech Lab",
            "policyUrl": "http://www.digitru.st/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 301,
            "name": "zeotap GmbH",
            "policyUrl": "https://www.zeotap.com/privacy_policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 275,
            "name": "TabMo SAS",
            "policyUrl": "http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 310,
            "name": "Schibsted Classified Media Spain, S.L.",
            "policyUrl": "https://www.vibbo.com/privacidad.htm?ca=0_s",
            "purposeIds": [],
            "legIntPurposeIds": [
                4
            ],
            "featureIds": []
        },
        {
            "id": 139,
            "name": "Permodo GmbH",
            "policyUrl": "https://permodo.com/de/privacy.html",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 326,
            "name": "AdTiming Technology Company Limited",
            "policyUrl": "http://www.adtiming.com/en/privacypolicy.html",
            "purposeIds": [
                3,
                5
            ],
            "legIntPurposeIds": [
                1,
                2,
                4
            ],
            "featureIds": []
        },
        {
            "id": 262,
            "name": "Fyber ",
            "policyUrl": "https://www.fyber.com/legal/privacy-policy/",
            "purposeIds": [
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 331,
            "name": "ad6media",
            "policyUrl": "https://www.ad6media.fr/privacy",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 345,
            "name": "The Kantar Group Limited",
            "policyUrl": "http://www.kantar.com/cookies-policies",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 308,
            "name": "Rockabox Media Ltd",
            "policyUrl": "http://scoota.com/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3
            ],
            "featureIds": []
        },
        {
            "id": 270,
            "name": "Marfeel Solutions S.L",
            "policyUrl": "https://www.marfeel.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 333,
            "name": "InMobi Pte Ltd",
            "policyUrl": "https://www.inmobi.com/privacy-policy-for-eea",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 202,
            "name": "Telaria, Inc",
            "policyUrl": "https://telaria.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 328,
            "name": "Gemius SA",
            "policyUrl": "https://www.gemius.com/cookie-policy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 281,
            "name": "Wizaly",
            "policyUrl": "https://www.wizaly.com/terms-of-use#privacy-policy",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 354,
            "name": "Apester Ltd",
            "policyUrl": "https://apester.com/privacy-policy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 320,
            "name": "Adelphic LLC",
            "policyUrl": "https://adelphic.com/platform/privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 359,
            "name": "Aerserv LLC",
            "policyUrl": "https://www.aerserv.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 265,
            "name": "Instinctive, Inc.",
            "policyUrl": "https://instinctive.io/privacy",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 349,
            "name": "Optomaton UG",
            "policyUrl": "http://optomaton.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 288,
            "name": "Video Media Groep B.V.",
            "policyUrl": "http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 266,
            "name": "Digilant Spain, SLU",
            "policyUrl": "https://www.digilant.com/es/politica-privacidad/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 339,
            "name": "Vuble",
            "policyUrl": "https://www.vuble.tv/us/privacy",
            "purposeIds": [
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 303,
            "name": "Orion Semantics",
            "policyUrl": "http://static.orion-semantics.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 261,
            "name": "Signal Digital Inc.",
            "policyUrl": "https://www.signal.co/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 83,
            "name": "Visarity Technologies GmbH",
            "policyUrl": "http://primo.design/docs/PrivacyPolicyPrimo.html",
            "purposeIds": [
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 343,
            "name": "DIGITEKA Technologies",
            "policyUrl": "https://www.ultimedia.com/POLICY.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 330,
            "name": "Linicom",
            "policyUrl": "https://www.linicom.com/privacy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 231,
            "name": "Acuityads Inc.",
            "policyUrl": "https://www.acuityads.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 216,
            "name": "Mindlytix SAS",
            "policyUrl": "http://mindlytix.com/privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 360,
            "name": "Permutive Technologies, Inc.",
            "policyUrl": "https://permutive.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 361,
            "name": "Permutive Ltd.",
            "policyUrl": "https://permutive.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 311,
            "name": "Mobfox US LLC",
            "policyUrl": "https://www.mobfox.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 358,
            "name": "MGID Inc.",
            "policyUrl": "https://www.mgid.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 152,
            "name": "Meetrics GmbH",
            "policyUrl": "https://www.meetrics.com/en/data-privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 251,
            "name": "Yieldlove GmbH",
            "policyUrl": "http://www.yieldlove.com/cookie-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 371,
            "name": "Seeding Alliance GmbH",
            "policyUrl": "http://seeding-alliance.de/datenschutz",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 344,
            "name": "My6sense Inc.",
            "policyUrl": "https://my6sense.com/privacy-policy/",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [
                2,
                4
            ],
            "featureIds": []
        },
        {
            "id": 347,
            "name": "Ezoic Inc.",
            "policyUrl": "https://www.ezoic.com/terms/",
            "purposeIds": [
                2,
                4,
                5
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 218,
            "name": "Bigabid Media Ltd",
            "policyUrl": "http://www.bigabid.com/data-protection/gdpr",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 350,
            "name": "Free Stream Media Corp. dba Samba TV",
            "policyUrl": "https://samba.tv/legal/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 351,
            "name": "Samba TV UK Limited",
            "policyUrl": "https://samba.tv/legal/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 341,
            "name": "Somo Audience Corp",
            "policyUrl": "https://somoaudience.com/legal/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 380,
            "name": "Vidoomy Media SL",
            "policyUrl": "http://vidoomy.com/privacy-policy.html",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 378,
            "name": "communicationAds GmbH &amp; Co. KG",
            "policyUrl": "https://www.communicationads.net/aboutus/privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 369,
            "name": "Getintent USA, inc.",
            "policyUrl": "https://getintent.com/privacy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 184,
            "name": "mediarithmics SAS",
            "policyUrl": "https://www.mediarithmics.com/en-us/content/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 368,
            "name": "VECTAURY",
            "policyUrl": "https://www.vectaury.io/en/personal-data",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 373,
            "name": "Nielsen Marketing Cloud",
            "policyUrl": "http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 214,
            "name": "Digital Control GmbH &amp; Co. KG",
            "policyUrl": "http://advolution.de/privacy.php",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 388,
            "name": "numberly",
            "policyUrl": "http://ads.1000mercis.com/fr.html",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 250,
            "name": "Qriously",
            "policyUrl": "https://www.qriously.com/privacy",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 223,
            "name": "Audience Trading Platform Ltd.",
            "policyUrl": "https://atp.io/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 384,
            "name": "Pixalate, Inc.",
            "policyUrl": "http://pixalate.com/privacypolicy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 387,
            "name": "Triapodi Ltd.",
            "policyUrl": "https://appreciate.mobi/page.html#/end-user-privacy-policy",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 312,
            "name": "Exactag GmbH",
            "policyUrl": "https://www.exactag.com/en/data-privacy/",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 178,
            "name": "Affectv Ltd",
            "policyUrl": "https://affectv.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 377,
            "name": "AddApptr GmbH",
            "policyUrl": "https://www.addapptr.com/data-privacy",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 382,
            "name": "The Reach Group GmbH",
            "policyUrl": "https://www.reachgroup.com/en/privacy-statement/",
            "purposeIds": [
                1,
                2,
                4,
                5
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 206,
            "name": "Hybrid Adtech GmbH",
            "policyUrl": "https://hybrid.ai/data_protection_policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 403,
            "name": "Mobusi Mobile Advertising S.L.",
            "policyUrl": "https://www.mobusi.com/privacy.en.html",
            "purposeIds": [
                1,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 385,
            "name": "Oracle",
            "policyUrl": "https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 404,
            "name": "Duplo Media AS",
            "policyUrl": "https://www.easy-ads.com/privacypolicy.htm",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 242,
            "name": "twiago GmbH",
            "policyUrl": "https://www.twiago.com/datenschutz/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 376,
            "name": "Pocketmath Pte Ltd",
            "policyUrl": "https://www.pocketmath.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 402,
            "name": "Effiliation",
            "policyUrl": "https://inter.effiliation.com/politique-confidentialite.html",
            "purposeIds": [
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 413,
            "name": "Eulerian Technologies",
            "policyUrl": "https://www.eulerian.com/en/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 400,
            "name": "Whenever Media Ltd",
            "policyUrl": "https://www.whenevermedia.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 171,
            "name": "Webedia",
            "policyUrl": "http://www.webedia-group.com/site/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 398,
            "name": "Yormedia Solutions Ltd",
            "policyUrl": "http://www.yormedia.com/privacy-and-cookies-notice/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 415,
            "name": "Seenthis AB",
            "policyUrl": "https://seenthis.co/privacy-notice-2018-04-18.pdf",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 263,
            "name": "Nativo, Inc.",
            "policyUrl": "https://www.nativo.com/interest-based-ads",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 329,
            "name": "Browsi Mobile Ltd",
            "policyUrl": "http://gobrowsi.com/browsi-privacy-policy/",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 389,
            "name": "Bidmanagement GmbH",
            "policyUrl": "https://www.adspert.net/en/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 337,
            "name": "SheMedia, LLC",
            "policyUrl": "http://corporate.shemedia.com/faq/ad-services-privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 422,
            "name": "Brand Metrics Sweden AB",
            "policyUrl": "https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 421,
            "name": "LeftsnRight, Inc. dba LIQWID",
            "policyUrl": "https://liqwid.solutions/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 426,
            "name": "TradeTracker",
            "policyUrl": "https://tradetracker.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 394,
            "name": "AudienceProject Aps",
            "policyUrl": "https://privacy.audienceproject.com",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 287,
            "name": "Avazu Inc.",
            "policyUrl": "http://avazuinc.com/opt-out/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                4
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 243,
            "name": "Cloud Technologies S.A.",
            "policyUrl": "http://onaudience.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 338,
            "name": "dunnhumby Germany GmbH",
            "policyUrl": "https://www.sociomantic.com/privacy/en/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 405,
            "name": "IgnitionAi Ltd",
            "policyUrl": "https://www.isitelab.io/default.aspx",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 416,
            "name": "Commanders Act",
            "policyUrl": "https://www.commandersact.com/en/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 434,
            "name": "DynAdmic",
            "policyUrl": "http://eu.dynadmic.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [
                2,
                4
            ],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 435,
            "name": "SINGLESPOT SAS ",
            "policyUrl": "https://www.singlespot.com/privacy_policy?locale=fr",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 409,
            "name": "Arrivalist Co.",
            "policyUrl": "https://www.arrivalist.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 321,
            "name": "Ziff Davis LLC",
            "policyUrl": "http://www.ziffdavis.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 436,
            "name": "INVIBES GROUP",
            "policyUrl": "http://www.invibes.com/terms",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 442,
            "name": "R-Advertising",
            "policyUrl": "http://www.tradedoubler.com/en/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 362,
            "name": "Myntelligence Limited",
            "policyUrl": "http://www.myntelligence.com/privacy-page/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 418,
            "name": "PROXISTORE",
            "policyUrl": "https://www.proxistore.com/common/en/cgv",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 449,
            "name": "Mobile Journey B.V.",
            "policyUrl": "https://mobilejourney.com/Privacy-Policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 443,
            "name": "Tradedoubler AB",
            "policyUrl": "https://www.tradedoubler.com/en/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 429,
            "name": "Signals",
            "policyUrl": "https://signalsdata.com/platform-cookie-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 335,
            "name": "Beachfront Media LLC",
            "policyUrl": "http://beachfront.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 407,
            "name": "Publishers Internationale Pty Ltd",
            "policyUrl": "https://www.pi-rate.com.au/privacy.html",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 427,
            "name": "Proxi.cloud Sp. z o.o.",
            "policyUrl": "https://proxi.cloud/info/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 374,
            "name": "Bmind a Sales Maker Company, S.L.",
            "policyUrl": "http://www.bmind.es/legal-notice/",
            "purposeIds": [
                1,
                2,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 438,
            "name": "Ooyala Inc",
            "policyUrl": "https://ooyala.com/privacy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 450,
            "name": "Neodata Group srl",
            "policyUrl": "https://www.neodatagroup.com/en/security-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 452,
            "name": "Innovid Inc.",
            "policyUrl": "http://www.innovid.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 444,
            "name": "Playbuzz Ltd. ",
            "policyUrl": "https://www.playbuzz.com/PrivacyPolicy",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 412,
            "name": "Cxense ASA",
            "policyUrl": "https://www.cxense.com/about-us/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 454,
            "name": "Adimo",
            "policyUrl": "https://adimo.co/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 455,
            "name": "GDMServices, Inc. d/b/a FiksuDSP",
            "policyUrl": "https://fiksu.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 298,
            "name": "Cuebiq Inc.",
            "policyUrl": "https://www.cuebiq.com/privacypolicy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 423,
            "name": "travel audience GmbH",
            "policyUrl": "https://travelaudience.com/product-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 397,
            "name": "Demandbase, Inc. ",
            "policyUrl": "https://www.demandbase.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 381,
            "name": "Solocal",
            "policyUrl": "https://client.adhslx.com/privacy.html ",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 425,
            "name": "ADRINO Sp. z o.o.",
            "policyUrl": "http://www.adrino.pl/ciasteczkowa-polityka/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 365,
            "name": "Forensiq LLC",
            "policyUrl": "https://impact.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 447,
            "name": "Adludio Ltd",
            "policyUrl": "https://adludio.com/privacypolicy",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 410,
            "name": "Adtelligent Inc.",
            "policyUrl": "https://adtelligent.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 137,
            "name": "mbr targeting GmbH",
            "policyUrl": "https://privacy.mbr-targeting.com/?optedIn=true",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3
            ],
            "featureIds": []
        },
        {
            "id": 395,
            "name": "PREX Programmatic Exchange GmbH&amp;Co KG",
            "policyUrl": "http://www.programmatic-exchange.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 462,
            "name": "bidstack ltd",
            "policyUrl": "https://bidstack.com/policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 466,
            "name": "TACTIC\u2122 Real-Time Marketing AS",
            "policyUrl": "https://tacticrealtime.com/privacy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 340,
            "name": "Yieldr UK",
            "policyUrl": "https://www.yieldr.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 431,
            "name": "White Ops, Inc.",
            "policyUrl": "https://www.whiteops.com/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 336,
            "name": "Telecoming S.A.",
            "policyUrl": "http://www.telecoming.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 430,
            "name": "Ad Unity Ltd",
            "policyUrl": "http://www.adunity.com/privacy-policy.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 346,
            "name": "Cybba, Inc.",
            "policyUrl": "http://cybba.com/about/legal/data-processing-agreement/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 469,
            "name": "Zeta Global",
            "policyUrl": "https://zetaglobal.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 440,
            "name": "DEFINE MEDIA GMBH",
            "policyUrl": "http://www.definemedia.de/datenschutz-conative/",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 375,
            "name": "RevX Inc.",
            "policyUrl": "https://www.revx.io/privacy-policy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 196,
            "name": "AdElement Media Solutions Pvt Ltd",
            "policyUrl": "http://adelement.com/privacy-policy.html",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 268,
            "name": "Social Tokens Ltd. ",
            "policyUrl": "http://woobi.com/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 475,
            "name": "TAPTAP Networks SL",
            "policyUrl": "http://www.taptapnetworks.com/privacy_policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 474,
            "name": "hbfsTech",
            "policyUrl": "http://www.hbfstech.com/fr/privacy.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2
            ],
            "featureIds": []
        },
        {
            "id": 448,
            "name": "TARGETSPOT BELGIUM SPRL",
            "policyUrl": "http://marketing.targetspot.com/Targetspot/Legal/TargetSpot%20Privacy%20Policy%20-%20June%202018.pdf",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 428,
            "name": "Internet BillBoard a.s.",
            "policyUrl": "http://www.ibillboard.com/en/privacy-information/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 461,
            "name": "B2B Media Group EMEA GmbH",
            "policyUrl": "https://www.selfcampaign.com/static/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 476,
            "name": "HIRO Media Ltd",
            "policyUrl": "http://hiro-media.com/privacy.php",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 480,
            "name": "pilotx.tv",
            "policyUrl": "https://pilotx.tv/privacy/",
            "purposeIds": [
                2,
                3
            ],
            "legIntPurposeIds": [
                1,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 366,
            "name": "CerebroAd.com s.r.o.",
            "policyUrl": "https://www.cerebroad.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 392,
            "name": "Str\u00f6er Mobile Performance GmbH",
            "policyUrl": "https://stroeermobileperformance.com/?dl=privacy",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 221,
            "name": "LEMO MEDIA GROUP LIMITED",
            "policyUrl": "http://www.lemomedia.com/terms.pdf",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 357,
            "name": "Totaljobs Group Ltd ",
            "policyUrl": "https://www.totaljobs.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 486,
            "name": "Madington",
            "policyUrl": "https://delivered-by-madington.com/dat-privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 468,
            "name": "Neustar, Inc.",
            "policyUrl": "https://www.home.neustar/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 458,
            "name": "AdColony, Inc.",
            "policyUrl": "http://www.adcolony.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 478,
            "name": "RevLifter Ltd",
            "policyUrl": "https://www.revlifter.com/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2
            ],
            "featureIds": []
        },
        {
            "id": 489,
            "name": "YellowHammer Media Group",
            "policyUrl": "http://www.yhmg.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 484,
            "name": "Adledge",
            "policyUrl": "https://adledge.com/data-privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 493,
            "name": "Clicksco Digital Limited",
            "policyUrl": "https://carbondmp.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 495,
            "name": "Arcspire Limited",
            "policyUrl": "https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 496,
            "name": "Automattic Inc.",
            "policyUrl": "https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 424,
            "name": "KUPONA GmbH",
            "policyUrl": "https://www.kupona.de/dsgvo/",
            "purposeIds": [],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 408,
            "name": "FM Labs LLC",
            "policyUrl": "https://fidelity-media.com/privacy-policy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 473,
            "name": "Sub2 Technologies Ltd",
            "policyUrl": "http://www.sub2tech.com/privacy-policy/",
            "purposeIds": [
                3,
                4,
                5
            ],
            "legIntPurposeIds": [
                1,
                2
            ],
            "featureIds": []
        },
        {
            "id": 467,
            "name": "Haensel AMS GmbH",
            "policyUrl": "https://haensel-ams.com/data-privacy/",
            "purposeIds": [
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 488,
            "name": "Opinary GmbH",
            "policyUrl": "https://opinary.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 490,
            "name": "PLAYGROUND XYZ EMEA LTD",
            "policyUrl": "https://playground.xyz/privacy/privacy-policy.pdf",
            "purposeIds": [
                1,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 464,
            "name": "Oracle AddThis",
            "policyUrl": "http://www.addthis.com/privacy/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 491,
            "name": "Triboo Data Analytics",
            "policyUrl": "https://www.shinystat.com/it/informativa_sito.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 499,
            "name": "PurposeLab, LLC",
            "policyUrl": "https://purposelab.com/privacy/",
            "purposeIds": [
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 500,
            "name": "Turbo",
            "policyUrl": "http://www.turboadv.com/white-rabbit-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 502,
            "name": "NEXD",
            "policyUrl": "https://nexd.com/privacy-policy",
            "purposeIds": [
                3,
                5
            ],
            "legIntPurposeIds": [
                1,
                2,
                4
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 465,
            "name": "Schibsted Product and Tech UK",
            "policyUrl": "https://www.schibsted.com/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1
            ]
        },
        {
            "id": 497,
            "name": "Little Big Data sp.z.o.o.",
            "policyUrl": "http://dtxngr.com/legal/",
            "purposeIds": [
                1,
                2,
                4
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 492,
            "name": "LotaData, Inc.",
            "policyUrl": "https://lotadata.com/privacy_policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 508,
            "name": "Lucid Holdings, LLC",
            "policyUrl": "https://luc.id/gdpr",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 512,
            "name": "PubNative GmbH",
            "policyUrl": "https://pubnative.net/privacy-notice/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 471,
            "name": "FlexOffers.com, LLC",
            "policyUrl": "https://www.flexoffers.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 494,
            "name": "Cablato Limited",
            "policyUrl": "https://cablato.com/privacy",
            "purposeIds": [
                1,
                2,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 516,
            "name": "Pexi B.V.",
            "policyUrl": "https://pexi.nl/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 507,
            "name": "AdsWizz Inc.",
            "policyUrl": "https://www.adswizz.com/our-privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 482,
            "name": "UberMedia, Inc.",
            "policyUrl": "http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 505,
            "name": "Shopalyst Inc",
            "policyUrl": "https://www.shortlyst.com/eu/privacy_terms.html",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 517,
            "name": "SunMedia ",
            "policyUrl": "https://www.sunmedia.tv/en/cookies",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 518,
            "name": "Accelerize Inc.",
            "policyUrl": "https://getcake.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 511,
            "name": "Admixer EU GmbH",
            "policyUrl": "https://admixer.net/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 479,
            "name": "INFINIA MOBILE S.L.",
            "policyUrl": "http://www.infiniamobile.com/privacy_policy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 513,
            "name": "Shopstyle",
            "policyUrl": "https://www.shopstyle.co.uk/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 509,
            "name": "ATG Ad Tech Group GmbH",
            "policyUrl": "http://advandeo.com/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 521,
            "name": "netzeffekt GmbH",
            "policyUrl": "https://www.netzeffekt.de/en/imprint",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 487,
            "name": "nugg.ad GmbH",
            "policyUrl": "https://www.nugg.ad/en/privacy/general-information.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                5
            ],
            "featureIds": [
                1
            ]
        },
        {
            "id": 515,
            "name": "ZighZag",
            "policyUrl": "https://zighzag.com/privacy",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 520,
            "name": "ChannelSight ",
            "policyUrl": "https://www.channelsight.com/privacypolicy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 524,
            "name": "The Ozone Project Limited",
            "policyUrl": "https://ozoneproject.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 529,
            "name": "Fidzup",
            "policyUrl": "https://www.fidzup.com/en/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 528,
            "name": "AppLift GmbH ",
            "policyUrl": "https://www.applift.com/privacy-notice",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 527,
            "name": "Jampp LTD",
            "policyUrl": "https://jampp.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 506,
            "name": "salesforce.com, inc.",
            "policyUrl": "https://www.salesforce.com/company/privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 534,
            "name": "SmartyAds Inc.",
            "policyUrl": "https://smartyads.com/privacy-policy",
            "purposeIds": [
                1,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 535,
            "name": "INNITY",
            "policyUrl": "https://www.innity.com/privacy-policy.php",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 514,
            "name": "Uprival LLC",
            "policyUrl": "https://uprival.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 522,
            "name": "Tealium Inc",
            "policyUrl": "https://tealium.com/privacy/",
            "purposeIds": [
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 530,
            "name": "Near Pte Ltd",
            "policyUrl": "https://near.co/privacy",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 539,
            "name": "AdDefend GmbH",
            "policyUrl": "https://www.addefend.com/en/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 501,
            "name": "Alliance Gravity Data Media",
            "policyUrl": "https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 519,
            "name": "Chargeads",
            "policyUrl": "https://www.chargeplatform.com/privacy",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 523,
            "name": "X-Mode Social, Inc.",
            "policyUrl": "http://xmode.io/privacy-policy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 537,
            "name": "RUN, Inc.",
            "policyUrl": "http://www.runads.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 531,
            "name": "Smartclip Hispania SL",
            "policyUrl": "http://rgpd-smartclip.com/",
            "purposeIds": [
                1,
                2,
                3,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 536,
            "name": "GlobalWebIndex",
            "policyUrl": "http://legal.trendstream.net/non-panellist_privacy_policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 542,
            "name": "Densou Trading Desk ApS",
            "policyUrl": "https://densou.dk/Policy.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 525,
            "name": "PUB OCEAN LIMITED",
            "policyUrl": "https://rta.pubocean.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 544,
            "name": "Kochava Inc.",
            "policyUrl": "https://www.kochava.com/support-privacy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 543,
            "name": "PaperG, Inc. dba Thunder Industries",
            "policyUrl": "https://www.makethunder.com/privacy",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 334,
            "name": "Cydersoft",
            "policyUrl": "http://www.videmob.com/privacy.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 551,
            "name": "Illuma Technology Limited",
            "policyUrl": "https://www.weareilluma.com/endddd",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 540,
            "name": "Tunnl BV",
            "policyUrl": "https://tunnl.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 547,
            "name": "Video Reach",
            "policyUrl": "https://www.videoreach.de/about/privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 546,
            "name": "Smart Traffik",
            "policyUrl": "https://smart-traffik.io/politique-de-confidentialite",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 541,
            "name": "DeepIntent, Inc.",
            "policyUrl": "https://www.deepintent.com/platform-privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 545,
            "name": "ReigNN Platform Ltd.",
            "policyUrl": "https://www.reignn.com/user-privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 439,
            "name": "Bit Q Holdings Limited",
            "policyUrl": "https://bitqueen.com/privacy",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 553,
            "name": "Adhese",
            "policyUrl": "https://adhese.com/privacy-and-cookie-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 556,
            "name": "adhood.com",
            "policyUrl": "http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang=en",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 550,
            "name": "Happydemics",
            "policyUrl": "https://www.iubenda.com/privacy-policy/69056167/full-legal",
            "purposeIds": [
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 560,
            "name": "Leiki Ltd.",
            "policyUrl": "http://www.leiki.com/privacy",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [
                4
            ],
            "featureIds": []
        },
        {
            "id": 554,
            "name": "RMSi Radio Marketing Service interactive GmbH",
            "policyUrl": "https://www.rms.de/datenschutz/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 498,
            "name": "Dr. Banner",
            "policyUrl": "https://drbanner.com/privacypolicy_en/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 565,
            "name": "Adobe Audience Manager",
            "policyUrl": "https://www.adobe.com/privacy/policy.html",
            "purposeIds": [
                1,
                2,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 118,
            "name": "Drawbridge, Inc.",
            "policyUrl": "http://www.drawbridge.com/privacy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 572,
            "name": "CHEQ AI TECHNOLOGIES LTD.",
            "policyUrl": "http://www.cheq.ai/privacy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": []
        },
        {
            "id": 571,
            "name": "ViewPay",
            "policyUrl": "http://viewpay.tv/mentions-legales/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 568,
            "name": "Jointag S.r.l.",
            "policyUrl": "https://www.jointag.com/privacy/kariboo/publisher/third/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 570,
            "name": "Czech Publisher Exchange z.s.p.o.",
            "policyUrl": "https://www.cpex.cz/pro-uzivatele/ochrana-soukromi/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 559,
            "name": "Otto (GmbH &amp; Co KG)",
            "policyUrl": "https://www.otto.de/shoppages/service/datenschutz",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                2
            ]
        },
        {
            "id": 548,
            "name": "LBC France",
            "policyUrl": "https://www.leboncoin.fr/dc/cookies",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 569,
            "name": "Kairos Fire",
            "policyUrl": "https://www.kairosfire.com/wp-content/uploads/2019/02/Kairos-Fire_Politique-de-confidentialite%CC%81_jan19.pdf",
            "purposeIds": [
                1,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 577,
            "name": "Neustar on behalf of The Procter & Gamble Company",
            "policyUrl": "https://www.pg.com/privacy/english/privacy_statement.shtml",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 590,
            "name": "Sourcepoint Technologies, Inc.",
            "policyUrl": "https://www.sourcepoint.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 587,
            "name": "Localsensor B.V.",
            "policyUrl": "https://www.localsensor.com/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                3
            ]
        },
        {
            "id": 578,
            "name": "MAIRDUMONT NETLETIX GmbH&amp;Co. KG",
            "policyUrl": "https://mairdumont-netletix.com/datenschutz",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 580,
            "name": "Goldbach Group AG",
            "policyUrl": "https://goldbach.com/ch/de/datenschutz",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 593,
            "name": "Programatica de publicidad S.L.",
            "policyUrl": "https://datmean.com/politica-privacidad/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 574,
            "name": "Realeyes O\u00dc",
            "policyUrl": "https://www.realeyesit.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 581,
            "name": "Mobilewalla, Inc.",
            "policyUrl": "https://www.mobilewalla.com/business-services-privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 598,
            "name": "audio content &amp; control GmbH",
            "policyUrl": "https://www.audio-cc.com/audiocc_privacy_policy.pdf",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 596,
            "name": "InsurAds Technologies SA.",
            "policyUrl": "https://www.insurads.com/privacy.html",
            "purposeIds": [
                3
            ],
            "legIntPurposeIds": [
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 576,
            "name": "StartApp Inc.",
            "policyUrl": "https://www.startapp.com/policy/privacy-policy/",
            "purposeIds": [
                2
            ],
            "legIntPurposeIds": [
                1,
                3,
                4,
                5
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 592,
            "name": "Colpirio.com",
            "policyUrl": "https://privacy-policy.colpirio.com/en/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 549,
            "name": "Bandsintown Amplified LLC",
            "policyUrl": "http://corp.bandsintown.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 597,
            "name": "Better Banners A/S",
            "policyUrl": "https://betterbanners.com/en/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                3,
                5
            ],
            "featureIds": []
        },
        {
            "id": 584,
            "name": "Dynamic 1001 GmbH",
            "policyUrl": "https://dynamic-tracking.com/Datenschutz.aspx",
            "purposeIds": [
                3
            ],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 601,
            "name": "WebAds B.V",
            "policyUrl": "http://privacy.webads.eu/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 599,
            "name": "Maximus Live LLC",
            "policyUrl": "https://maximusx.com/privacy-policy/",
            "purposeIds": [],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 604,
            "name": "Join",
            "policyUrl": "https://www.teamjoin.fr/privacy.html",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 606,
            "name": "Impactify ",
            "policyUrl": "https://impactify.io/privacy-policy/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 608,
            "name": "News and Media Holding, a.s.",
            "policyUrl": "https://www.newsandmedia.sk/gdpr/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 602,
            "name": "Online Solution Int Limited",
            "policyUrl": "https://adsafety.net/privacy.html/",
            "purposeIds": [
                1,
                2
            ],
            "legIntPurposeIds": [
                3,
                4,
                5
            ],
            "featureIds": []
        },
        {
            "id": 612,
            "name": "Adnami Aps",
            "policyUrl": "https://www.adnami.io/adnami_privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                3
            ],
            "featureIds": []
        },
        {
            "id": 591,
            "name": "Consumable, Inc.",
            "policyUrl": "http://consumable.com/privacy-policy.html",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 614,
            "name": "Market Resource Partners LLC",
            "policyUrl": "https://www.mrpfd.com/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 615,
            "name": "Adsolutions BV",
            "policyUrl": "https://www.adsolutions.com/privacy-policy/",
            "purposeIds": [
                1,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 607,
            "name": "ucfunnel Co., Ltd.",
            "policyUrl": "https://www.ucfunnel.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 609,
            "name": "Predicio",
            "policyUrl": "http://www.predic.io/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 617,
            "name": "Onfocus (Adagio)",
            "policyUrl": "https://adagio.io/privacy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": []
        },
        {
            "id": 620,
            "name": "Blue",
            "policyUrl": "http://www.getblue.io/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 610,
            "name": "Azerion Holding B.V.",
            "policyUrl": "https://azerion.com/business/privacy.html",
            "purposeIds": [],
            "legIntPurposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 621,
            "name": "Seznam.cz, a.s.",
            "policyUrl": "https://www.seznam.cz/ochranaudaju",
            "purposeIds": [
                2,
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                5
            ],
            "featureIds": []
        },
        {
            "id": 624,
            "name": "Norstat Danmark A/S",
            "policyUrl": "https://panel.norstat.dk/sikkerhed",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 623,
            "name": "Adprime Media Inc. ",
            "policyUrl": "http://adprimehealth.com/privacy/",
            "purposeIds": [
                1,
                2,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 95,
            "name": "Lotame Solutions, Inc.",
            "policyUrl": "https://www.lotame.com/about-lotame/privacy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 618,
            "name": "BEINTOO SPA",
            "policyUrl": "http://www.beintoo.com/privacy-cookie-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 619,
            "name": "Capitaldata",
            "policyUrl": "https://www.capitaldata.fr/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 625,
            "name": "BILENDI SA",
            "policyUrl": "https://www.maximiles.com/privacy-policy",
            "purposeIds": [
                1,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2
            ]
        },
        {
            "id": 628,
            "name": ": Tappx",
            "policyUrl": "https://www.tappx.com/en/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [
                2,
                3
            ],
            "featureIds": [
                2,
                3
            ]
        },
        {
            "id": 630,
            "name": "Contact Impact GmbH",
            "policyUrl": "https://contactimpact.de/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                3
            ]
        },
        {
            "id": 626,
            "name": "Hivestack Inc.",
            "policyUrl": "https://hivestack.com/privacy-policy",
            "purposeIds": [],
            "legIntPurposeIds": [
                1
            ],
            "featureIds": [
                3
            ]
        },
        {
            "id": 631,
            "name": "Relay42 Netherlands B.V.",
            "policyUrl": "https://relay42.com/privacy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2,
                3
            ]
        },
        {
            "id": 627,
            "name": "D-Edge",
            "policyUrl": "https://www.d-edge.com/privacy-policy/",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 638,
            "name": "Passendo ApS",
            "policyUrl": "https://www.passendo.com/users-privacy-policy/",
            "purposeIds": [
                1,
                3
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 644,
            "name": "Gamoshi LTD",
            "policyUrl": "https://www.gamoshi.com/privacy-policy",
            "purposeIds": [
                1
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 634,
            "name": "Samba TV",
            "policyUrl": "https://samba.tv/legal/privacy-policy/",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                1,
                2
            ]
        },
        {
            "id": 639,
            "name": "Smile Wanted Group",
            "policyUrl": "https://www.smilewanted.com/privacy.php",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 635,
            "name": "WebMediaRM",
            "policyUrl": "http://www.webmediarm.com/vie_privee_et_opposition_en.php",
            "purposeIds": [
                3,
                4
            ],
            "legIntPurposeIds": [
                1,
                2,
                5
            ],
            "featureIds": []
        },
        {
            "id": 579,
            "name": "Ve Global",
            "policyUrl": "https://www.ve.com/privacy-policy",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": []
        },
        {
            "id": 645,
            "name": "Noster Finance S.L.",
            "policyUrl": "https://www.finect.com/terminos-legales/politica-de-cookies",
            "purposeIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "legIntPurposeIds": [],
            "featureIds": [
                2,
                3
            ]
        }
    ]
};