import {testEnv} from '../test-env';

import * as m6pub from '../../../assets/js/advertising/m6pub';
import * as scriptLoader from '../../../assets/js/utils/script-loader';

let loadedScripts = [];
let ensureLoadedMock = jest.spyOn(scriptLoader, 'ensureLoaded').mockImplementation((src: String) => {
    loadedScripts.push(src);

    return Promise.resolve();
});

let displayedAds = [];
window.displayAd = function (slot: string) {
    displayedAds.push(slot);
};

describe('m6pub', () => {
    beforeEach(() => {
        loadedScripts = [];
        displayedAds = [];

        testEnv.setHTML('');

        window._networkCode = null;
        window._adunitCode = null;
        window.pageCriterias = null;
    });

    afterEach(() => {
        ensureLoadedMock.mockClear();
    });

    test('should set global variables', () => {
        return m6pub.init().then(() => {
            expect(window._networkCode).toEqual(m6pub.NETWORK_CODE);
            expect(window._adunitCode).toEqual(m6pub.ADUNIT_CODE);
            expect(window.pageCriterias).toEqual([]);
            expect(window._activeAdslots).toEqual([]);
        });
    });

    test('should read global variables', () => {
        window._networkCode = 123;
        window._adunitCode = 'test/123';

        return m6pub.init().then(() => {
            expect(window._networkCode).toEqual(123);
            expect(window._adunitCode).toEqual('test/123');
            expect(window.pageCriterias).toEqual([]);
            expect(window._activeAdslots).toEqual([]);
        });
    });

    test('should find data-role=m6ad to global _activeAdslots variable', () => {
        testEnv.setHTML('<div id="slot1" data-role="m6pub"></div><div id="slot2" data-role="m6pub"></div>');

        return m6pub.init().then(() => {
            expect(window._activeAdslots).toEqual(['slot1', 'slot2']);
        });
    });

    test('should load prebid loader script after prebid script', () => {
        return m6pub.init().then(() => {
            expect(loadedScripts).toEqual([m6pub.PREBID_SCRIPT, m6pub.PREBID_LOADER_SCRIPT]);
        });
    });

    test('should call displayAd for each slot', () => {
        testEnv.setHTML('<div id="slot1" data-role="m6pub" ></div><div id="slot2" data-role="m6pub"></div>');

        return m6pub.init().then(() => {
            expect(displayedAds).toEqual(['slot1', 'slot2']);
        });
    });
});
