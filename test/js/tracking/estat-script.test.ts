// ..
// Imports
//

import * as estat from '../../../assets/js/tracking/estat-script.js';

// ..
// Unit Tests
//

describe('estat-script.js', function () {
    beforeEach(function() {
        document.body.innerHTML = '<div><script></script></div>';
    });

    test('should setup real estat marker', function () {
        estat.insertScriptWithSerial('219019211308' /* rtl serial */);

        expect(global._PJS).toBe(0);
        expect(global._cmsJS).toBe(0);
        expect(global._eStatDS).toBe(1);
        expect(global.eStat_PJS).not.toBeNull();
        expect(global.eStat_CMSJS).not.toBeNull();
    });
});