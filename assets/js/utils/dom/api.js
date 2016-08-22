var utils = require('../utils');

exports.html = function (elem, html) {
    var getter = arguments.length < 2;
    if (getter) {
        return elem.innerHTML;
    } else {
        elem.innerHTML = html;
    }
};

/**
 * Using innerText if defined, textContent otherwise
 * Beware of http://perfectionkills.com/the-poor-misunderstood-innerText/
 */
exports.text = function (elem, text) {
    var checkable = utils.isCheckable(elem);
    var getter = arguments.length < 2;
    if (getter) {
        return checkable ? elem.value : elem.innerText || elem.textContent;
    } else if (checkable) {
        elem.value = text;
    } else {
        elem.innerText = elem.textContent = text;
    }
};

exports.value = function (el, value) {
    var getter = arguments.length < 2;
    if (getter) {
        return el.value;
    }  else {
        el.value = value;
    }
};


exports.attr = function (el, name, value) {
    if (!utils.isElement(el)) {
        return;
    }
    if (value === null || value === void 0) {
        el.removeAttribute(name); return;
    }
    var camel = utils.hyphenToCamel(name);
    if (camel in el) {
        el[camel] = value;
    } else {
        var hyphenate = utils.hyphenate(name);
        el.setAttribute(hyphenate, value);
    }
};

exports.getAttr = function (el, name) {
    var camel = utils.hyphenToCamel(name);
    if (camel in el) {
        return el[camel];
    } else if (el.getAttribute) {
        return el.getAttribute(name);
    }
    return null;
};

exports.manyAttr = function (elem, attrs) {
    Object.keys(attrs).forEach(function (attr) {
        exports.attr(elem, attr, attrs[attr]);
    });
};