var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');
var testUtils = require('../test-utils');

var dom = require('../../../assets/js/utils/dom');

describe('dom.js', () => {
    describe('select', () => {
        it('should find matched nodes by class', () => {
            env.initWithHtml('<div class="a"></div><div class="b"></div>')

            expect(dom.select('.a')).to.have.length(1)
        })

        it('should find matched nodes by id', () => {
            env.initWithHtml('<div id="a"></div><div id="b"></div>')

            expect(dom.select('#a')).to.have.length(1)
        })

        describe('sub select', () => {
            it('should find matched nodes', () => {
                env.initWithHtml('<div class="a"><div class="b"></div></div>')

                expect(dom.select('.a').select('.b')).to.have.length(1)
            })

            it('should be callable recursively', () => {
                env.initWithHtml('<div class="a"><div class="b"><div class="c"></div></div></div>')

                expect(dom.select('.a').select('.b').select('.c')).to.have.length(1)
            })
        })
    })

    describe('module.exports', () => {
        it('should make find function available at root', () => {
            env.initWithHtml('<div class="a"></div><div class="b"></div>')

            expect(dom('.a')).to.have.length(1)
        })
    })

    describe('selectByClass', () => {
        it('should find matched nodes by class', () => {
            env.initWithHtml('<div class="a"></div><div class="b"></div>')

            expect(dom.selectByClass('a')).to.have.length(1)
        })

        it('should be callable recursively', () => {
            env.initWithHtml('<div class="a"><div class="b"><div class="c"></div></div></div>')

            expect(dom.selectByClass('a').selectByClass('b').selectByClass('c')).to.have.length(1)
        })
    })

    describe('empty', () => {
        it('should be true if array is empty', () => {
            env.initWithHtml('<div class="a"></div>')

            expect(dom.select('.b').isEmpty()).to.be.true
        })

        it('should be false if array is not empty', () => {
            env.initWithHtml('<div class="a"></div>')

            expect(dom.select('.a').isEmpty()).to.be.false
        })
    })

    describe('data', () => {
        it('should give data attribute value of first found element', () => {
            env.initWithHtml('<div class="a" data-test="value"></div>')

            expect(dom.select('.a').data('test')).to.equal('value')
        })
    })

    describe('on', () => {
        it('should listen to click event', (done) => {
            env.initWithHtml('<div id="a"></div>')

            dom.select('#a').on('click', e => done())

            testUtils.click(document.getElementById('a'))
        })
    })
});