"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See http://prebid.org/dev-docs/modules/consentManagement.html on iframe and message usage
 */
var cmp_framework_1 = require("./cmp-framework");
function ensureFrame() {
    if (document.getElementsByName('__cmpLocator').length > 0) {
        return;
    }
    var body = document.body;
    var iframe = document.createElement('iframe');
    iframe.name = '__cmpLocator';
    iframe.style.display = 'none';
    body.appendChild(iframe);
}
exports.ensureFrame = ensureFrame;
function onWindowMessage(event) {
    var json = event.data;
    var messageIsString = typeof json === "string";
    if (messageIsString) {
        json = JSON.parse(json);
    }
    var call = json.__cmpCall;
    if (call) {
        cmp_framework_1.__cmp(call.command, call.parameter, function (result, success) {
            var returnMsg = {
                __cmpReturn: {
                    returnValue: result, success: success, callId: call.callId
                }
            };
            event.source.postMessage(messageIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
        });
    }
}
exports.onWindowMessage = onWindowMessage;
