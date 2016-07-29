var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');
var testUtils = require('../test-utils');

var utils = require('../../../assets/js/utils/utils');

describe('utils.js', () => {

    describe('hyphenToCamel', () => {
        it('should hyphen string to camel case', () => {
            expect(utils.hyphenToCamel('my-hyphen-string')).to.equal('myHyphenString')
        })
    })

    describe('hyphenate', () => {
        it('should camel case to hyphen string', () => {
            expect(utils.hyphenate('myCamelCase')).to.equal('my-camel-case')
        })
    })

    describe('isArray', () => {
        it('should parameter is array', () => {
            expect(utils.isArray(['red', 'blue', 'green'])).to.be.true
        })

        it('should parameter is not array', () => {
            expect(utils.isArray('String')).to.be.false
        })
    })
})