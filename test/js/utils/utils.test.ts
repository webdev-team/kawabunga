// ..
// Imports
//

import * as utils from '../../../assets/js/utils/utils.js';

// ..
// Unit Tests
//

describe('utils.js', () => {

    describe('hyphenToCamel', () => {
        test('should hyphen string to camel case', () => {
            expect(utils.hyphenToCamel('my-hyphen-string')).toBe('myHyphenString');
        });
    });

    describe('hyphenate', () => {
        test('should camel case to hyphen string', () => {
            expect(utils.hyphenate('myCamelCase')).toBe('my-camel-case');
        });
    });

    describe('isArray', () => {
        test('should parameter is array', () => {
            expect(utils.isArray(['red', 'blue', 'green'])).toBe(true);
        });

        test('should parameter is not array', () => {
            expect(utils.isArray('String')).toBe(false);
        });
    });
});