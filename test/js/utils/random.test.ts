import * as random from '../../../assets/ts/utils/random';

describe('random', () => {
    describe('uuid', () => {
        test('should have correct length', () => {
            expect(random.uuid()).toHaveLength(36)
        });

        test('should never give same value twice', () => {
            expect(random.uuid()).not.toEqual(random.uuid());
        });
    });

    describe('number', () => {
        test('should have correct length', () => {
            expect(random.digits(10)).toHaveLength(10);
            expect(random.digits(2)).toHaveLength(2);
        });

        test('should never give same value twice', () => {
            expect(random.digits(3)).not.toEqual(random.digits(3));
        });
    });
});