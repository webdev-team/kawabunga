// ..
// Imports
//

jest.mock('../../../assets/js/tracking/estat-script.js');

import * as env from '../../test-env';
import * as estatMarker from '../../../assets/js/tracking/estat-marker.js';
import * as estatScript from '../../../assets/js/tracking/estat-script.js';

// ..
// Unit Tests
//

describe('estat-marker.js', () => {
    describe('init', () => {
        let spyEstatScript = jest.spyOn(estatScript, 'insertScriptWithSerial');

        afterEach(() => {
            spyEstatScript.mockReset();
        });

        test('should do nothing if no marker is found', () => {
            env.initWithHtml('<div></div>');
            estatMarker.init();

            expect(spyEstatScript).toHaveBeenCalledTimes(0);
        });

        test('should ensure estat is loaded', () => {
            env.initWithHtml('<div id="estat-marker" data-serial="219019211308" data-levels="[&quot;Home&quot;, &quot;-&quot;, &quot;-&quot;, &quot;-&quot;]"></div>');
            estatMarker.init();

            expect(spyEstatScript).toHaveBeenCalledTimes(1);
        });
    });

    describe('getLevels', () => {
        test('should parse levels from tag', () => {
            estatMarker.levels = ['Home', 'lvl2', 'lvl3', 'lvl4'];

            expect(estatMarker.getLevels()).toMatchObject(['Home', 'lvl2', 'lvl3', 'lvl4']);
        });

        test('should append hash on last level', () => {
            estatMarker.levels = ['Home', 'lvl2', 'lvl3', 'lvl4'];

            expect(estatMarker.getLevels('hash')).toMatchObject(['Home', 'lvl2', 'lvl3', 'lvl4#hash']);
        });
    });

    describe('post', () => {
        test('should call esta api', () => {
            estatMarker.serial = '123';
            estatMarker.levels = ['lvl1', 'lvl2', 'lvl3', 'lvl4'];

            let serial = null;
            let levels = {};
            let post = null;

            global.eStat_id = {
                serial: function (value) {
                    serial = value;
                },
                niveau: function (index, name) {
                    levels[index] = name;
                }
            };

            global.eStat_tag = {
                post: function(value) {
                    post = value;
                }
            };

            estatMarker.post();

            expect(serial).toBe('123');
            expect(levels).toMatchObject({1: 'lvl1', 2: 'lvl2', 3: 'lvl3', 4: 'lvl4'});
            expect(post).toBe('ml');
        });
    });
});
