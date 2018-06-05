import {Observable} from '../../../assets/ts/utils/observable';

describe('observable', () => {
    it('should allow to subscribe', (done) => {
        let observable = new Observable();

        observable.observe(() => {
            done();
        });

        observable.fire();
    });

    it('should allow to type Observable', (done) => {
        let expected = 'good string type';
        let observable = new Observable<string>();

        observable.observe((value: string) => {
            expect(value).toBe(expected);

            done();
        });

        observable.fire(expected);
    });
});
