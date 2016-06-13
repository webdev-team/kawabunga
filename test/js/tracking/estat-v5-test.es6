let chai = require('chai')
let env = require('../test-env')
let sinon = require('sinon');

let proxyquire = require('proxyquire').noPreserveCache();

let expect = chai.expect;

describe('estat-v5.js', () => {
    let scriptLoader = {}
    let estatV5 = null

    beforeEach(function () {
        env.initWithEmptyHtml()

        estatV5 = proxyquire('../../../assets/js/tracking/estat-v5', {
            '../utils/script-loader': scriptLoader
        })
    })

    describe('ensureLoaded', () => {
        it('should load estat script', (done) => {
            var scriptLoaderMock = sinon.mock(scriptLoader)
            scriptLoaderMock.expects("ensureLoaded").once().returns(new Promise(resolve => resolve()))

            estatV5.ensureLoaded().then(() => {
                scriptLoaderMock.verify()

                done()
            })
        })

        it('should pass estat module in resolve function', (done) => {
            var scriptLoaderMock = sinon.mock(scriptLoader)
            scriptLoaderMock.expects("ensureLoaded").once().returns(new Promise(resolve => resolve()))

            estatV5.ensureLoaded().then((module) => {
                expect(module).to.deep.equal(estatV5)

                done()
            })
        })
    })

    describe('readPageTag', () => {
        it('should read page tag from html', (done) => {
            env.initWithHtml('<div data-role="estat" data-serial="123" data-level1="level1" data-level2="level2" data-level3="level3" data-level4="level4"></div>');

            global.eStatTag = class eStatTag {
                constructor(config) {
                    expect(config.serial).to.equal('123')
                    expect(config.levels.level_1).to.equal('level1')
                    expect(config.levels.level_2).to.equal('level2')
                    expect(config.levels.level_3).to.equal('level3')
                    expect(config.levels.level_4).to.equal('level4')

                    done()
                }
            }

            estatV5.readPageTag()
        })
    })

    describe('createStreamtTag', () => {
        it('should create estat stream tag', (done) => {
            global.eStatTag = class eStatTag {
                constructor(config) {
                    expect(config.serial).to.equal(241041208720)
                    expect(config.measure).to.equal('streaming')

                    done()
                }
            }

            var votreCallbackDePosition = () => {}
            var playerObject = {}

            estatV5.createStreamTag({
                serial: 241041208720,
                measure: "streaming",
                streaming: {
                    diffusion: "replay",
                    callbackPosition: votreCallbackDePosition,
                    playerObj: playerObject,
                    playerName: "player",
                    streamName: "JT-20141106",
                    streamDuration: "6000"
                },
                levels: {level_1: "Film", level_2: "Cinéma"}
            })
        })
    })
})