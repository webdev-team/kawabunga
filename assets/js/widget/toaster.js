"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Toaster = /** @class */ (function () {
    function Toaster(message) {
        if (message === void 0) { message = 'Hello toaster'; }
        var _this = this;
        this.showing = false;
        this.element = this.buildElement(message);
        this.element.addEventListener("animationend", function () {
            if (!_this.showing) {
                _this.removeElement();
            }
        });
    }
    Toaster.prototype.show = function () {
        var _this = this;
        this.showing = true;
        this.element.classList.remove('toaster-hide');
        this.element.classList.add('toaster-show');
        this.injectElement();
        setTimeout(function () { return _this.hide(); }, 3000);
    };
    Toaster.prototype.hide = function () {
        this.showing = false;
        this.element.classList.add('toaster-hide');
        this.element.classList.remove('toaster-show');
    };
    Toaster.prototype.injectElement = function () {
        document.body.appendChild(this.element);
    };
    Toaster.prototype.removeElement = function () {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    };
    Toaster.prototype.buildElement = function (message) {
        var div = document.createElement("div");
        div.classList.add('toaster');
        div.innerText = message;
        return div;
    };
    return Toaster;
}());
exports.default = Toaster;
