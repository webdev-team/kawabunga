import {CnilCategories, cnilCookie, COOKIE_ID_NAME} from "../../../assets/ts/cnil/cnil-cookie";
import {COOKIE_NAME, SOCIAL, ANALYTICS} from '../../../assets/ts/cnil/cnil-cookie';
import * as cookies from 'js-cookie';
import * as random from '../../../assets/ts/utils/random';

let uuidSpy = jest.spyOn(random, "uuid");

describe('cnil-cookie', () => {
    beforeEach(() => {
        cookies.remove(COOKIE_NAME);
        cookies.remove(COOKIE_ID_NAME);

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
            cnilCookie.setCategory(SOCIAL, true);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true}');

            cookies.remove(COOKIE_NAME);

            cnilCookie.setCategory(ANALYTICS, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":true}');

            cnilCookie.setCategory(SOCIAL, false);
            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":false,"social":false}');
        });
    });

    describe('writeValues', () => {
        it('should write cookie value', () => {
            let cnilCategories: CnilCategories = {ads: true, analytics: true, social: true};
            cnilCookie.writeValues(cnilCategories);

            expect(cookies.get(COOKIE_NAME)).toBe('{"ads":true,"analytics":true,"social":true}');
        });
    });

    describe('readValues', () => {
        test('should read cookie value', () => {
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":true}');

            expect(cnilCookie.readValues()).toEqual({ads: true, analytics: true});
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
            cookies.set(COOKIE_NAME, '{"ads":true,"analytics":false}');

            expect(cnilCookie.isOn('ads')).toEqual(true);
            expect(cnilCookie.isOn('analytics')).toEqual(false);
        });

        test('should say all categories are off if cookie is invalid', () => {
            cookies.set(COOKIE_NAME, 'fdsfdsfdsfds');

            expect(cnilCookie.isOn('ads')).toEqual(false);
            expect(cnilCookie.isOn('not exist')).toEqual(false);
        });
    });

    describe('onChange', () => {
        it('should call handler on change', (done) => {
            cnilCookie.onChange(categories => {
                expect(categories.value.social).toBeTruthy();
                expect(categories.value.analytics).toBeFalsy();

                done();
            });

            cnilCookie.setCategory(ANALYTICS, false, 'scroll');
        });
    });

    describe('Transition to cmp', () => {

    });
});
