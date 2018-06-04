
import * as env from '../../../assets/ts/env/env';

describe('env', () => {
    beforeEach(() => {
        window.flags = null;
        window.site = null;
    });

    describe('getEnv()', () => {
        it('should default to prod', () => {
            expect(env.getEnv()).toBe('prod');
        });

        it('should read global env variable', () => {
            window.env = 'local';

            expect(env.getEnv()).toBe('local');
        });
    });

    describe('isSecured()', () => {
        afterEach(() => {
            Object.defineProperty(window.location, 'protocol', {
                writable: true,
                value: 'http:'
            });
        });

        test('should no be secured in test env', () => {
            expect(env.isSecured()).toBe(false);
        });

        test('should be secured with https url', () => {
            // update protocol
            Object.defineProperty(window.location, 'protocol', {
                writable: true,
                value: 'https:'
            });

            expect(env.isSecured()).toBe(true);
        });
    });

    describe('getCookieDomain', () => {
        test('it should work on root domains', () => {
            expect(env.getCookieDomain('rtl.fr')).toBe('rtl.fr');
            expect(env.getCookieDomain('rtl2.fr')).toBe('rtl2.fr');
        });

        test('it should work on sub domains', () => {
            expect(env.getCookieDomain('www.rtl.fr')).toBe('rtl.fr');
            expect(env.getCookieDomain('astro.rtl.fr')).toBe('rtl.fr');
            expect(env.getCookieDomain('www.rtl2.fr')).toBe('rtl2.fr');
        });

        test('it should default to empty on localhost or 0.0.0.0', () => {
            expect(env.getCookieDomain('localhost')).toBe('');
            expect(env.getCookieDomain('0.0.0.0')).toBe('');
        });
    });

    describe('getSite', () => {
        test('should have a default site', () => {
            expect(env.getSite()).toBe('www.rtl.fr');
        });

        test('should read property on window', () => {
            window.site = 'www.funradio.fr';

            expect(env.getSite()).toBe('www.funradio.fr');
        });
    });

    describe('getDomain', () => {
        it('should have a default value', function () {
            expect(env.getDomain()).toBe('rtl.fr');
        });

        it('should read property on window', function () {
            window.site = 'www.funradio.fr';

            expect(env.getDomain()).toBe('funradio.fr');
        });

        it('should compute www site bases on current site', function () {
            window.site = 'astro.rtl.fr';

            expect(env.getDomain()).toBe('rtl.fr');
        });
    });

    describe('getRenaissanceDomain', () => {
        test('should have a default domain', () => {
            expect(env.getRenaissanceDomain()).toBe('RTL');
        });

        test('should use current site', () => {
            window.site = 'www.funradio.fr';

            expect(env.getRenaissanceDomain()).toBe('FUN_RADIO');
        });
    });

    describe('getFlags', () => {
        test('should be defaulted to []', () => {
            expect(env.getFlags()).toMatchObject([]);
        });

        test('should read var in window', () => {
            window['flags'] = ["flag1", "flag2"];

            expect(env.getFlags()).toMatchObject(['flag1', 'flag2']);
        });
    });

    describe('isFlag', () => {
        test('should be false if no flags', () => {
            expect(env.isFlag('flag1')).toBe(false);
        });

        test('should read var in window', () => {
            window['flags'] = ["flag1", "flag2"];

            expect(env.isFlag('flag1')).toBe(true);
        });
    });
});

