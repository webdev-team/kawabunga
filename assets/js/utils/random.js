"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
exports.uuid = function () {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};
exports.digits = function (length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
};