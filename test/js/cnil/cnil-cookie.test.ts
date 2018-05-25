import {CnilCategories, cnilCookie} from "../../../assets/ts/cnil/cnil-cookie";
import {COOKIE_NAME, PLAYER, ANALYTICS} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';

describe('cnil-cookie.ts', () => {
    beforeEach(() => {
        cookies.remove(COOKIE_NAME);
    });

    describe('class CnilCookie', () => {

        test('setCategory()', () => {
            cnilCookie.setCategory(PLAYER, true);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true,"player":true}');

            cookies.remove(COOKIE_NAME);
            cnilCookie.setCategory(ANALYTICS, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true,"player":true}');
            cnilCookie.setCategory(PLAYER, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true,"player":false}');
        });
    });

    test('should write cookie value', () => {
        let cnilCategories: CnilCategories = {ads: true, analytics: true, social: true, player: true};
        cnilCookie.writeValues(cnilCategories);

        expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true,"player":true}');
    });

    test('should read cookie value', () => {
        cookies.set(COOKIE_NAME, '{"ads":true,"analytics":true,"player":false}');

        expect(cnilCookie.readValues()).toEqual({ads: true, analytics: true, player: false});
    });

    test('should return default value if cookie is empty', () => {
        expect(cnilCookie.readValues()).toEqual(null);
    });

    test('should return default value if cookie is invalid', () => {
        cookies.set(COOKIE_NAME, 'dsfdsfdsfds');

        expect(cnilCookie.readValues()).toEqual(null);
    });

    test('should tell if a category is on', () => {
        cookies.set(COOKIE_NAME, '{"ads":true,"analytics":true,"player":false}');

        expect(cnilCookie.isOn('ads')).toEqual(true);
        expect(cnilCookie.isOn('player')).toEqual(false);
    });

    test('should say all categories are off if cookie is invalid', () => {
        cookies.set(COOKIE_NAME, 'fdsfdsfdsfds');

        expect(cnilCookie.isOn('ads')).toEqual(false);
        expect(cnilCookie.isOn('player')).toEqual(false);
        expect(cnilCookie.isOn('not exist')).toEqual(false);
    });
});