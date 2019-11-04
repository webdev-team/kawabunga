"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.didomiCustomCss = function (options) {
    return "\n    #didomi-host .didomi-popup-backdrop {\n        background-color: rgba(42,42,42,0.95)!important;\n    }\n    \n    #didomi-host .didomi-consent-popup__exterior-border {\n        padding: 0 !important;\n    }\n    \n    #didomi-host .didomi-popup-title {\n        font-size: 30px!important;\n        font-family: Montserrat,sans-serif!important;\n        font-weight: 600!important;\n        line-height: 38px!important;\n        display: block!important;\n        padding: 0px!important;\n        margin-bottom: 15px!important;\n        width: 100%!important;\n    }\n    \n    #didomi-host .didomi-popup-title:before {\n        display: block;\n        margin: 20px auto 30px;\n        padding-top: 10.1%;\n        content: \"\";\n        background: url(" + options.logoUrl + ") no-repeat center center;\n        background-size: contain;\n    }\n    \n    #didomi-host .didomi-popup-body {\n        padding: 0px!important;\n        font-size: 14px!important;\n    }\n    \n    #didomi-host .didomi-popup-container {\n        border: none!important;\n        padding: 0 60px!important;\n        display: block!important;\n        border-radius: 6px!important;\n        width: 540px!important;\n        box-sizing: content-box!important;\n    }\n    \n    #didomi-host .didomi-popup-header {\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n    }\n    \n    #didomi-host .didomi-popup-footer {\n        background: transparent!important;\n        display: block!important;\n        height: auto!important;\n        padding: 14px 0px 10px!important;\n    }\n    \n    #didomi-host .didomi-popup-footer a img {\n        display: none;\n    }\n    \n    #didomi-host .didomi-buttons {\n        flex-direction: column-reverse !important;\n    }\n    \n    #didomi-host .didomi-consent-popup-information .didomi-button {\n        font-family: Montserrat,sans-serif;\n        padding: 16px 0px;\n        font-size: 14px;\n        line-height: 18px;\n        display: block;\n        margin: 0 auto 20px !important;\n        outline: none!important;\n        width: 100%;\n        max-width: 300px;\n        font-weight: bold;\n        height: auto;\n    }\n    \n    #didomi-host .didomi-components-button {\n        border-radius: 4px !important;\n        border-color: #ffffff !important;\n        border-width: 0px !important;\n        background-color: #ffffff !important;\n        color: #414141 !important;\n    }\n    \n    #didomi-host .didomi-button-highlight {\n        background-color: " + options.themeColor + " !important;\n        color: #ffffff !important;\n    }\n    \n    #didomi-host .didomi-consent-popup-information-save {\n        margin: 20px 15px;\n    }";
};