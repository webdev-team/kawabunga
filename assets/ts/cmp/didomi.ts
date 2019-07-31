import * as env from '../env/env';
import * as scriptLoader from '../../js/utils/script-loader.js';

declare global {
    interface Window {
        gdprAppliesGlobally: any;
        didomiConfig: any;
    }
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

export let init = function()  {

    window.gdprAppliesGlobally = true;
    // @ts-ignore
    (function(){function n(){if(!window.frames.__cmpLocator){if(document.body&&document.body.firstChild){var e=document.body;var t=document.createElement("iframe");t.style.display="none";t.name="__cmpLocator";e.insertBefore(t,e.firstChild)}else{setTimeout(n,5)}}}function e(e,t,n){if(typeof n!=="function"){return}if(!window.__cmpBuffer){window.__cmpBuffer=[]}if(e==="ping"){n({gdprAppliesGlobally:window.gdprAppliesGlobally,cmpLoaded:false},true)}else{window.__cmpBuffer.push({command:e,parameter:t,callback:n})}}e.stub=true;function t(a){if(!window.__cmp||window.__cmp.stub!==true){return}if(!a.data){return}var r=typeof a.data==="string";var e;try{e=r?JSON.parse(a.data):a.data}catch(t){return}if(e.__cmpCall){var i=e.__cmpCall;window.__cmp(i.command,i.parameter,function(e,t){var n={__cmpReturn:{returnValue:e,success:t,callId:i.callId}};a.source.postMessage(r?JSON.stringify(n):n,"*")})}}if(typeof window.__cmp!=="function"){window.__cmp=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}n()})();

    let themeColor = getThemeColor();

    window.didomiConfig = {
        app: {
            apiKey: '<Your API key>',
            vendors: {
                iab: {
                    all: true
                }
            }
        },
        preferences: {
            enableAllButtons: true,
        },
        notice: {
            position: 'top'
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
        }
    };

    scriptLoader.ensureLoaded('https://sdk.privacy-center.org/loader.js', console.log('didomi loader.js loaded'));
};

init();

// <script type="text/javascript" id="spcloader" src="" async></script>
