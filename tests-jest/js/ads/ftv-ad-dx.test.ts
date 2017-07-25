// ..
// Imports
//

import * as env from '../../test-env';

import * as ftvScriptDx from '../../../assets/js/advertising/ftv-script-dx.js';
import * as ftvAdDx from '../../../assets/js/advertising/ftv-ad-dx.js';

let jsAdClassName = ftvScriptDx.JS_FTV_CLASS;

// ..
// HTML inits
//

let initWithTwoAds = function () {
    let html = `<div class="${jsAdClassName}" data-position="Top"></div><div class="${jsAdClassName}" data-position="Middle"></div>`;
    env.initWithHtml(html);
};
let initWithSingleAd = function (attribute: string) {
    let html = `<div class="${jsAdClassName}" data-position="Top" ${attribute}></div>`;
    env.initWithHtml(html);
};

// ..
// Unit Tests
//

describe('ftv-ad-dx.js', () => {
    beforeEach(() => {
        ftvAdDx.registry = {};
        env.resetHtml();
    });

    describe('setupAds', () => {
        test('should do nothing if no Ad is found', () => {
            ftvAdDx.setupAds();
            expect(Object.keys(ftvAdDx.registry).length).toBe(5);
        });

        test('should setup only one Ad', () => {
            initWithTwoAds();

            ftvAdDx.setupAds();
            expect(Object.keys(ftvAdDx.registry).length).toBe(2);
        });
    });

    describe('setupAd', () => {
        test('should setup only one Ad', () => {
            initWithTwoAds();

            ftvAdDx.setupAd(document.getElementsByClassName(jsAdClassName)[0]);
            expect(Object.keys(ftvAdDx.registry).length).toBe(1);
        });
    });

    describe('createAd', () => {
        describe('properties of returned object', () => {
            let adElm;
            let ad;

            let initEnv = function (attribute?: string) {
                attribute ? initWithSingleAd(attribute) : initWithSingleAd('');

                adElm = document.getElementsByClassName(jsAdClassName)[0];
                ad = ftvAdDx.createAd(adElm);
            };

            test('should return an element property equals to ad element', () => {
                initEnv();
                expect(ad.element).toBe(adElm);
            });

            test('should return a position property equals to data-attribute', () => {
                initEnv();
                expect(ad.position).toBe(adElm.getAttribute('data-position'));
            });

            test('should return an autoload property set by default to true', () => {
                initEnv();
                expect(ad.autoload).toBe(true);
            });

            test('should return a refresh property set by default to 0', () => {
                initEnv();
                expect(ad.refresh).toBe(0);
            });

            test('should return a refresh property converted from seconds to milliseconds', () => {
                initEnv('data-refresh="90"');
                expect(ad.refresh).toBe(adElm.getAttribute('data-refresh') * 1000);
            });

            test('should return an autoload property equals to data-autoload attribute', () => {
                initEnv('data-autoload="false"');
                expect(ad.autoload).toBe(false);
            });
        });
    });
});
