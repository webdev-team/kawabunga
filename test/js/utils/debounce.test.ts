// ..
// Imports
//

import debounce from '../../../assets/ts/utils/debounce';

// ..
// Unit Tests
//

describe('debounce', () => {
    test('should call back after delay', (done) => {
        let debounced = debounce(done, 10);
        debounced();
    });

    test('should only call original method once if debounced version is spammed', (done) => {
        let count = 0;
        let original = function () {
            count++;
        };
        let debounced = debounce(original, 10);

        debounced();
        debounced();
        debounced();
        debounced();

        setTimeout(function () {
            try {
                expect(count).toBe(1);

                done();
            } catch (err) {
                done.fail(err);
            }
        }, 20);
    });
});