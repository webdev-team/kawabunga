import * as env from '../env/env';
import * as scriptLoader from '../../js/utils/script-loader.js';
import {didomiConfig, DidomiOptions} from "./didomi-config";

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
    COOKIE = "cookies",
    AD_PERSONALIZATION = "advertising_personalization",
    CONTENT_PERSONALIZATION = "content_personalization",
    ANALYTICS = "analytics",
    AD_DELIVERY = "ad_delivery"
}

export let init = function(options: DidomiOptions): void {

    window.gdprAppliesGlobally = true;
    // @ts-ignore
    (function(){function n(){if(!window.frames.__cmpLocator){if(document.body&&document.body.firstChild){var e=document.body;var t=document.createElement("iframe");t.style.display="none";t.name="__cmpLocator";e.insertBefore(t,e.firstChild)}else{setTimeout(n,5)}}}function e(e,t,n){if(typeof n!=="function"){return}if(!window.__cmpBuffer){window.__cmpBuffer=[]}if(e==="ping"){n({gdprAppliesGlobally:window.gdprAppliesGlobally,cmpLoaded:false},true)}else{window.__cmpBuffer.push({command:e,parameter:t,callback:n})}}e.stub=true;function t(a){if(!window.__cmp||window.__cmp.stub!==true){return}if(!a.data){return}var r=typeof a.data==="string";var e;try{e=r?JSON.parse(a.data):a.data}catch(t){return}if(e.__cmpCall){var i=e.__cmpCall;window.__cmp(i.command,i.parameter,function(e,t){var n={__cmpReturn:{returnValue:e,success:t,callId:i.callId}};a.source.postMessage(r?JSON.stringify(n):n,"*")})}}if(typeof window.__cmp!=="function"){window.__cmp=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}n()})();

    window.didomiConfig = didomiConfig(options);

    scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js');
};

export let isConsentedPurpose = function(purpose: Purpose): boolean {
    return window.Didomi.isConsentRequired() && window.Didomi.getUserConsentStatusForPurpose(purpose) || false;
};

export let attach = function(eventType, action) {
    window[eventType] = window[eventType] || [];
    window[eventType].push(action);
};

export let isCookiesAllowed = function() {
    return isConsentedPurpose(Purpose.COOKIE);
};

export let isAdPersonalizationAllowed = function() {
    return isConsentedPurpose(Purpose.AD_PERSONALIZATION);
};

export let isContentPersonalizationAllowed = function() {
    return isConsentedPurpose(Purpose.CONTENT_PERSONALIZATION);
};

export let isAnalyticsAllowed = function() {
    return isConsentedPurpose(Purpose.ANALYTICS);
};

export let isAdDeliveryAllowed = function() {
    return isConsentedPurpose(Purpose.AD_DELIVERY);
};
