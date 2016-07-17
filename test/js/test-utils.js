exports.click = function(target) {
    exports.fireMouseEvent('click', target);
};

exports.fireMouseEvent = function(type, target) {
    var mouseEvent = global.document.createEvent("MouseEvents");

    mouseEvent.initEvent(type, true, true);

    target.dispatchEvent(mouseEvent);
};