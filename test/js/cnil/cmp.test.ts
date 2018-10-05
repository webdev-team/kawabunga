import {getConsentData, getVendorConsents, onCnilCategoriesChange, ping} from '../../../assets/ts/cnil/cmp';
import {PingReturn, VendorConsentData, VendorConsents, m6Vendors} from '../../../assets/ts/cnil/iab';
import {euconsent} from '../../../assets/ts/cnil/euconsent-cookie';
import {ALL_OFF} from '../../../assets/ts/cnil/cnil-cookie';
import {ALL_ON} from '../../../assets/js/cnil/cnil-cookie';
import allVendorsId = euconsent.allVendorIds;
import allPurposesId = euconsent.allPurposeIds;

let readSpy = jest.spyOn(euconsent.cookie, "read");
let writeSpy = jest.spyOn(euconsent.cookie, "write");

describe('cmp', () => {
    beforeEach(() => {
        readSpy.mockClear();
        writeSpy.mockClear();
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
            let consent = euconsent.newFullConsent();

            readSpy.mockReturnValue(consent);

            getConsentData('1', (vendorConsentData: VendorConsentData, success: boolean) => {
                expect(success).toBeTruthy();
                expect(vendorConsentData.gpdrApplies).toBeTruthy();
                expect(vendorConsentData.hasGlobalScope).toBeTruthy();
                expect(vendorConsentData.consentData).toBe(consent.getConsentString());

                done();
            });
        });
    });

    describe('getVendorConsents', () => {
        test('should callback with correct VendorConsents', done => {
            let consent = euconsent.newFullConsent();
            consent.setVendorsAllowed([27, 28]); // ADventori SAS and TripleLift, Inc.

            readSpy.mockReturnValue(consent);

            getVendorConsents(null, (vendorConsents: VendorConsents, success: boolean) => {
                expect(success).toBeTruthy();
                expect(vendorConsents.gpdrApplies).toBeTruthy();
                expect(vendorConsents.hasGlobalScope).toBeTruthy();
                expect(vendorConsents.purposeConsents).toEqual({1: true, 2: true, 3: true, 4: true, 5: true});
                expect(vendorConsents.vendorConsents).toEqual({27: true, 28: true});
                expect(vendorConsents.metadata).toBeTruthy(); // not empty

                done();
            });
        });

        test('should callback with filtered VendorConsents when vendorIds is not null', done => {
            let consent = euconsent.newFullConsent();
            consent.setVendorsAllowed([27, 28]); // ADventori SAS and TripleLift, Inc.

            readSpy.mockReturnValue(consent);

            getVendorConsents([27], (vendorConsents: VendorConsents, success: boolean) => {
                expect(success).toBeTruthy();
                expect(vendorConsents.gpdrApplies).toBeTruthy();
                expect(vendorConsents.hasGlobalScope).toBeTruthy();
                expect(vendorConsents.purposeConsents).toEqual({1: true, 2: true, 3: true, 4: true, 5: true});
                expect(vendorConsents.vendorConsents).toEqual({27: true});
                expect(vendorConsents.metadata).toBeTruthy(); // not empty

                done();
            });
        });
    });

    describe('onCnilCategoriesChange', () => {
        test('should create euconsent cookie if needed', () => {
            readSpy.mockReturnValue(null);

            onCnilCategoriesChange(ALL_ON);

            expect(writeSpy.mock.calls[0][0].getPurposesAllowed()).toEqual(allPurposesId());
        });

        test('should add all purposes if ads is on', () => {
            let consent = euconsent.newFullConsent();
            consent.setPurposesAllowed([]);

            readSpy.mockReturnValue(consent);

            onCnilCategoriesChange(ALL_ON);

            expect(writeSpy.mock.calls[0][0].getPurposesAllowed()).toEqual(allPurposesId());
        });

        test('should remove all purposes if ads is off', () => {
            let consent = euconsent.newFullConsent();

            readSpy.mockReturnValue(consent);

            onCnilCategoriesChange(ALL_OFF);

            expect(writeSpy.mock.calls[0][0].getPurposesAllowed()).toEqual([]);
        });
    });
});