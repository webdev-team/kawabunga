// ..
// Imports
//

import * as testUtils from '../test-utils';

import * as dom from '../../../assets/js/utils/dom.js';

// ..
// Unit Tests
//

describe('dom.js', () => {
    describe('select', () => {
        test('should find matched nodes by class', () => {
            document.body.innerHTML = '<div class="a"></div><div class="b"></div>';

            expect(dom.select('.a').length).toBe(1);
        });

        test('should find matched nodes by id', () => {
            document.body.innerHTML = '<div id="a"></div><div id="b"></div>';

            expect(dom.select('#a').length).toBe(1);
        });

        test('should accept HTMLElement', () => {
            document.body.innerHTML = '<div id="a" data-test="toto"></div>';
            let id = document.getElementById('a');

            expect(dom.select(id).length).toBe(1);
            expect(dom.select(id).data('test')).toBe("toto");
        });

        describe('sub select', () => {
            it('should find matched nodes', () => {
                document.body.innerHTML = '<div class="a"><div class="b"></div></div>';

                expect(dom.select('.a').select('.b').length).toBe(1);
            });

            it('should be callable recursively', () => {
                document.body.innerHTML = '<div class="a"><div class="b"><div class="c"></div></div></div>';

                expect(dom.select('.a').select('.b').select('.c').length).toBe(1);
            });

            it('should be callable recursively 4 levels', () => {
                document.body.innerHTML = '<div id="a"><div class="b"><div class="c"></div></div><div class="d"><div class="e"></div></div></div>';

                expect(dom.select('#a').select('.e').length).toBe(1);
            });
        });
    });

    describe('module.exports', () => {
        it('should make find function available at root', () => {
            document.body.innerHTML = '<div class="a"></div><div class="b"></div>';

            expect(dom('.a').length).toBe(1);
        });
    });

    describe('selectByClass', () => {
        it('should find matched nodes by class', () => {
            document.body.innerHTML = '<div class="a"></div><div class="b"></div>';

            expect(dom.selectByClass('a').length).toBe(1);
        });

        it('should be callable recursively', () => {
            document.body.innerHTML = '<div class="a"><div class="b"><div class="c"></div></div></div>';

            expect(dom.selectByClass('a').selectByClass('b').selectByClass('c').length).toBe(1);
        });
    });

    describe('empty', () => {
        it('should be true if array is empty', () => {
            document.body.innerHTML = '<div class="a"></div>';

            expect(dom.select('.b').isEmpty()).toBe(true);
        });

        it('should be false if array is not empty', () => {
            document.body.innerHTML = '<div class="a"></div>';

            expect(dom.select('.a').isEmpty()).toBe(false);
        });
    });

    describe('data', () => {
        it('should give data attribute value of first found element', () => {
            document.body.innerHTML = '<div class="a" data-test="value"></div>';

            expect(dom.select('.a').data('test')).toBe('value');
        });
    });

    describe('parent', () => {
        it('should get parent', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div></div>';

            expect(dom.select('.child').parent().hasClass('parent')).toBe(true);
        });

        it('should get parent two', () => {
            document.body.innerHTML = '<div class="other-parent toto"><div class="parent"><div class="child"></div></div></div>';

            expect(dom.select('.child').parent('.other-parent').hasClass('toto')).toBe(true);
        });

        it('should not fail if array is empty', () => {
            document.body.innerHTML = '<div class="other-parent toto"><div class="parent"><div class="child"></div></div></div>';

            expect(dom.select('.not-here').parent().length).toBe(0);
        });
    });

    describe('firstChild', () => {
        it('should get first child', () => {
            document.body.innerHTML = '<div class="parent"><div class="child first"></div><div class="child"></div><div class="child"></div></div>';

            expect(dom.select('.parent').firstChild('child').hasClass('first')).toBe(true);
        });
    });

    describe('children', () => {
        it('should get children', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div><div class="child"></div><div class="child"></div></div>';

            expect(dom.select('.parent').children().length).toBe(3);
        });

        it('should get children with test class', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div><div class="child test"></div><div class="child test"></div></div>';

            expect(dom.select('.parent').children('.test').length).toBe(2);
        });
    });

    describe('index', () => {
        it('should get indexOf element', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div><div class="child active"></div><div class="child"></div></div>';

            expect(dom.select('.parent .child').index('active')).toBe(1);
        });
    });

    describe('after, before, prepend, append', () => {
        it('should add after element', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div></div>';

            dom.select('.child').after('<div class="myNewChild"></div>');

            expect(document.body.innerHTML).toBe('<div class="parent"><div class="child"></div><div class="myNewChild"></div></div>');
        });

        it('should add before element', () => {
            document.body.innerHTML = '<div class="parent"><div class="child"></div></div>';

            dom.select('.child').before('<div class="myNewChild"></div>');

            expect(document.body.innerHTML).toBe('<div class="parent"><div class="myNewChild"></div><div class="child"></div></div>');
        });
    });

    describe('text', () => {
        it('should return text content of first found element', () => {
            document.body.innerHTML = '<div id="a" data-test="value">some text</div>';

            expect(dom.select('#a').text()).toBe('some text');
        });

        it('should set text content of elements', () => {
            document.body.innerHTML = '<div id="a" data-test="value">some text</div>';

            dom.select('#a').text('some other text');

            expect(document.getElementById('a').textContent).toBe('some other text');
        });
    });

    describe('html', () => {
        it('should return html content of first found element', () => {
            document.body.innerHTML = '<div id="a" data-test="value">some <br>text</div>';

            expect(dom.select('#a').html()).toBe('some <br>text');
        });

        it('should set text content of elements', () => {
            document.body.innerHTML = '<div id="a" data-test="value">some text</div>';

            dom.select('#a').html('some other <br>text');

            expect(document.getElementById('a').innerHTML).toBe('some other <br>text');
        });
    });

    describe('value', () => {
        it('should give value to input text', () => {
            document.body.innerHTML = '<input type="text" class="a" value="toto" />';

            expect(dom.select('.a').value()).toBe('toto');
        });

        it('should give value to input radio', () => {
            document.body.innerHTML = '<input type="radio" class="a" value="toto" />';

            expect(dom.select('.a').value()).toBe('toto');
        });
    });

    describe('appendTag', () => {
        it('should append tag to parent', () => {
            document.body.innerHTML = '<div id="append"><span></span></div>';

            dom.select('#append').appendTag('p');

            expect(document.body.innerHTML).toBe('<div id="append"><span></span><p></p></div>');
        });

        it('should append tag with classes', () => {
            document.body.innerHTML = '<div id="append"><span></span></div>';

            dom.select('#append').appendTag('p', {classes: 'myClass'});

            expect(document.body.innerHTML).toBe('<div id="append"><span></span><p class="myClass"></p></div>');
        });

        it('should be chainable', () => {
            document.body.innerHTML = '<div id="append"><span></span></div>';

            dom.select('#append').appendTag('p').appendTag('p');

            expect(document.body.innerHTML).toBe('<div id="append"><span></span><p><p></p></p></div>');
        });
    });

    describe('attr', () => {
        it('should set attribute for an element', () => {
            document.body.innerHTML = '<div id="append"></div>';

            dom.select('#append').attr('data-test', 'toto');

            expect(document.body.innerHTML).toBe('<div id="append" data-test="toto"></div>');
        });

        it('should get attribute for an element', () => {
            document.body.innerHTML = '<div id="append" data-test="toto"></div>';

            expect(dom.select('#append').attr('data-test')).toBe('toto');
        });

        it('should set many attributes for an element', () => {
            document.body.innerHTML = '<div id="append"></div>';

            dom.select('#append').attr({dataTest: 'toto', class: 'myClass'});

            expect(document.body.innerHTML).toBe('<div id="append" data-test="toto" class="myClass"></div>');
        });
    });

    describe('removeAttr', () => {
        it('should remove attribute for element', () => {
            document.body.innerHTML = '<div id="append" data-test="toto"></div>';

            dom.select('#append').removeAttr('data-test');

            expect(document.body.innerHTML).toBe('<div id="append"></div>');
        });
    });

    describe('clear', () => {
        it('should clear an element', () => {
            document.body.innerHTML = '<div id="a">some text</div>';

            dom.select('#a').clear();

            expect(document.getElementById('a').textContent).toBe('');
        });

        it('should clear all elements', () => {
            document.body.innerHTML = '<div id="a">some text</div><div id="b">some text</div>';

            dom.select('div').clear();

            expect(document.getElementById('a').textContent).toBe('');
            expect(document.getElementById('b').textContent).toBe('');
        });
    });

    describe('on', () => {
        it('should listen to click event', (done) => {
            document.body.innerHTML = '<div id="a"></div>';

            dom.select('#a').on('click', e => done());

            testUtils.click(document.getElementById('a'));
        });

        it('should provide element as second parameter', (done) => {
            document.body.innerHTML = '<div id="a"></div>';

            dom.select('#a').on('click', (e, div) => {
                expect(div.id).toBe('a');

                done();
            });

            testUtils.click(document.getElementById('a'));
        });

        it('should accept a delegateSelector', (done) => {
            document.body.innerHTML = '<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>';

            dom.select('#a').on('click', '.b1', (e, div) => {
                expect(div.id).toBe('b1');

                done();
            });

            testUtils.click(document.getElementById('b1'));
        });

        it('should accept a more complex delegateSelector', (done) => {
            document.body.innerHTML = '<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>';

            dom.select('#a').on('click', '#b1.b1', (e, div) => {
                expect(div.id).toBe('b1');

                done()
            });

            testUtils.click(document.getElementById('b1'));
        });

        it('should not fire if delegateSelector doesn\'t match', (done) => {
            document.body.innerHTML = '<div id="a"><div id="b1" class="b1"></div><div id="b2" class="b2"></div></div>';

            let called = false;

            dom.select('#a').on('click', '.b1', (e, div) => {
                called = true;
            });

            testUtils.click(document.getElementById('b2'));

            setTimeout(() => {
                expect(called).toBe(false);

                done();
            }, 100);
        });
    });
    
    describe('css', () => {
        it('should property change', () => {
            document.body.innerHTML = '<div id="a"></div>';

            dom.select('#a').css('margin-top', 10);
            expect(dom.select('#a').css('margin-top')).toBe(10);
        });
    });

    describe('bounds', () => {
        it('should give bounding client rect', () => {
            document.body.innerHTML = '<div class="a" data-test="value">aaa</div>';

            // jsdom doesn't layout components so they have empty bounds :/
            expect(dom.select('.b').bounds().width).toBe(0);
            expect(dom.select('.b').bounds().height).toBe(0);
            expect(dom.select('.b').bounds().top).toBe(0);
            expect(dom.select('.b').bounds().left).toBe(0);
            expect(dom.select('.b').bounds().bottom).toBe(0);
            expect(dom.select('.b').bounds().right).toBe(0);
        });

        it('should give empty bounding client rect if no matching element', () => {
            document.body.innerHTML = '<div class="a" data-test="value"></div>';

            expect(dom.select('.b').bounds().width).toBe(0);
            expect(dom.select('.b').bounds().height).toBe(0);
            expect(dom.select('.b').bounds().top).toBe(0);
            expect(dom.select('.b').bounds().left).toBe(0);
            expect(dom.select('.b').bounds().bottom).toBe(0);
            expect(dom.select('.b').bounds().right).toBe(0);
        });
    });

    describe('classes', () => {
        describe('addClass', () => {
            it('should add class in element', () => {
                document.body.innerHTML = '<div id="a"></div>';

                dom.select('#a').addClass('test ratata');
                expect(document.getElementById('a').classList.contains('test')).toBe(true);
            });
        });
        describe('removeClass', () => {
            it('should remove class in element', () => {
                document.body.innerHTML = '<div id="a" class="test"></div>';

                dom.select('#a').removeClass('test');
                expect(document.getElementById('a').classList.contains('test')).toBe(false);
            });
        });
        describe('hasClass', () => {
            it('should element has class', () => {
                document.body.innerHTML = '<div id="a" class="test"></div>';
                expect(dom.select('#a').hasClass('test')).toBe(true);
            });
        });
    });
});