import {getConsentData, ping} from '../../../assets/ts/cnil/cmp';
import {PingReturn, VendorConsentData} from '../../../assets/ts/cnil/iab';
import {euconsent} from '../../../assets/ts/cnil/euconsent-cookie';

let readSpy = jest.spyOn(euconsent.cookie, "read");

describe('cmp', () => {
    beforeEach(() => {
        readSpy.mockClear();
    });

    describe('ping', () => {
        test('should callback with correct PingReturn', done => {
            ping((pingReturn: PingReturn, success: boolean) => {
                expect(success).toBeTruthy();
                expect(pingReturn.gpdrAppliesGlobaly).toBeTruthy();
                expect(pingReturn.cmpLoaded).toBeTruthy();
                done();
            });
        });
    });

    describe('getConsentData', () => {
        test('should callback with correct VendorConsentData', done => {
            let consent = euconsent.newFullConsent()

            readSpy.mockReturnValue(consent);

            getConsentData('1',(vendorConsentData: VendorConsentData, success: boolean) => {
                expect(success).toBeTruthy();
                expect(vendorConsentData.consentData).toBe(consent.getConsentString());
                expect(vendorConsentData.gpdrApplies).toBeTruthy();
                expect(vendorConsentData.hasGlobalScope).toBeTruthy();

                done();
            });
        });
    });
});