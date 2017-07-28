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
        spyScriptLoader.mockReset();
    });

    describe('ensureLoaded', function () {
        test('should load estat script', done => {
            //scriptLoaderMock.expects("ensureLoaded").once().returns(new Promise(resolve => resolve()))

            estatV5.ensureLoaded().then(() => {
                expect(spyScriptLoader).toHaveBeenCalledTimes(1);
                done();
            });
        });

        test('should pass estat module in resolve function', (done) => {
            done();
        });
    });
});