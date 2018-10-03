import {PingReturn, VendorConsentData} from './iab';
import {euconsent} from './euconsent-cookie';
import {cnil} from './cnil';
import * as env from '../env/env';

export function ping(callback: (pingReturn: PingReturn, success: boolean) => void)  {
    let result = new PingReturn();

    result.cmpLoaded = true;
    result.gpdrAppliesGlobaly = true;

    callback(result, true);
}

export function getConsentData(consentStringVersion: string, callback: (vendorConsentData: VendorConsentData, success: boolean) => void)  {
    let result = new VendorConsentData();

    result.consentData = euconsent.cookie.read().getConsentString();
    result.gpdrApplies = true;
    result.hasGlobalScope = true;

    callback(result, true);
}

if (env.isFlag("cmp")) {
    window.__cmp = function (command, parameter = null, callback = null) {
        switch (command) {
            case 'ping':
                ping(callback);
                break;
            /*
            case 'getVendorConsents':
                cmp.getVendorConsents(parameter, callback);
                break;
            */
            case 'getConsentData':
                getConsentData(parameter, callback);
                break;
            case 'showConsentTool':
                cnil.banner.showMainBanner();
                break;
            default:
                console.error('CMP => Error: unknown command');
        }
    }
}
