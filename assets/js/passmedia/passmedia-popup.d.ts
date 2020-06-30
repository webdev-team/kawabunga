import { PopupData } from './passmedia-popup-view';
interface PassMediaPopupOptions {
    type?: string;
    htmlClass?: any;
    onOk?: any;
    onClose?: any;
    afterDelay?: any;
    data?: PopupData;
}
export default class PassMediaPopup {
    $el: any;
    html: string;
    _options: PassMediaPopupOptions;
    constructor(options?: PassMediaPopupOptions);
    renderPopup(): any;
    delayProgress(seconds: any): Promise<unknown>;
    appendElementToDOM(): void;
    show(): void;
    hide(): void;
    attachEvents(): void;
}
export {};
