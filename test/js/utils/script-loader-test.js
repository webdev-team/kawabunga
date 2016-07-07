var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var scriptLoader = require('../../../assets/js/utils/script-loader');

var scriptSrc = 'http://static.rtl.fr/versions/www/3.0.263/js/header_partner.min.js';

describe('script-loader.js', function () {
    beforeEach(function() {
        env.initWithHtml('<div><script></script></div>');
    });

    describe('getScriptsBySrc', function () {
        it('should find script by src', function () {
            env.initWithHtml('<div><script src="1"></script></div>');

            expect(scriptLoader.getScriptsBySrc('1').length).to.be.equal(1);
        });

        it('should find multiple scripts by src', function () {
            env.initWithHtml('<div><script src="1"></script><script src="1"></script><script src="2"></script></div>');

            expect(scriptLoader.getScriptsBySrc('1').length).to.be.equal(2);
        });
    });

    describe('ensureLoaded', function () {
        it('should insert script', function (done) {
            env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
                callback(null, 'var loaded = true;');
            }});

            scriptLoader.ensureLoaded(scriptSrc).then(function() {
                expect(global.window.loaded).to.be.true;

                done();
            });
        });

        it('should call callback if script is already loaded', function (done) {
            env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
                callback(null, 'var loaded = true;');
            }});

            scriptLoader.ensureLoaded(scriptSrc).then(function() {
                expect(global.window.loaded).to.be.true;

                scriptLoader.ensureLoaded(scriptSrc).then(done);
            });
        });

        it('should insert script only once and yet call callback every time even if script is currently loading', function (done) {
            env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
                setTimeout(function() { // simulate a server delay
                    callback(null, 'var loaded = true;')
                }, 10);
            }});

            scriptLoader.ensureLoaded(scriptSrc);

            // second call when script has not finish loading yet
            scriptLoader.ensureLoaded(scriptSrc).then(function() {
                expect(global.window.loaded).to.be.true;

                done();
            });
        });

        it('should work without a callback', function () {
            env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
                callback(null, 'var loaded = true;');
            }});

            scriptLoader.ensureLoaded(scriptSrc);

            expect(global.window.loaded).to.be.true;
        });

        it('should work with null callback', function () {
            env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
                callback(null, 'var loaded = true;');
            }});

            scriptLoader.ensureLoaded(scriptSrc, null);

            expect(global.window.loaded).to.be.true;
        });
    });

    describe('getScriptsToLoad', function () {
        it('should find all scripts from html', function () {
            env.initWithHtml('<div data-role="load-script" data-src="http://my-script"></div>');

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).to.deep.equal(['http://my-script']);
        });

        it('should give an empty array ', function () {
            env.initWithHtml('<div></div>');

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).to.deep.equal([]);
        });
    });
});