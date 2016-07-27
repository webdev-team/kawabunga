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

        it('should accept HTMLElement', () => {
            env.initWithHtml('<div id="a" data-test="toto"></div>')
            var id = document.getElementById('a')

            expect(dom.select(id)).to.have.length(1)
            expect(dom.select(id).data('test')).to.equal("toto")
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

    describe('text', () => {
        it('should give data attribute value of first found element', () => {
            env.initWithHtml('<div class="a" data-test="value">some text</div>')

            expect(dom.select('.a').text()).to.equal('some text')
        })
    })

    describe('on', () => {
        it('should listen to click event', (done) => {
            env.initWithHtml('<div id="a"></div>')

            dom.select('#a').on('click', e => done())

            testUtils.click(document.getElementById('a'))
        })

        it('should provide element as second parameter', (done) => {
            env.initWithHtml('<div id="a"></div>')

            dom.select('#a').on('click', (e, div) => {
                expect(div.id).to.equal('a')

                done()
            })

            testUtils.click(document.getElementById('a'))
        })
    })

    describe('css', () => {
        it('should property change', () => {
            env.initWithHtml('<div id="a"></div>')

            dom.select('#a').css('margin-top', 10);
            expect(dom.select('#a').css('margin-top')).to.equal(10);
        })
    })

    describe('classes', () => {
        describe('addClass', () => {
            it('should add class in element', () => {
                env.initWithHtml('<div id="a"></div>')

                dom.select('#a').addClass('test');
                expect(document.getElementById('a').classList.contains('test')).to.be.true;
            })
        })
        describe('removeClass', () => {
            it('should remove class in element', () => {
                env.initWithHtml('<div id="a" class="test"></div>')

                dom.select('#a').removeClass('test');
                expect(document.getElementById('a').classList.contains('test')).to.be.false;
            })
        })
        describe('hasClass', () => {
            it('should element has class', () => {
                env.initWithHtml('<div id="a" class="test"></div>')
                expect(dom.select('#a').hasClass('test')).to.be.true;
            })
        })
    })
})