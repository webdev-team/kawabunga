// ..
// Imports
//

jest.mock('../../../assets/js/utils/script-loader.js');

import * as env from '../../test-env';
import * as estatV5 from '../../../assets/js/tracking/estat-v5.js';
import * as scriptLoader from '../../../assets/js/utils/script-loader.js';

// ..
// Unit Tests
//

describe('estat-script.js', function () {
    let spyScriptLoader = jest.spyOn(scriptLoader, 'ensureLoaded');

    beforeEach(() => {
        env.initWithHtml('<div></div>');
    });
    afterEach(() => {
        spyScriptLoader.mockRestore();
    });

    describe('ensureLoaded', function () {
        test('should load estat script', done => {
            estatV5.ensureLoaded().then(() => {
                expect(spyScriptLoader).toHaveBeenCalledTimes(1);
                done();
            });
        });

        test('should pass estat module in resolve function', (done) => {
            estatV5.ensureLoaded().then((module) => {
                expect(spyScriptLoader).toHaveBeenCalledTimes(1);
                expect(module).toBe(estatV5);
                done();
            });
        });
    });

    describe('readPageConfig', () => {
        test('should read page tag from html', () => {
            env.initWithHtml('<div data-role="estat" data-serial="123" data-level1="level1" data-level2="level2" data-level3="level3" data-level4="level4"></div>');

            expect(estatV5.readPageConfig()).toMatchObject({
                serial: '123',
                measure: 'page',
                levels: {
                    level_1: 'level1',
                    level_2: 'level2',
                    level_3: 'level3',
                    level_4: 'level4'
                }
            });
        });

        test('should read page tag with crmID from html', () => {
            env.initWithHtml('<div data-role="estat" data-serial="123" data-level1="level1" data-level2="level2" data-level3="level3" data-level4="level4" data-crmID="idxxx"></div>');

            expect(estatV5.readPageConfig()).toMatchObject({
                serial: '123',
                measure: 'page',
                levels: {
                    level_1: 'level1',
                    level_2: 'level2',
                    level_3: 'level3',
                    level_4: 'level4'
                },
                crmID: 'idxxx'
            });
        });
    });

    describe('createEstatTag', () => {
        test('should create estat stream tag', done => {
            global.eStatTag = class eStatTag {
                constructor(config) {
                    expect(config.serial).toBe(241041208720);
                    expect(config.measure).toBe('streaming');

                    done();
                }
            };

            let votreCallbackDePosition = () => {};
            let playerObject = {};

            estatV5.createEstatTag({
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
            });
        });
    });
});