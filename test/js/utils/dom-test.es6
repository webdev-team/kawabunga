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

            it('should be callable recursively 4 levels', () => {
                env.initWithHtml('<div id="a"><div class="b"><div class="c"></div></div><div class="d"><div class="e"></div></div></div>')

                expect(dom.select('#a').select('.e')).to.have.length(1)
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

    describe('parent', () => {
        it('should get parent', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div></div>')

            expect(dom.select('.child').parent().hasClass('parent')).to.be.true
        })

        it('should get parent two', () => {
            env.initWithHtml('<div class="other-parent toto"><div class="parent"><div class="child"></div></div></div>')

            expect(dom.select('.child').parent('.other-parent').hasClass('toto')).to.be.true
        })

        it('should not fail if array is empty', () => {
            env.initWithHtml('<div class="other-parent toto"><div class="parent"><div class="child"></div></div></div>')

            expect(dom.select('.not-here').parent()).to.has.length(0)
        })
    })

    describe('firstChild', () => {
        it('should get first child', () => {
            env.initWithHtml('<div class="parent"><div class="child first"></div><div class="child"></div><div class="child"></div></div>')

            expect(dom.select('.parent').firstChild('child').hasClass('first')).to.be.true
        })
    })

    describe('children', () => {
        it('should get children', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div><div class="child"></div><div class="child"></div></div>')

            expect(dom.select('.parent').children()).to.has.length(3)
        })

        it('should get children with test class', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div><div class="child test"></div><div class="child test"></div></div>')

            expect(dom.select('.parent').children('.test')).to.has.length(2)
        })
    })

    describe('index', () => {
        it('should get indexOf element', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div><div class="child active"></div><div class="child"></div></div>')

            expect(dom.select('.parent .child').index('active')).to.equal(1)
        })
    })

    describe('after, before, prepend, append', () => {
        it('should add after element', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div></div>')

            dom.select('.child').after('<div class="myNewChild"></div>')

            expect(document.body.innerHTML).to.equal('<div class="parent"><div class="child"></div><div class="myNewChild"></div></div>')
        })

        it('should add before element', () => {
            env.initWithHtml('<div class="parent"><div class="child"></div></div>')

            dom.select('.child').before('<div class="myNewChild"></div>')

            expect(document.body.innerHTML).to.equal('<div class="parent"><div class="myNewChild"></div><div class="child"></div></div>')
        })
    })

    describe('text', () => {
        it('should return text content of first found element', () => {
            env.initWithHtml('<div id="a" data-test="value">some text</div>')

            expect(dom.select('#a').text()).to.equal('some text')
        })

        it('should set text content of elements', () => {
            env.initWithHtml('<div id="a" data-test="value">some text</div>')

            dom.select('#a').text('some other text')

            expect(document.getElementById('a').textContent).to.equal('some other text')
        })
    })

    describe('html', () => {
        it('should return html content of first found element', () => {
            env.initWithHtml('<div id="a" data-test="value">some <br>text</div>')

            expect(dom.select('#a').html()).to.equal('some <br>text')
        })

        it('should set text content of elements', () => {
            env.initWithHtml('<div id="a" data-test="value">some text</div>')

            dom.select('#a').html('some other <br>text')

            expect(document.getElementById('a').innerHTML).to.equal('some other <br>text')
        })
    })

    describe('value', () => {
        it('should give value to input text', () => {
            env.initWithHtml('<input type="text" class="a" value="toto" />')

            expect(dom.select('.a').value()).to.equal('toto')
        })

        it('should give value to input radio', () => {
            env.initWithHtml('<input type="radio" class="a" value="toto" />')

            expect(dom.select('.a').value()).to.equal('toto')
        })
    })

    describe('appendTag', () => {
        it('should append tag to parent', () => {
            env.initWithHtml('<div id="append"><span></span></div>')

            dom.select('#append').appendTag('p')

            expect(document.body.innerHTML).to.equal('<div id="append"><span></span><p></p></div>')
        })

        it('should append tag with classes', () => {
            env.initWithHtml('<div id="append"><span></span></div>')

            dom.select('#append').appendTag('p', {classes: 'myClass'})

            expect(document.body.innerHTML).to.equal('<div id="append"><span></span><p class="myClass"></p></div>')
        })

        it('should be chainable', () => {
            env.initWithHtml('<div id="append"><span></span></div>')

            dom.select('#append').appendTag('p').appendTag('p')

            expect(document.body.innerHTML).to.equal('<div id="append"><span></span><p><p></p></p></div>')
        })
    })

    describe('attr', () => {
        it('should set attribute for an element', () => {
            env.initWithHtml('<div id="append"></div>')

            dom.select('#append').attr('data-test', 'toto')

            expect(document.body.innerHTML).to.equal('<div id="append" data-test="toto"></div>');
        })

        it('should get attribute for an element', () => {
            env.initWithHtml('<div id="append" data-test="toto"></div>')

            expect(dom.select('#append').attr('data-test')).to.equal('toto');
        })

        it('should set many attributes for an element', () => {
            env.initWithHtml('<div id="append"></div>')

            dom.select('#append').attr({dataTest: 'toto', class: 'myClass'})

            expect(document.body.innerHTML).to.equal('<div id="append" data-test="toto" class="myClass"></div>');
        })
    })

    describe('removeAttr', () => {
        it('should remove attribute for element', () => {
            env.initWithHtml('<div id="append" data-test="toto"></div>')

            dom.select('#append').removeAttr('data-test')

            expect(document.body.innerHTML).to.equal('<div id="append"></div>')
        })
    })

    describe('clear', () => {
        it('should clear an element', () => {
            env.initWithHtml('<div id="a">some text</div>')

            dom.select('#a').clear()

            expect(document.getElementById('a').textContent).to.equal('')
        })

        it('should clear all elements', () => {
            env.initWithHtml('<div id="a">some text</div><div id="b">some text</div>')

            dom.select('div').clear()

            expect(document.getElementById('a').textContent).to.equal('')
            expect(document.getElementById('b').textContent).to.equal('')
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

        it('should accept a delegateSelector', (done) => {
            env.initWithHtml('<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>')

            dom.select('#a').on('click', '.b1', (e, div) => {
                expect(div.id).to.equal('b1')

                done()
            })

            testUtils.click(document.getElementById('b1'))
        })

        it('should accept a more complex delegateSelector', (done) => {
            env.initWithHtml('<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>')

            dom.select('#a').on('click', '#b1.b1', (e, div) => {
                expect(div.id).to.equal('b1')

                done()
            })

            testUtils.click(document.getElementById('b1'))
        })

        it('should not fire if delegateSelector doesn\'t match', (done) => {
            env.initWithHtml('<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>')

            let called = false

            dom.select('#a').on('click', '.b1', (e, div) => {
                called = true
            })

            testUtils.click(document.getElementById('b2'))

            setTimeout(() => {
                expect(called).to.be.false

                done()
            }, 100)
        })
    })

    describe('css', () => {
        it('should property change', () => {
            env.initWithHtml('<div id="a"></div>')

            dom.select('#a').css('margin-top', 10);
            expect(dom.select('#a').css('margin-top')).to.equal(10);
        })
    })

    describe('bounds', () => {
        it('should give bounding client rect', () => {
            env.initWithHtml('<div class="a" data-test="value">aaa</div>')

            // jsdom doesn't layout components so they have empty bounds :/
            expect(dom.select('.b').bounds().width).to.be.equal(0)
            expect(dom.select('.b').bounds().height).to.be.equal(0)
            expect(dom.select('.b').bounds().top).to.be.equal(0)
            expect(dom.select('.b').bounds().left).to.be.equal(0)
            expect(dom.select('.b').bounds().bottom).to.be.equal(0)
            expect(dom.select('.b').bounds().right).to.be.equal(0)
        })

        it('should give empty bounding client rect if no matching element', () => {
            env.initWithHtml('<div class="a" data-test="value"></div>')

            expect(dom.select('.b').bounds().width).to.be.equal(0)
            expect(dom.select('.b').bounds().height).to.be.equal(0)
            expect(dom.select('.b').bounds().top).to.be.equal(0)
            expect(dom.select('.b').bounds().left).to.be.equal(0)
            expect(dom.select('.b').bounds().bottom).to.be.equal(0)
            expect(dom.select('.b').bounds().right).to.be.equal(0)
        })
    })

    describe('classes', () => {
        describe('addClass', () => {
            it('should add class in element', () => {
                env.initWithHtml('<div id="a"></div>')

                dom.select('#a').addClass('test ratata');
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