// ..
// Imports
//

import * as scriptLoader from '../../../assets/js/utils/script-loader.js';

let scriptSrc = 'http://static.rtl.fr/versions/www/3.0.263/js/header_partner.min.js';

// ..
// Unit Tests
//

describe('script-loader.js', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div><script></script></div>';
    });

    describe('getScriptsBySrc', () => {
        test('should find script by src', () => {
            document.body.innerHTML = '<div><script src="1"></script></div>';

            expect(scriptLoader.getScriptsBySrc('1').length).toBe(1);
        });

        test('should find multiple scripts by src', () => {
            document.body.innerHTML = '<div><script src="1"></script><script src="1"></script><script src="2"></script></div>';

            expect(scriptLoader.getScriptsBySrc('1').length).toBe(2);
        });
    });

    describe('ensureLoaded', () => {
        test('should insert script', function () {
            document.body.innerHTML = '<div><script></script></div>';

            return scriptLoader.ensureLoaded(scriptSrc).then(function() {
                let script = document.querySelector('script[data-loaded=true]') as HTMLScriptElement;

                return expect(script.src).toEqual(scriptSrc);
            });
        });

        test('should call callback if script is already loaded', function () {
            document.body.innerHTML = '<div><script></script></div>';

            return scriptLoader.ensureLoaded(scriptSrc).then(function() {
                return scriptLoader.ensureLoaded(scriptSrc);
            });
        });

        test('should insert script only once and yet call callback every time even if script is currently loading', function () {
            document.body.innerHTML = '<div><script></script></div>';

            scriptLoader.ensureLoaded(scriptSrc);

            // second call when script has not finish loading yet
            return scriptLoader.ensureLoaded(scriptSrc).then(function() {
                let script = document.querySelector('script[data-loaded=true]') as HTMLScriptElement;

                return expect(script.src).toEqual(scriptSrc);
            });
        });
    });

    describe('getScriptsToLoad', () => {
        test('should find all scripts from html', () => {
            document.body.innerHTML = '<div data-role="load-script" data-src="http://my-script"></div>';

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).toMatchObject(['http://my-script']);
        });

        test('should give an empty array ', () => {
            document.body.innerHTML = '<div></div>';

            var scriptUrls = scriptLoader.getScriptsToLoad();

            expect(scriptUrls).toMatchObject([]);
        });
    });
});