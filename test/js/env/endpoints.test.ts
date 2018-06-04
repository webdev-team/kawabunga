
import * as portals from '../../../assets/ts/env/endpoints';

describe('endpoints', () => {
    beforeEach(() => {
        window.site = null;
        window.env = null;
    });

    describe('www', () => {
        it('should have a default value', function () {
            expect(portals.www()).toBe('https://www.rtl.fr');
        });

        it('should read property on window', function () {
            window.site = 'www.funradio.fr';

            expect(portals.www()).toBe('https://www.funradio.fr');
        });

        it('should compute www site based on current site', function () {
            window.site = 'astro.rtl.fr';

            expect(portals.www()).toBe('https://www.rtl.fr');
        });

        it('should compute www site based on current site and env', function () {
            window.site = 'astro.rtl.fr';
            window.env = 'lab';

            expect(portals.www()).toBe('https://www.lab.rtl.fr');
        });

        it('should append path', function () {
            expect(portals.www('/path/to/service')).toBe('https://www.rtl.fr/path/to/service');
        });
    });
});

