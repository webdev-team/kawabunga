// ..
// Imports
//

import * as ftvScriptDx from '../../../assets/js/advertising/ftv-script-dx';

// ..
// Unit Tests
//

describe('ftv-script.js', () => {
    describe('getDxScriptSrc', () => {
        test('should return correct script url', () => {
            let url = ftvScriptDx.getDxScriptSrc();

            expect(url).toBe('http://pub.ftv-publicite.fr/om/1.js');
        });
    });
});
