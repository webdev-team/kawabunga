// ..
// Imports
//

import * as estatMarker from '../../../assets/js/tracking/estat-marker.js';
import * as estatScript from '../../../assets/js/tracking/estat-script.js';

// ..
// Unit Tests
//

let SERIAL = '219019211308';
let LEVELS = ['Home', 'lvl2', 'lvl3', 'lvl4'];
let DATA_LEVELS = LEVELS.map(level => `&quot;${level}&quot;`).join(',');
let ESTAT_TAG = '<div id="estat-marker" data-serial="' + SERIAL + '" data-levels="[' + DATA_LEVELS + ']"></div>'


describe('estat-marker.js', () => {
    let estatFunctions = {
        eStat_id: {
            serial: jest.fn(),
            niveau: jest.fn()
        },
        eStat_tag : {
            post: jest.fn()
        }
    }

    let insertScriptWithSerial = jest.spyOn(estatScript, 'insertScriptWithSerial')
        .mockImplementation((serial, apiCallback, playerCallback) => {
            global.eStat_id = estatFunctions.eStat_id;
            global.eStat_tag = estatFunctions.eStat_tag;

            apiCallback();
        });

    afterEach(() => {
        insertScriptWithSerial.mockClear();
        estatFunctions.eStat_id.serial.mockClear();
        estatFunctions.eStat_id.niveau.mockClear();
        estatFunctions.eStat_tag.post.mockClear();
    });

    describe('init', () => {
        test('should do nothing if no marker is found', () => {
            document.body.innerHTML = '<div></div>';
            estatMarker.init();

            expect(insertScriptWithSerial).toHaveBeenCalledTimes(0);
        });

        test('should ensure estat is loaded', () => {
            document.body.innerHTML = ESTAT_TAG;
            estatMarker.init();

            expect(insertScriptWithSerial).toHaveBeenCalledTimes(1);
        });

        test('should parse levels from tag', () => {
            document.body.innerHTML = ESTAT_TAG;
            estatMarker.init();

            expect(estatMarker.getLevels()).toMatchObject(['Home', 'lvl2', 'lvl3', 'lvl4']);
        });

        test('should append hash on last level', () => {
            document.body.innerHTML = ESTAT_TAG;
            estatMarker.init();

            expect(estatMarker.getLevels('hash')).toMatchObject(['Home', 'lvl2', 'lvl3', 'lvl4#hash']);
        });

        test('should call estat api', () => {
            document.body.innerHTML = ESTAT_TAG;
            estatMarker.init();

            expect(estatFunctions.eStat_id.serial).lastCalledWith(SERIAL);
            expect(estatFunctions.eStat_id.niveau).toHaveBeenCalledTimes(4);
            expect(estatFunctions.eStat_id.niveau).toBeCalledWith(1, LEVELS[0]);
            expect(estatFunctions.eStat_id.niveau).toBeCalledWith(2, LEVELS[1]);
            expect(estatFunctions.eStat_id.niveau).toBeCalledWith(3, LEVELS[2]);
            expect(estatFunctions.eStat_id.niveau).toBeCalledWith(4, LEVELS[3]);
            expect(estatFunctions.eStat_tag.post).lastCalledWith('ml');
        });
    });
});
