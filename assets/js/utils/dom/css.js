var utils = require('../utils');
var numericCssProperties = {
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'widows': true,
    'z-index': true,
    'zoom': true
};
var numeric = /^\d+$/;

exports.getCss = function (el, prop) {

    if (!utils.isElement(el)) {
        return null;
    }

    var hprop = utils.hyphenate(prop);
    var result = window.getComputedStyle(el)[hprop];
    if (prop === 'opacity' && result === '') {
        return 1;
    }
    if (result.substr(-2) === 'px' || numeric.test(result)) {
        return parseFloat(result, 10);
    }
    return result;
};

exports.setCss = function (props) {
    var mapped = Object.keys(props).filter(bad).map(expand);

    function bad (prop) {
        var value = props[prop];
        return value !== null && value === value;
    }
    function expand (prop) {
        var hprop = utils.hyphenate(prop);
        var value = props[prop];
        if (typeof value === 'number' && !numericCssProperties[hprop]) {
            value += 'px';
        }
        return {
            name: hprop, value: value
        };
    }
    return function (el) {
        if (!utils.isElement(el)) {
            return;
        }
        mapped.forEach(function (prop) {
            el.style[prop.name] = prop.value;
        });
    };
};