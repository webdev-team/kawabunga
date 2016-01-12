var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var estat = require('../../../assets/js/tracking/estat-script');

describe('estat-script.js', function () {
    beforeEach(function() {
        env.initWithHtml('<div><script></script></div>');
    });

    it('should setup estat marker', function () {
        estat.insertScriptWithSerial('219019211308' /* rtl serial */);

        expect(global._PJS).to.equal(0);
        expect(global._cmsJS).to.equal(0);
        expect(global._eStatDS).to.equal(1);
        expect(global.eStat_PJS).to.be.not.null;
        expect(global.eStat_CMSJS).to.be.not.null;
    });
});