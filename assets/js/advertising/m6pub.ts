
import * as $ from '../utils/dom';
import * as scriptLoader from '../utils/script-loader';

export const NETWORK_CODE = 42159803;
export const ADUNIT_CODE = 'RTL/OTHERS';

export const PREBID_SCRIPT = 'http://static-preprod.m6tech.net/radins/prebid-radins.js';
export const PREBID_LOADER_SCRIPT = 'http://static-preprod.m6tech.net/radins/prebid-loader.js';

interface NameValue {
    name: string;
    value: string;
}

declare global {
    interface Window {
        _networkCode: number;
        _adunitCode: string;
        pageCriterias: Array<NameValue>;
        _activeAdslots: Array<string>;

        displayAd(slot: string): void;

        // gravity
        pageDataLayer: any;

        // Krux
        Krux: any;
    }
}

export let init = function() : Promise<void> {
    window._networkCode = window._networkCode || NETWORK_CODE;
    window._adunitCode = window._adunitCode || ADUNIT_CODE;
    window.pageCriterias = window.pageCriterias || [];
    window._activeAdslots = $('div[data-role="m6pub"]').map((div) => div.id);

    return new Promise(resolve => {
        scriptLoader.ensureLoaded(PREBID_SCRIPT).then(() => {
            initGravity();

            initKrux();

            window._activeAdslots.forEach(slot => {
                window.displayAd(slot);
            });

            scriptLoader.ensureLoaded(PREBID_LOADER_SCRIPT).then(() => {
                resolve();
            });
        })
    });
};

let initGravity = function() {
    window.pageDataLayer = {
        gravitySiteToken: "radins-17",
        cat: "",
        subCat: "",
        template: "news-hp",
        keywords: []
    }
};

let initKrux = function() {
    if (window.Krux) {
        window.pageCriterias.push({name:"ksg", value: window.Krux.segments});
    }

    if (typeof window.Krux === 'undefined') {
        window.pageCriterias.push({name:"kuid", value: 'undefined'});
    } else if (window.Krux.user.length == 0) {
        window.pageCriterias.push({name:"kuid", value: 'empty'});
    } else {
        window.pageCriterias.push({name:"kuid", value: window.Krux.user});
    }
};