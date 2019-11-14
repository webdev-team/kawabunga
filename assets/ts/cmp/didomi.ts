import * as $ from '../../../assets/js/utils/dom';
import * as scriptLoader from '../../js/utils/script-loader.js';
import {didomiConfig, DidomiOptions} from "./didomi-config";
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
    SOCIAL = 'social_network'
}

export namespace CmpDidomi {

    export let init = function(options: DidomiOptions): void {

        window.gdprAppliesGlobally = true;
        // @ts-ignore
        (function(){function n(){if(!window.frames.__cmpLocator){if(document.body&&document.body.firstChild){var e=document.body;var t=document.createElement("iframe");t.style.display="none";t.name="__cmpLocator";e.insertBefore(t,e.firstChild)}else{setTimeout(n,5)}}}function e(e,t,n){if(typeof n!=="function"){return}if(!window.__cmpBuffer){window.__cmpBuffer=[]}if(e==="ping"){n({gdprAppliesGlobally:window.gdprAppliesGlobally,cmpLoaded:false},true)}else{window.__cmpBuffer.push({command:e,parameter:t,callback:n})}}e.stub=true;function t(a){if(!window.__cmp||window.__cmp.stub!==true){return}if(!a.data){return}var r=typeof a.data==="string";var e;try{e=r?JSON.parse(a.data):a.data}catch(t){return}if(e.__cmpCall){var i=e.__cmpCall;window.__cmp(i.command,i.parameter,function(e,t){var n={__cmpReturn:{returnValue:e,success:t,callId:i.callId}};a.source.postMessage(r?JSON.stringify(n):n,"*")})}}if(typeof window.__cmp!=="function"){window.__cmp=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}n()})();

        window.didomiConfig = didomiConfig(options);

        let style = document.createElement('style');
        style.innerHTML = didomiCustomCss(options);
        document.head.appendChild(style);

        scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js', () => {
            attach('didomiEventListeners', {
                event: 'consent.changed',
                listener: () => {
                    cnilLogService.save(new CnilLog('didomi_token', 'popup', window.Didomi.getUserConsentStatusForAll().purposes));
                }
            });
        });
    };

    export let isConsentedPurpose = function(purpose: Purpose): boolean {
        return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purpose) || false;
    };

    export let attach = function(eventType, action) {
        window[eventType] = window[eventType] || [];
        window[eventType].push(action);
    };

    export let enablePurpose = function(purpose: Purpose): void {
        const transaction = window.Didomi.openTransaction();
        transaction.enablePurpose(purpose);
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
    }
}