// ..
// Imports
//

import * as env from '../../test-env';

import * as scriptLoader from '../../../assets/js/utils/script-loader.js';

let scriptSrc = 'http://static.rtl.fr/versions/www/3.0.263/js/header_partner.min.js';

// ..
// Unit Tests
//

describe('script-loader.js', () => {
    beforeEach(() => {
        env.initWithHtml('<div><script></script></div>');
    });

    describe('getScriptsBySrc', () => {
        it('should find script by src', () => {
            env.initWithHtml('<div><script src="1"></script></div>');

            expect(scriptLoader.getScriptsBySrc('1').length).toBe(1);
        });

        it('should find multiple scripts by src', () => {
            env.initWithHtml('<div><script src="1"></script><script src="1"></script><script src="2"></script></div>');

            expect(scriptLoader.getScriptsBySrc('1').length).toBe(2);
        });
    });

    /*
describe('ensureLoaded', () => {
    it('should insert script', function (done) {
        env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
            callback(null, 'var loaded = true;');
        }});

        scriptLoader.ensureLoaded(scriptSrc).then(function() {
            expect(global.window.loaded).toBe(true);

            done();
        });
    });

    it('should call callback if script is already loaded', function (done) {
        env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
            callback(null, 'var loaded = true;');
        }});

        scriptLoader.ensureLoaded(scriptSrc).then(function() {
            expect(global.window.loaded).toBe(true);

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
            expect(global.window.loaded).toBe(true);

            done();
        });
    });

    it('should work without a callback', () => {
        env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
            callback(null, 'var loaded = true;');
        }});

        scriptLoader.ensureLoaded(scriptSrc);

        expect(global.window.loaded).toBe(true);
    });

    it('should work with null callback', () => {
        env.initWithHtml('<div><script></script></div>', {resourceLoader: function(resource, callback) {
            callback(null, 'var loaded = true;');
        }});

        scriptLoader.ensureLoaded(scriptSrc, null);

        expect(global.window.loaded).toBe(true);
    });
});
    */

    describe('getScriptsToLoad', () => {
        it('should find all scripts from html', () => {
            env.initWithHtml('<div data-role="load-script" data-src="http://my-script"></div>');

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).toMatchObject(['http://my-script']);
        });

        it('should give an empty array ', () => {
            env.initWithHtml('<div></div>');

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).toMatchObject([]);
        });
    });
});