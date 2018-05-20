export default class Toaster {
    element: any;
    showing: boolean;
    constructor(message?: string);
    show(): void;
    hide(): void;
    injectElement(): void;
    removeElement(): void;
    buildElement(message: any): HTMLDivElement;
}
