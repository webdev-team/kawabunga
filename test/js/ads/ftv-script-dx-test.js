var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var ftvScriptDx = require('../../../assets/js/advertising/ftv-script-dx');

describe('ftv-script.js', function () {
    describe('getDxScriptSrc', function () {
        it('should return correct script url', function () {
            var url = ftvScriptDx.getDxScriptSrc();
            
            expect(url).to.be.equal('http://pub.ftv-publicite.fr/om/1.js');
        });
    });
});
