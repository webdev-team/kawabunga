var chai = require('chai');
var expect = chai.expect;
var env = require('../test-env');

var ftvScriptDx = require('../../../assets/js/advertising/ftv-script-dx');
var ftvAdDx = require('../../../assets/js/advertising/ftv-ad-dx.js');

var jsAdClassName = ftvScriptDx.JS_FTV_CLASS;

describe('ftv-ad-dx.js', function () {

    beforeEach(function () {
        ftvAdDx.registry = {};
    });

    describe('setupAds', function () {
        it('should do nothing if no Ad is found ', function () {
            env.initWithEmptyHtml();
            ftvAdDx.setupAds();
            expect(Object.keys(ftvAdDx.registry).length).to.be.equal(0);
        });

        it('should setup all Ads and register them', function () {
            env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top"><div class="' + jsAdClassName + '" data-position="Middle">');
            ftvAdDx.setupAds();
            expect(Object.keys(ftvAdDx.registry).length).to.be.equal(2);
        });
    });

    describe('setupAd', function () {
        it('should setup only one Ad', function () {
            env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top"><div class="' + jsAdClassName + '" data-position="Middle">');
            ftvAdDx.setupAd(document.getElementsByClassName(jsAdClassName)[0]);
            expect(Object.keys(ftvAdDx.registry).length).to.be.equal(1);
        });
    });

    describe('createAd', function () {

        describe('properties of returned object', function () {
            it('should return an element property equals to ad element', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.element).to.be.equal(adElm);
            });

            it('should return a position property equals to data-attribute', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.position).to.be.equal(adElm.getAttribute('data-position'));
            });

            it('should return an autoload property set by default to true', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.autoload).to.be.true;
            });

            it('should return an autoload property equals to data-autoload attribute', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top" data-autoload="false">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.autoload).to.be.false;
            });

            it('should return a refresh property set by default to 0', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.refresh).to.be.equal(0);
            });

            it('should return a refresh property converted from seconds to milliseconds', function () {
                env.initWithHtml('<div class="' + jsAdClassName + '" data-position="Top" data-refresh="90">');
                var adElm = document.getElementsByClassName(jsAdClassName)[0];
                var ad = ftvAdDx.createAd(adElm);
                expect(ad.refresh).to.be.equal(adElm.getAttribute('data-refresh')*1000);
            });
        });

    });

});
