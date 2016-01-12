var chai = require('chai');
var expect = chai.expect;

var env = require('../test-env');

var proxyquire = require('proxyquire').noPreserveCache();
var sinon = require('sinon');

describe('estat-marker.js', function () {
    var estatScript;
    var statsEstat;

    beforeEach(function() {
        estatScript = {};

        estatScript.insertScriptWithSerial = function (serial, apiCallback, playerCallback) {
            global.eStat_id = {
                serial: function() {}
            };

            apiCallback();
        };

        statsEstat = proxyquire('../../..../../../assets/js/tracking/estat-marker', {
            './estat-script': estatScript
        })
    });

    describe('init', function () {
        it('should do nothing if no marker is found', function () {
            env.initWithHtml('<div></div>');

            var estatMock = sinon.mock(estatScript);
            estatMock.expects("insertScriptWithSerial").never();

            statsEstat.init();

            estatMock.verify();
        });

        it('should ensure estat is loaded', function () {
            env.initWithHtml('<div id="estat-marker" data-serial="219019211308" data-levels="[&quot;Home&quot;, &quot;-&quot;, &quot;-&quot;, &quot;-&quot;]"></div>');

            var estatMock = sinon.mock(estatScript);
            estatMock.expects("insertScriptWithSerial").once().withArgs('219019211308');

            statsEstat.init();

            estatMock.verify();
        });
    });

    describe('getLevels', function () {
        it('should parse levels from tag', function () {
            statsEstat.levels = ['Home', 'lvl2', 'lvl3', 'lvl4'];

            expect(statsEstat.getLevels()).to.deep.equal(['Home', 'lvl2', 'lvl3', 'lvl4']);
        });

        it('should append hash on last level', function () {
            statsEstat.levels = ['Home', 'lvl2', 'lvl3', 'lvl4'];

            expect(statsEstat.getLevels('hash')).to.deep.equal(['Home', 'lvl2', 'lvl3', 'lvl4#hash']);
        });
    });

    describe('post', function () {
        it('should call esta api', function () {
            statsEstat.serial = '123';
            statsEstat.levels = ['lvl1', 'lvl2', 'lvl3', 'lvl4'];

            var serial = null;
            var levels = {};
            var post = null;

            global.eStat_id = {
                serial: function(value) {
                    serial = value;
                },
                niveau: function(index, name) {
                    levels[index] = name;
                }
            };
            global.eStat_tag = {
                post: function(value) {
                    post = value;
                }
            };

            statsEstat.post();

            expect(serial).to.equal('123');
            expect(levels).to.deep.equal({1: 'lvl1', 2: 'lvl2', 3: 'lvl3', 4: 'lvl4'});
            expect(post).to.equal('ml');
        });
    });
});