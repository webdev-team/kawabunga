import {CmpDidomi, Purpose} from '../../../assets/ts/cmp/didomi'

describe('didomi', () => {
    beforeEach(() => {
        window.flags = ['tcfv2'];
    });

    afterEach(() => {
        window.flags = null;
    });

    test('toPurposeId', () => {
        expect(CmpDidomi.toPurposeId(Purpose.ADS)).toEqual('publicite-qfTFazXj')
    })
});