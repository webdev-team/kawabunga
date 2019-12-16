import * as $ from "../../js/utils/dom";
import {PopupData, renderer} from './passmedia-popup-view';


const noop = () => {};
const POPUP_DELAY_SECONDS = 8;

interface PassMediaPopupOptions {
    type?: string;
    htmlClass?: any,
    onOk?: any;
    onClose?: any;
    afterDelay?: any;
    data?: PopupData;
}

const DEFAULT_OPTIONS: PassMediaPopupOptions = {
    type: '',
    htmlClass: '',
    onOk: noop,
    onClose: noop,
    afterDelay: null
};


export default class PassMediaPopup {
    $el: any;
    html: string;
    _options: PassMediaPopupOptions;

    constructor(options: PassMediaPopupOptions = {}) {
        this._options = {...DEFAULT_OPTIONS, ...options};

        this.html = this.renderPopup();
        this.appendElementToDOM();
        this.attachEvents();
    }

    renderPopup() {
        return renderer.draw(this._options.type, this._options.data);
    }

    delayProgress(seconds) {
        return new Promise((resolve) => {
            let progressEl = <HTMLProgressElement>this.$el[0].querySelector('.progress-bar');

            if (!progressEl) return;

            let current = 0;
            let cssAnimationSecond = 1;

            let timerId = setInterval(() => {
                let progressPercentage = 100 * (current + cssAnimationSecond) / seconds || 0;
                progressEl.style.width = `${progressPercentage}%`;
                if (current == seconds) {
                    clearInterval(timerId);
                    // Auto Connect and hide popup
                    resolve();
                }
                current++;
            }, 1000);
        });
    }

    appendElementToDOM() {
        let el = document.createElement('div');
        document.body.appendChild(el);
        el.innerHTML = this.html;
        this.$el = $(el);
        this.$el.addClass('passmedia ' + this._options.htmlClass);
        this.show();
    }

    show() {
        this.$el.addClass('show');
    }

    hide() {
        this.$el.removeClass('show');
    }

    attachEvents() {
        let $btnOk = this.$el.select('[data-role="pm-popup-ok"]');
        $btnOk.on('click', () => {
            this._options.onOk();
            this._options.afterDelay = noop;
            this.hide();
        });

        let $btnClose = this.$el.select('[data-role="pm-popup-close"]');
        $btnClose.on('click', () => {
            this._options.onClose();
            this._options.afterDelay = noop;
            this.hide();
        });

        if (this._options.afterDelay) {
            this.delayProgress(POPUP_DELAY_SECONDS)
                .then( () => {
                    this._options.afterDelay();
                    this.hide();
                });
        }
    }
}
