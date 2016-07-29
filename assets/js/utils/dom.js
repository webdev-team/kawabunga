
var utils = require('./utils');
var domCss = require('./dom/css');
var classes = require('./dom/classes');
var api = require('./dom/api');

/**
 * Work in progress, added features as needed. Inspired by :
 * - jquery
 * - https://github.com/bevacqua/dominus
 * - https://github.com/npm-dom/domquery
 * - https://github.com/component/dom
 * Aims to provide simple dom handling methods compatible with testing and browserify
 */

// default method is select at document level
module.exports = function (selector) {
    if (utils.isElement(selector)) {
        return augmentArray([selector]);
    } else {
        return augmentArray(select(document, selector));
    }
}

/**
 * method called 'select' not to get confused with Array.find method
 */
module.exports.select = module.exports
module.exports.selectByClass = function (clazz) {
    return augmentArray(selectByClass(document, clazz));
}

function select(context, selector) {
    return utils.toArray(context.querySelectorAll(selector));
}

/**
 * selecting by class (getElementsByClassName) is a bit easier and faster than querySelectorAll
 * but doesn't work on ie <= i8 (http://caniuse.com/#search=getElementsByClassName)
 * http://stackoverflow.com/questions/30473141/difference-between-getelementsbyclassname-and-queryselectorall
 */
function selectByClass(context, clazz) {
    return utils.toArray(context.getElementsByClassName(clazz));
}

function augmentArray(array) {
    array.selectByMatcher = function(selector, matcher) {
        var result = [];

        this.forEach(function(element) {
            result = result.concat(matcher(element, selector));
        });

        return augmentArray(result);
    }

    array.select = function(selector) {
        return this.selectByMatcher(selector, select);
    }

    array.selectByClass = function(selector) {
        return this.selectByMatcher(selector, selectByClass);
    }

    array.find = function(selector, clazz) {
        return this.selectByMatcher(clazz, selector);
    }

    array.isEmpty = function() {
        return this.length == 0
    }

    array.data = function(name) {
        return this.isEmpty() ? null : this[0].getAttribute('data-' + name);
    }

    /**
     * Using textContent if defined, innerText otherwise
     * Beware of http://perfectionkills.com/the-poor-misunderstood-innerText/
     */

    array.html = function (elem, html) {
        var getter = arguments.length < 2;
        if (getter) {
            return elem.innerHTML;
        } else {
            elem.innerHTML = html;
        }
    };

    array.text = function (elem, text) {
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

    array.value = function (el, value) {
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

    array.clear = function () {
        this[0].innerHTML = "";
        return this[0];
    }

    /*array.appendTag = function(tag, options) {
        options = options || {};

        var child = global.document.createElement(tag);

        var childWrap = this.select(child);

        if (options.classes) {
            childWrap.addClass(options.classes);
        }

        if (options.text) {
            childWrap.text(options.text);
        }

        this.element.appendChild(child);

        return childWrap;
    };*/

    array.on = function(type, callback, capture) {
        this.forEach(function(element) {
            element.addEventListener(type, function(e) {
                callback(e, element)
            }, capture || false);
        });
    }

    array.css = function (name, value) {
        var props;
        var many = name && typeof name === 'object';
        var getter = !many && typeof value === 'undefined';
        if (getter) {
            return this.length ? domCss.getCss(this[0], name) : null;
        }
        if (many) {
            props = name;
        } else {
            props = {};
            props[name] = value;
        }
        this.forEach(domCss.setCss(props));
        return this;
    }

    var funcClasses = [['addClass', classes.add],
        ['removeClass', classes.remove]];
    funcClasses.forEach(mapMethods);

    function mapMethods (data) {
        array[data[0]] = function (value) {
            this.forEach(function (elem) {
                data[1](elem, value);
            });
            return this;
        };
    }

    array.hasClass = function (value) {
        return this.some(function (elem) {
            return classes.contains(elem, value);
        });
    };

    return array;
}