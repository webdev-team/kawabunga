import {__cmp, onCnilCategoriesChange} from './cmp-framework';
import {cnil} from '../cnil/cnil';
import {euconsent} from './euconsent-cookie';
import * as cmpIframe from './cmp-iframe';

declare global {
    interface Window {
        __cmp: (command: string, parameter?: any, callback?: any) => void;
    }
}

window.__cmp = __cmp;

// init euconsent cookie with cnil cookie if euconsent wasn't there
if (cnil.cookie.hasValidCookie() && !euconsent.cookie.exists()) {
    onCnilCategoriesChange({value: cnil.cookie.readValues(), oldValue: null});
}

cnil.cookie.onChange(onCnilCategoriesChange);

cmpIframe.init();
