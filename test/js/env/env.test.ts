
import * as env from '../../../assets/ts/env/env';

describe('env', () => {
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

    describe('getFlags', () => {
        beforeEach(() => {
            delete window['flags'];
        });

        test('should be defaulted to []', () => {
            expect(env.getFlags()).toMatchObject([]);
        });

        test('should read var in window', () => {
            window['flags'] = ["flag1", "flag2"];

            expect(env.getFlags()).toMatchObject(['flag1', 'flag2']);
        });
    });

    describe('isFlag', () => {
        beforeEach(() => {
            delete window['flags'];
        });

        test('should be false if no flags', () => {
            expect(env.isFlag('flag1')).toBe(false);
        });

        test('should read var in global', () => {
            window['flags'] = ["flag1", "flag2"];

            expect(env.isFlag('flag1')).toBe(true);
        });
    });
});

