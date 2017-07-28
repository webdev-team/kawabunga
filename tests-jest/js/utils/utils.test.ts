// ..
// Imports
//

import * as env from '../../test-env';

import * as utils from '../../../assets/js/utils/utils.js';

// ..
// Unit Tests
//

describe('utils.js', () => {

    describe('hyphenToCamel', () => {
        it('should hyphen string to camel case', () => {
            expect(utils.hyphenToCamel('my-hyphen-string')).toBe('myHyphenString');
        });
    });

    describe('hyphenate', () => {
        it('should camel case to hyphen string', () => {
            expect(utils.hyphenate('myCamelCase')).toBe('my-camel-case');
        });
    });

    describe('isArray', () => {
        it('should parameter is array', () => {
            expect(utils.isArray(['red', 'blue', 'green'])).toBe(true);
        });

        it('should parameter is not array', () => {
            expect(utils.isArray('String')).toBe(false);
        });
    });
});