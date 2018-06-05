import {CnilCategories, cnilCookie, COOKIE_ID_NAME} from "../../../assets/ts/cnil/cnil-cookie";
import {COOKIE_NAME, PLAYER, ANALYTICS} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import * as random from '../../../assets/ts/utils/random';
import {cnilLogService} from '../../../assets/ts/cnil/cnil-log-service';
import {CnilLog} from '../../../assets/ts/cnil/cnil-log';

let uuidSpy = jest.spyOn(random, "uuid");

let saveSpy = jest.spyOn(cnilLogService, "save");

describe('cnil-cookie', () => {
    beforeEach(() => {
        cookies.remove(COOKIE_NAME);
        cookies.remove(COOKIE_ID_NAME);

        saveSpy.mockClear();

        window.site = null;
    });

    describe('ensureId', () => {
        test('it should write cookie with generated id', () => {
            uuidSpy.mockReturnValue('123456');

            cnilCookie.ensureId();

            expect(cookies.get(COOKIE_ID_NAME)).toBe('123456');
        });

        test('it should not overwrite existing cookie', () => {
            cookies.set(COOKIE_ID_NAME, 'existing')
            uuidSpy.mockReturnValue('123456');

            cnilCookie.ensureId();

            expect(cookies.get(COOKIE_ID_NAME)).toBe('existing');
        });
    });

    describe('getId', () => {
        test('it should read existing cookie', () => {
            cookies.set(COOKIE_ID_NAME, 'existing')

            expect(cnilCookie.getId()).toBe('existing');
        });

        test('it should ensure cookie is existing', () => {
            uuidSpy.mockReturnValue('123456');

            expect(cnilCookie.getId()).toBe('123456');
        });
    });

    describe('setCategory', () => {
        it('should update category in cookie', () => {
            cnilCookie.setCategory(PLAYER, true);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true,"player":true}');

            cookies.remove(COOKIE_NAME);

            cnilCookie.setCategory(ANALYTICS, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true,"player":true}');

            cnilCookie.setCategory(PLAYER, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true,"player":false}');
        });

        it('should save a log', () => {
            cookies.set(COOKIE_ID_NAME, 'existing');
            window.site = 'www.rtl2.fr';

            cnilCookie.setCategory(ANALYTICS, false, 'scroll');

            expect(saveSpy).toHaveBeenCalledWith(new CnilLog('existing', 'scroll', {ads: true,analytics: false,social: true,player: true}));
        });
    });

    describe('writeValues', () => {
        it('should write cookie value', () => {
            let cnilCategories: CnilCategories = {ads: true, analytics: true, social: true, player: true};
            cnilCookie.writeValues(cnilCategories);

            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true,"player":true}');
        });

        it('should save a log', () => {
            cookies.set(COOKIE_ID_NAME, 'existing');
            window.site = 'www.rtl2.fr';

            let cnilCategories: CnilCategories = {ads: true, analytics: false, social: true, player: false};
            cnilCookie.writeValues(cnilCategories, 'form');

            expect(saveSpy).toHaveBeenCalledWith(new CnilLog('existing', 'form', cnilCategories));
        });
    });

    describe('readValues', () => {
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
    });

    describe('isOn', () => {
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

    describe('onChange', () => {
        it('should call handler on change', (done) => {
            cnilCookie.onChange(categories => {
                expect(categories.social).toBeTruthy();
                expect(categories.analytics).toBeFalsy();

                done();
            });

            cnilCookie.setCategory(ANALYTICS, false, 'scroll');
        });
    });
});