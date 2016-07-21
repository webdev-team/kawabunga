var chai = require('chai');
var expect = chai.expect;

var env = require('../../test-env');
var testUtils = require('../../test-utils');

var $css = require('../../../../assets/js/utils/dom/css');
var $ = require('../../../../assets/js/utils/dom');

describe('css.js', () => {

    describe('getCss', () => {
        it('should value is good', () => {
            env.initWithHtml('<div id="a" style="margin-top:10px; display:block;"></div>')
            expect($css.getCss($('#a')[0], 'margin-top')).to.equal(10)
            expect($css.getCss($('#a')[0], 'display')).to.equal('block')
        })
    })

    describe('setCss', () => {
        it('should add one prop', () => {
            env.initWithHtml('<div id="a"></div>')
            $('#a').forEach($css.setCss({'margin-top': 10}))
            expect(document.getElementById('a').style.marginTop).to.equal('10px')
        })

        it('should add many props', () => {
            env.initWithHtml('<div id="a"></div>')
            $('#a').forEach($css.setCss({'margin-top': 10, 'opacity': 0.8, 'color': '#F4F4F4'}))
            expect(document.getElementById('a').style.marginTop).to.equal('10px')
            expect(document.getElementById('a').style.opacity).to.equal('0.8')
            expect(document.getElementById('a').style.color).to.equal('rgb(244, 244, 244)')
        })
    })
})