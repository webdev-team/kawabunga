// ..
// Imports
//

import * as ftvScriptDx from '../../../assets/js/advertising/ftv-script-dx';

// ..
// Unit Tests
//

describe('ftv-script.js', function () {
    describe('getDxScriptSrc', function () {
        test('should return correct script url', function () {
            let url = ftvScriptDx.getDxScriptSrc();

            expect(url).toBe('http://pub.ftv-publicite.fr/om/1.js');
        });
    });
});
