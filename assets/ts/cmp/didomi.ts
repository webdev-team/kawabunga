import * as env from "../env/env";
import * as $ from '../../../assets/js/utils/dom';
import * as scriptLoader from '../../js/utils/script-loader.js';
import * as cookies from 'js-cookie';
import {didomiConfig, DidomiOptions, DEFAULT_OPTIONS} from "./didomi-config";
import {didomiCustomCss} from "./didomi-css";
import {cnilLogService} from "../cnil/cnil-log-service";
import {CnilLog} from "../cnil/cnil-log";

declare global {
    interface Window {
        gdprAppliesGlobally: any;
        didomiConfig: any;
        didomiOnReady: any;
        didomiEventListeners: Array<any>;
        Didomi: any;
    }
}

export enum Purpose {
    ANALYTICS = 'audience_measurement',
    ADS = 'targeted_advertising',
    SOCIAL = 'social_network',
    PERSONNALISATION = 'personnalisation'
}

let RTLPurposeIds = {
    ANALYTICS: 'mesurerl-TH6fifgP',
    ADS: 'publicite-qfTFazXj',
    SOCIAL: 'reseauxso-e7EUAMeD',
    PERSONNALISATION: 'personnali-jCkrDhEj',
};

let FunRadioPurposeIds = {
    ANALYTICS: 'mesurerl-TH6fifgP',
    ADS: 'publicite-qfTFazXj',
    SOCIAL: 'reseauxso-e7EUAMeD',
    PERSONNALISATION: 'personnali-jCkrDhEj',
};

export namespace CmpDidomi {

