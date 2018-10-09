import {ensureFrame} from '../../../assets/ts/cmp/cmp-iframe';


describe('cmp-iframe', () => {
    describe('ensureFrame', () => {
        test('should add frame if not found in dom', () => {
            ensureFrame();

            expect(document.getElementsByName('__cmpLocator').length).toBe(1);
        });

        test('should not add frame if found in dom', () => {
            document.body.innerHTML = '<iframe name="__cmpLocator"></iframe>'

            ensureFrame();

            expect(document.getElementsByName('__cmpLocator').length).toBe(1);
        });
    });
});