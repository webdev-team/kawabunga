import {__cmp, onCnilCategoriesChange} from './cmp-framework';
import * as env from '../env/env';
import {cnil} from '../cnil/cnil';
import {euconsent} from './euconsent-cookie';
import {onWindowMessage} from './cmp-iframe';

declare global {
    interface Window {
        __cmp: (command: string, parameter?: any, callback?: any) => void;
    }
}

if (env.isFlag("cmp")) {
    window.__cmp = __cmp;

    // init euconsent cookie with cnil cookie if euconsent wasn't there
    if (cnil.cookie.hasValidCookie() && !euconsent.cookie.exists()) {
        onCnilCategoriesChange(cnil.cookie.readValues());
    }

    cnil.cookie.onChange(onCnilCategoriesChange);

    window.addEventListener('message', onWindowMessage, false);
}