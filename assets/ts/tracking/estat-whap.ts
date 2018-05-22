// marqueur whap pour la mesure hybride WEBDEV-3483
import * as scriptloader from '../../js/utils/script-loader';

declare global {
    interface Window {
        _eStat_Whap_loaded_func: any;
        eStatWhap: any;
    }
}

export let init = function() {
    window._eStat_Whap_loaded_func = function () {
        window.eStatWhap.serial('800000000089');
        window.eStatWhap.send();
    }

    scriptloader.ensureLoaded('https://w.estat.com/js/whap.js');
}
