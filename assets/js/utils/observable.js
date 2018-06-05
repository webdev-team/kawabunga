"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable() {
        this.handlers = [];
    }
    Observable.prototype.observe = function (handler) {
        this.handlers.push(handler);
    };
    Observable.prototype.fire = function (message) {
        this.handlers.forEach(function (handler) {
            handler(message);
        });
    };
    return Observable;
}());
exports.Observable = Observable;
