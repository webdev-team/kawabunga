import {expect} from 'chai';
import * as testEnv from '../test-env';

import dom from '../../../assets/ts/utils/dom';

describe('dom', () => {
    describe('select', () => {

        describe('first level selection', () => {

            it('should select right nodes by className querySelector', () => {
                testEnv.initWithHtml('<div class="a" id="good"></div><div class="b"></div>');

                let elem = global.document.getElementById('good');
                let $dom = dom('.a');

                expect($dom[0]).to.equal(elem);
                expect($dom.length).to.equal(1);
            });

            it('should select right nodes by ids querySelector', () => {
                testEnv.initWithHtml('<div id="a"></div><div id="b" class="good"></div>');

                let elem = global.document.getElementsByClassName('good')[0];
                let $dom = dom('#b');

                expect($dom[0]).to.equal(elem);
                expect($dom.length).to.equal(1);
            });

            it('should accept HTML Element', () => {
                testEnv.initWithHtml('<div id="a"></div>');

                let elem = document.getElementById('a');
                let $dom = dom(elem);

                expect($dom.length).to.equal(1);
                expect($dom[0]).to.equal(elem);
            });

            it('should select right elements in correct order', () => {
                testEnv.initWithHtml('<div class="a" id="first"></div><div class="a" id="second"><div class="a" id="third"></div></div><div class="b"></div>');

                let first = document.getElementById('first');
                let second = document.getElementById('second');
                let third = document.getElementById('third');

                let $dom = dom('.a');

                expect($dom.length).to.equal(3);
                expect($dom[0]).to.equal(first);
                expect($dom[1]).to.equal(second);
                expect($dom[2]).to.equal(third);
            });

        });

        describe('sub level selection', () => {

             it('should find correct child', () => {
             testEnv.initWithHtml('<div class="a" id="parent"><div class="c" id="good"></div></div><div class="b" id="uncle"><div class="c" id="bad"></div></div>');

             let parent = document.getElementById('parent');
             let $dom = dom('.a');

             expect($dom.length).to.equal(1);
             expect($dom[0]).to.equal(parent);

             let good = document.getElementById('good');
             //let $good = $dom.select('.c');

             //expect($good.length).to.equal(1);
             //expect($good[0]).to.equal(good);
             });

        });
    });
});
