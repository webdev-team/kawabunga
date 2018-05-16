
import * as userAgent from '../../../assets/js/env/user-agent';

describe('user-agent', () => {
    describe('isMobile', () => {
        test('with no param', () => {
            expect(userAgent.isMobile()).toBeFalsy();
        });

        test('with ipad user agent', () => {
            expect(userAgent.isMobile('Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10')).toBeTruthy();
        });

        test('with android user agent', () => {
            expect(userAgent.isMobile('Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36')).toBeTruthy();
        });
    });

});

