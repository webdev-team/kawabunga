"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See http://prebid.org/dev-docs/modules/consentManagement.html on iframe and message usage
 */
var cmp_framework_1 = require("./cmp-framework");
function init() {
    window.addEventListener('message', onWindowMessage, false);
    ensureFrame();
}
exports.init = init;
function ensureFrame() {
    if (document.getElementsByName('__cmpLocator').length > 0) {
        return;
    }
    var iframe = document.createElement('iframe');
    iframe.name = '__cmpLocator';
    iframe.width = '0';
    iframe.height = '0';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
}
exports.ensureFrame = ensureFrame;
function onWindowMessage(event) {
    var json = event.data;
    var messageIsString = typeof json === "string";
    try {
        if (messageIsString) {
            json = JSON.parse(json);
        }
        var call_1 = json.__cmpCall;
        if (call_1) {
            cmp_framework_1.__cmp(call_1.command, call_1.parameter, function (result, success) {
                var returnMsg = {
                    __cmpReturn: {
                        returnValue: result, success: success, callId: call_1.callId
                    }
                };
                event.source.postMessage(messageIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
            });
        }
    }
    catch (e) {
        // event.data was not well formatted or not targeted to us
    }
}
exports.onWindowMessage = onWindowMessage;
