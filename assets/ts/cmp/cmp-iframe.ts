/**
 * See http://prebid.org/dev-docs/modules/consentManagement.html on iframe and message usage
 */
import {__cmp} from './cmp-framework';

interface CmpCall {
    command: string;
    parameter: any;
    callId: any;
}

interface CmpReturn {
    returnValue: any;
    success: boolean;
    callId: any;
}

export function init() {
    window.addEventListener('message', onWindowMessage, false);

    ensureFrame();
}

export function ensureFrame() {
    if (document.getElementsByName('__cmpLocator').length > 0) {
        return;
    }

    let iframe = document.createElement('iframe');
    iframe.name = '__cmpLocator';
    iframe.width = '0';
    iframe.height = '0';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
}

export function onWindowMessage(event) {
    let json = event.data;

    let messageIsString = typeof json === "string";

    try {
        if (messageIsString) {
            json = JSON.parse(json);
        }

        let call = json.__cmpCall as CmpCall;

        if (call) {
            __cmp(call.command, call.parameter, function (result, success) {
                let returnMsg = {
                    __cmpReturn: {
                        returnValue: result, success: success, callId: call.callId
                    } as CmpReturn
                };

                event.source.postMessage(messageIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
            });
        }
    } catch (e) {
        // event.data was not well formatted or not targeted to us
    }
}