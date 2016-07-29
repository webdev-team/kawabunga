
/**
 * Determines if an element is displayed using offsetWidth and offsetHeight.
 */
exports.isVisible = function(elem){
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    return (w == 0 && h == 0) ? false : (w > 0 && h > 0) ? true : elem.style.display != 'none';
};

/**
 * ie8+ compatible
 * See http://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
 */
exports.toArray = function(nodeList) {
    var array = [];
    for (var i = nodeList.length; i--; array.unshift(nodeList[i]));
    return array;
};

var elementObjects = typeof HTMLElement === 'object';

exports.isElement = function (obj) {
    return elementObjects ? obj instanceof HTMLElement : isElementObject(obj);
}

exports.isArray = function (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}

exports.isCheckable = function (elem) {
    return 'checked' in elem && elem.type === 'radio' || elem.type === 'checkbox';
}

function isElementObject (obj) {
    return obj &&
        typeof obj === 'object' &&
        typeof obj.nodeName === 'string' &&
        obj.nodeType === 1;
}

exports.hyphenToCamel = function (hyphens) {
    var part = /-([a-z])/g;
    return hyphens.replace(part, function (g, m) {
        return m.toUpperCase();
    });
}

exports.hyphenate = function (text) {
    var camel = /([a-z])([A-Z])/g;
    return text.replace(camel, '$1-$2').toLowerCase();
}