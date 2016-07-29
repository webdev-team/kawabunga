var utils = require('../utils');

exports.html = function (elem, html) {
    var getter = arguments.length < 2;
    if (getter) {
        return elem.innerHTML;
    } else {
        elem.innerHTML = html;
    }
};

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
    var checkable = utils.isCheckable(el);
    var getter = arguments.length < 2;
    if (getter) {
        return checkable ? el.checked : el.value;
    } else if (checkable) {
        el.checked = value;
    } else {
        el.value = value;
    }
};