    export let init = function(options: DidomiOptions): void {
        window.gdprAppliesGlobally = true;

        if (env.isFlag('tcfv2')) {
            console.log("tcfv2");

            options.apiKey = options.apiKey || DEFAULT_OPTIONS.apiKey;

            // @ts-ignore
            (function(){function a(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)} else{setTimeout(function(){a(e)},5)}}}function e(n,r,o,c,s){function e(e,t,n,a){if(typeof n!=="function"){return}if(!window[r]){window[r]=[]}var i=false;if(s){i=s(e,t,n)}if(!i){window[r].push({command:e,parameter:t,callback:n,version:a})}}e.stub=true;function t(a){if(!window[n]||window[n].stub!==true){return}if(!a.data){return} var i=typeof a.data==="string";var e;try{e=i?JSON.parse(a.data):a.data}catch(t){return}if(e[o]){var r=e[o];window[n](r.command,r.parameter,function(e,t){var n={};n[c]={returnValue:e,success:t,callId:r.callId};a.source.postMessage(i?JSON.stringify(n):n,"*")},r.version)}} if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");a("__tcfapiLocator");})();

            // @ts-ignore
            (function(e){ var t=document.createElement("script");t.id="spcloader";t.type="text/javascript";t.async=true;t.src="https://sdk.privacy-center.org/"+e+"/loader.js?target="+document.location.hostname;t.charset="utf-8";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})(options.apiKey);

            attach('didomiOnReady', (Didomi) => {
                console.log("didomiOnReady : trackConsent + logConsent");

                trackConsent();
                logConsent();
            });
        } else {
            // @ts-ignore
            (function(){function n(){if(!window.frames.__cmpLocator){if(document.body&&document.body.firstChild){var e=document.body;var t=document.createElement("iframe");t.style.display="none";t.name="__cmpLocator";e.insertBefore(t,e.firstChild)}else{setTimeout(n,5)}}}function e(e,t,n){if(typeof n!=="function"){return}if(!window.__cmpBuffer){window.__cmpBuffer=[]}if(e==="ping"){n({gdprAppliesGlobally:window.gdprAppliesGlobally,cmpLoaded:false},true)}else{window.__cmpBuffer.push({command:e,parameter:t,callback:n})}}e.stub=true;function t(a){if(!window.__cmp||window.__cmp.stub!==true){return}if(!a.data){return}var r=typeof a.data==="string";var e;try{e=r?JSON.parse(a.data):a.data}catch(t){return}if(e.__cmpCall){var i=e.__cmpCall;window.__cmp(i.command,i.parameter,function(e,t){var n={__cmpReturn:{returnValue:e,success:t,callId:i.callId}};a.source.postMessage(r?JSON.stringify(n):n,"*")})}}if(typeof window.__cmp!=="function"){window.__cmp=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}n()})();

            window.didomiConfig = didomiConfig(options);

            let style = document.createElement('style');
            style.innerHTML = didomiCustomCss(options);
            document.head.appendChild(style);

            scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js').then(() => {
                trackConsent();
                logConsent();
            });
        }
    };

    export let logConsent = () => {
        attach('didomiEventListeners', {
            event: 'consent.changed',
            listener: () => {
                let id = cookies.get('didomi_token');
                if (id) {
                    cnilLogService.save(new CnilLog(id, 'popup', {
                        ads: isConsentedPurpose(Purpose.ADS),
                        analytics: isConsentedPurpose(Purpose.ANALYTICS),
                        social: isConsentedPurpose(Purpose.SOCIAL)
                    }));
                }
            }
        });
    };

    export let trackConsent = () => {
        let isEitherRtlOrFun = ['RTL', 'FUN_RADIO'].indexOf(env.getRenaissanceDomain()) > -1;

        if (!isEitherRtlOrFun) {
            return;
        }

        attach('didomiOnReady', (Didomi) => {
            if (Didomi.notice.isVisible()) {
                let img = document.createElement('img');
                img.src = 'https://www.dahta.fr/c/cs';
                document.getElementsByTagName('body')[0].appendChild(img);
            }
        });

        attach('didomiEventListeners', {
            event: 'consent.changed',
            listener: () => {
                let statusForAll = window.Didomi.getUserConsentStatusForAll();
                let status = '';
                if (statusForAll.purposes.enabled.length > 0 && statusForAll.purposes.disabled.length === 0)
                    status = 'ca';
                else if (statusForAll.purposes.enabled.length === 0 && statusForAll.purposes.disabled.length > 0)
                    status = 'cr';
                else if (statusForAll.purposes.enabled.length > 0 && statusForAll.purposes.disabled.length > 0)
                    status = 'cp';

                let img = document.createElement('img');
                img.src = 'https://www.dahta.fr/c/' + status;
                document.getElementsByTagName('body')[0].appendChild(img);
            }
        });
    };

    export let isConsentedPurpose = function(purpose: Purpose): boolean {
        let purposeId = toPurposeId(purpose);

        return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purposeId) || false;
    };

    export let attach = function(eventType, action) {
        window[eventType] = window[eventType] || [];
        window[eventType].push(action);
    };

    export let enablePurpose = function(purpose: Purpose): void {
        let purposeId = toPurposeId(purpose);

        const transaction = window.Didomi.openTransaction();
        transaction.enablePurpose(purposeId);
        transaction.commit();
    };

    export let doOnDidomiConsent = (purpose: Purpose, fnDo, fnElseDo): void => {
        attach('didomiOnReady', () => {
            if (isConsentedPurpose(purpose)) {
                fnDo();
            } else {
                fnElseDo();

                attach('didomiEventListeners', {
                    event: 'consent.changed',
                    listener: () => {
                        if (isConsentedPurpose(purpose)) {
                            displayDidomiBanners(purpose, false);
                            fnDo();
                        }
                    }
                });
            }
        });
    };

    export let displayDidomiBanners = (purpose: Purpose, display: boolean) => {
        let $banners = $(document.body).select(`[data-role=cnil-banner][data-purpose=${purpose}]`);
        if ($banners.length) {
            $banners.forEach(banner => $(banner).css('display', display ? 'block': 'none'));
        }
    };

    let toPurposeId = (purpose: Purpose): String => {
        if (env.isFlag('tcfv2')) {
            let ids = env.getDomain() == 'funradio.fr' ? FunRadioPurposeIds : RTLPurposeIds;

            return ids[purpose];
        } else {
            return purpose;
        }
    }
}
