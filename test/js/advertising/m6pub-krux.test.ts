import {testEnv} from '../test-env';

import * as m6pubKrux from '../../../assets/js/advertising/m6pub-krux';
import * as scriptLoader from '../../../assets/js/utils/script-loader';

let loadedScripts = [];
let ensureLoadedMock = jest.spyOn(scriptLoader, 'ensureLoaded').mockImplementation((src: String) => {
    loadedScripts.push(src);

    return Promise.resolve();
});

describe('m6pub-krux', () => {
    beforeEach(() => {
        testEnv.setHTML('');

        window.Krux = null;
        loadedScripts = [];
    });

    afterEach(() => {
        ensureLoadedMock.mockClear();
    });

    test('should define Krux', () => {
        m6pubKrux.init();

        expect(window.Krux).toBeTruthy();
        expect(window.Krux.q).toMatchObject([]);

        window.Krux('test');

        expect(window.Krux.q[0][0]).toBe('test');
    });

    test('should load script', () => {
        m6pubKrux.init();

        let expectedSrc = m6pubKrux.getScriptUrl();

        expect(loadedScripts[0]).toBe(expectedSrc);
    });

    test('should load script given as url parameter', () => {
        window.location.href = 'http://localhost/index.html?kxsrc=toto';

        m6pubKrux.init();
    });
});
