var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var ftvScript = require('../../../assets/js/ads/ftv-script');

var scriptLoader = require('../../../assets/js/utils/script-loader');

describe('ftv-script.js', function () {
    beforeEach(function() {
        delete global.OAS_url;
        delete global.OAS_listpos;
        delete global.OAS_query;
        delete global.OAS_sitepage;

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