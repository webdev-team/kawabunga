var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

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

            it('should be callable recursivly', () => {
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
})