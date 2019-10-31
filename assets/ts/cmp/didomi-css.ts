import {DidomiOptions} from "./didomi-config";

export let didomiCustomCss = (options: DidomiOptions) => {
  return `
    #didomi-host .didomi-popup-backdrop {
        background-color: rgba(42,42,42,0.95)!important;
    }
    
    #didomi-host .didomi-consent-popup__exterior-border {
        padding: 0 !important;
    }
    
    #didomi-host .didomi-popup-title {
        font-size: 30px!important;
        font-family: Montserrat,sans-serif!important;
        font-weight: 600!important;
        line-height: 38px!important;
        display: block!important;
        padding: 0px!important;
        margin-bottom: 15px!important;
        width: 100%!important;
    }
    
    #didomi-host .didomi-popup-title:before {
        display: block;
        margin: 20px auto 30px;
        padding-top: 10.1%;
        content: "";
        background: url(${options.logoUrl}) no-repeat center center;
        background-size: contain;
    }
    
    #didomi-host .didomi-popup-body {
        padding: 0px!important;
        font-size: 14px!important;
    }
    
    #didomi-host .didomi-popup-container {
        border: none!important;
        padding: 0 60px!important;
        display: block!important;
        border-radius: 6px!important;
        width: 540px!important;
        box-sizing: content-box!important;
    }
    
    #didomi-host .didomi-popup-header {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    
    #didomi-host .didomi-popup-footer {
        background: transparent!important;
        display: block!important;
        height: auto!important;
        padding: 14px 0px 10px!important;
    }
    
    #didomi-host .didomi-popup-footer a img {
        display: none;
    }
    
    #didomi-host .didomi-buttons {
        flex-direction: column-reverse !important;
    }
    
    #didomi-host .didomi-consent-popup-information .didomi-button {
        font-family: Montserrat,sans-serif;
        padding: 16px 0px;
        font-size: 14px;
        line-height: 18px;
        display: block;
        margin: 0 auto 20px !important;
        outline: none!important;
        width: 100%;
        max-width: 300px;
        font-weight: bold;
        height: auto;
    }
    
    #didomi-host .didomi-components-button {
        border-radius: 4px !important;
        border-color: #ffffff !important;
        border-width: 0px !important;
        background-color: #ffffff !important;
        color: #414141 !important;
    }
    
    #didomi-host .didomi-button-highlight {
        background-color: ${options.themeColor} !important;
        color: #ffffff !important;
    }
    
    #didomi-host .didomi-consent-popup-information-save {
        margin: 20px 15px;
    }`;
};