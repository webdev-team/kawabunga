"use strict";
/**
 * https://davidwalsh.name/javascript-debounce-function
 */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
exports.default = default_1;
;
