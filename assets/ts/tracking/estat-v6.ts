import * as Promise from 'promise';
import * as scriptLoader from '../../js/utils/script-loader';

const SCRIPT = 'https://js.estat.com/js/mu-6.0.js';

declare global {
    interface Window {
        eStatTag(config: any): void;
    }
}

export let ensureLoaded = function () {
    return new Promise(function (resolve) {
        scriptLoader.ensureLoaded(SCRIPT).then(function () {
            resolve();
        })
    })
};

/**
 * estat should be loaded before calling this function
 */
export let createEstatTag = function (config) {
    return new window.eStatTag(config);
};