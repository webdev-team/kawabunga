"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("../../js/utils/dom");
var passmedia_popup_view_1 = require("./passmedia-popup-view");
var noop = function () { };
var POPUP_DELAY_SECONDS = 8;
var DEFAULT_OPTIONS = {
    type: '',
    htmlClass: '',
    onOk: noop,
    onClose: noop,
    afterDelay: null
};
var PassMediaPopup = /** @class */ (function () {
    function PassMediaPopup(options) {
        if (options === void 0) { options = {}; }
        this._options = __assign(__assign({}, DEFAULT_OPTIONS), options);
        this.html = this.renderPopup();
        this.appendElementToDOM();
        this.attachEvents();
    }
    PassMediaPopup.prototype.renderPopup = function () {
        return passmedia_popup_view_1.renderer.draw(this._options.type, this._options.data);
    };
    PassMediaPopup.prototype.delayProgress = function (seconds) {
        var _this = this;
        return new Promise(function (resolve) {
            var progressEl = _this.$el[0].querySelector('.progress-bar');
            if (!progressEl)
                return;
            var current = 0;
            var cssAnimationSecond = 1;
            var timerId = setInterval(function () {
                var progressPercentage = 100 * (current + cssAnimationSecond) / seconds || 0;
                progressEl.style.width = progressPercentage + "%";
                if (current == seconds) {
                    clearInterval(timerId);
                    // Auto Connect and hide popup
                    resolve();
                }
                current++;
            }, 1000);
        });
    };
    PassMediaPopup.prototype.appendElementToDOM = function () {
        var el = document.createElement('div');
        document.body.appendChild(el);
        el.innerHTML = this.html;
        this.$el = $(el);
        this.$el.addClass('passmedia ' + this._options.htmlClass);
        this.show();
    };
    PassMediaPopup.prototype.show = function () {
        this.$el.addClass('show');
    };
    PassMediaPopup.prototype.hide = function () {
        this.$el.removeClass('show');
    };
    PassMediaPopup.prototype.attachEvents = function () {
        var _this = this;
        var $btnOk = this.$el.select('[data-role="pm-popup-ok"]');
        $btnOk.on('click', function () {
            _this._options.onOk();
            _this._options.afterDelay = noop;
            _this.hide();
        });
        var $btnClose = this.$el.select('[data-role="pm-popup-close"]');
        $btnClose.on('click', function () {
            _this._options.onClose();
            _this._options.afterDelay = noop;
            _this.hide();
        });
        if (this._options.afterDelay) {
            this.delayProgress(POPUP_DELAY_SECONDS)
                .then(function () {
                _this._options.afterDelay();
                _this.hide();
            });
        }
    };
    return PassMediaPopup;
}());
exports.default = PassMediaPopup;
