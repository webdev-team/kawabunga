var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var ftvScript = require('../../../assets/js/advertising/ftv-script');

var scriptLoader = require('../../../assets/js/utils/script-loader');

describe('ftv-script.js', function () {
    beforeEach(function() {
        delete global.OAS_url;
        delete global.OAS_listpos;
        delete global.OAS_query;
        delete global.OAS_sitepage;

        env.initWithEmptyHtml();
    });

    describe('getRandomToken', function () {
        it('should generate a 9 chars token', function () {
            var token = ftvScript.getRandomToken();

            expect(token.length).to.equal(9);
        });

        it('should generate a token at load time and return always the same', function () {
            var token = ftvScript.getRandomToken();

            expect(token).to.equal(ftvScript.getRandomToken());
            expect(token).to.equal(ftvScript.getRandomToken());
            expect(token).to.equal(ftvScript.getRandomToken());
        });
    });

    describe('getScriptSrc', function () {
        it('should compute script src based on global vars', function () {
            global.OAS_url = 'http://pub.ftv-publicite.fr';
            global.OAS_listpos = 'Top,Middle';
            global.OAS_query = '?';
            global.OAS_sitepage = 'www.ftv-publicite.fr/accueil';

            expect(ftvScript.getScriptSrc()).to.match(/^http:\/\/pub.ftv-publicite.fr\/4\/www.ftv-publicite.fr\/accueil\/1[0-9]+@Top,Middle\?$/)
        });

        it('should have default values for url and query', function () {
            global.OAS_listpos = 'Top,Middle';
            global.OAS_sitepage = 'www.ftv-publicite.fr/accueil';

            expect(ftvScript.getScriptSrc()).to.match(/^http:\/\/pub.ftv-publicite.fr\/4\/www.ftv-publicite.fr\/accueil\/1[0-9]+@Top,Middle\?$/)
        });

        it('should find used positions in page', function () {
            env.initWithHtml('' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle2" data-width="300" data-height="250"></div>');

            global.OAS_sitepage = 'www.ftv-publicite.fr/accueil';

            expect(ftvScript.getScriptSrc()).to.match(/^http:\/\/pub.ftv-publicite.fr\/4\/www.ftv-publicite.fr\/accueil\/1[0-9]+@Middle,Middle2\?$/)
        });
    });

    describe('getPositions', function () {
        it('should find used positions in page', function () {
            env.initWithHtml('' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle2" data-width="300" data-height="250"></div>');

            expect(ftvScript.getPositions()).to.equal('Middle,Middle2');
        });

        it('should prefer global.OAS_listpos id present', function () {
            env.initWithHtml('' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle" data-width="300" data-height="250"></div>' +
                '<div class="js-ftv-ad" id="pave-300x250-top" data-position="Middle2" data-width="300" data-height="250"></div>');

            global.OAS_listpos = 'Top';

            expect(ftvScript.getPositions()).to.equal('Top');
        });

        it('should not fail if noting found', function () {
            env.initWithEmptyHtml();

            expect(ftvScript.getPositions()).to.equal('');
        });
    });

    describe('ensureLoaded', function () {
        it('should inject script and call back', function (done) {
            env.initWithHtml('<div><script></script></div>');

            ftvScript.ensureLoaded().then(function () {
                expect(scriptLoader.getScriptsBySrc(ftvScript.getScriptSrc()).length).to.be.one;

                done();
            });
        });
    });
});