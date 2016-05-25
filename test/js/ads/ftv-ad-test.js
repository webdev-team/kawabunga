var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');
var Promise = require('promise');
var _ = require('lodash');

var proxyquire = require('proxyquire').noPreserveCache();

describe('ftv-ad.js', function () {
    var ftvAds = null;
    var ftvScript = null;
    var scriptLoaded = false;

    beforeEach(function() {
        scriptLoaded = false;

        ftvScript = {
            ensureLoaded: function() {
                return new Promise(function(resolve) {
                    scriptLoaded = true;

                    resolve();
                });
            }
        };

        ftvAds = proxyquire('../../../assets/js/advertising/ftv-ad', {
            './ftv-script': ftvScript
        });

        ftvAds.REFRESH_INTERVAL = ftvAds.REFRESH_INTERVAL_DEFAULT;
    });

    it('should setup a OAS_AD function at window.top.FtvConfig level', function () {
        expect(window.top.FtvConfig.OAS_AD).to.be.not.null;
    });

    describe('init', function () {
        it('should inject script and then call configure', function (done) {
            ftvAds.setupAds = function() {
                expect(scriptLoaded).to.be.true;

                done();
            };

            ftvAds.init();
        });
    });

    describe('setupAds', function () {
        it('should find all js-ftv element and create Ad objects', function () {
            env.initWithHtml('' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle2" data-width="300" data-height="250"></div>');

            var count = 0;

            ftvAds.setupAd = function(element) {
                count++
            };

            ftvAds.setupAds();

            expect(count).to.be.equal(2);
        });

        it('should not createAd for invisible spots', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250" style="display:none;"></div>');

            var count = 0;

            ftvAds.setupAd = function(element) {
                count++
            };

            ftvAds.setupAds();

            expect(count).to.be.equal(0);
        });
    });

    describe('setupAd', function () {
        it('should parse element and create Ad object', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            expect(ad.element).to.equal(document.getElementById('pave-300x250-top'));
            expect(ad.id).to.equal('pave-300x250-top');
            expect(ad.position).to.equal('Middle');
            expect(ad.width).to.equal('300');
            expect(ad.height).to.equal('250');
            expect(ad.refresh).to.be.null;
            expect(ad.loaded).to.be.false;
            expect(ad.timerId).to.be.null;
        });

        it('should add Ad object in registry', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');

            ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            expect(_.size(ftvAds.registry)).to.equal(1);
            expect(ftvAds.registry['pave-300x250-top'].element).to.equal(document.getElementById('pave-300x250-top'));
        });

        it('should create ad and insert iframe', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');

            ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            expect(document.body.innerHTML).to.equal('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250">' +
                '<iframe id="frame_Middle" marginwidth="0" marginheight="0" style="border: 0px; display: block; width: 300px; height: 250px;" scrolling="no" frameborder="0" height="250" width="300"></iframe>' +
                '</div>');
        });

        it('should set iframe content', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');
            global.staticRoot = 'http://static.rtl.fr';

            ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            expect(document.getElementById('frame_Middle').contentDocument.body.innerHTML).to.equal("<script>" +
                'var staticRoot = "http://static.rtl.fr";' +
                'window.top.FtvConfig.OAS_AD("Middle");' +
                "</script>");
        });

        it('should refresh ad if refresh data attribute is set', function (done) {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250" data-refresh="true"></div>');

            ftvAds.REFRESH_INTERVAL = 10;

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            expect(ad.timerId).to.not.be.null;

            ad.refreshIframe = function() {
                clearInterval(ad.timerId);

                done();
            }
        });
    });

    describe('destroy', function () {
        it('should remove completly dom node', function () {
            env.initWithHtml('<div class="parent"><div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div></div>');

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            ad.destroy();

            expect(document.body.innerHTML).to.equal('<div class="parent"></div>');
        });

        it('should remove ad from registry', function () {
            env.initWithHtml('<div class="parent"><div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div></div>');

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            ad.destroy();

            expect(_.size(ftvAds.registry)).to.equal(0);
        });
    });

    describe('removeIframe', function () {
        it('should remove iframe', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            ad.removeIframe();

            expect(document.body.innerHTML).to.equal('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');
        });

        it('should also remove timer', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250" data-refresh="true"></div>');

            var ad = ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            ad.removeIframe();

            expect(ad.timerId).to.be.null;
        });
    });

    describe('getById', function () {
        it('should return Ad object', function () {
            env.initWithHtml('<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>');

            ftvAds.setupAd(document.getElementById('pave-300x250-top'));

            var ad = ftvAds.getById('pave-300x250-top');

            expect(ad).to.be.not.null;
            expect(ad.iframe).to.be.not.null;
        });
    });
});