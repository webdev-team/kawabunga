
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
module.exports.select = module.exports;
module.exports.selectByClass = function (clazz) {
    return augmentArray(selectByClass(document, clazz));
};

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
    array.selectByMatcher = array_selectByMatcher;
    array.select = array_select;
    array.selectByClass = array_selectByClass;
    array.parent = array_parent;
    array.firstChild = array_firstChild;
    array.children = array_children;

    array.index = array_index;

    array.isEmpty = array_isEmpty;
    array.clear = array_clear;

    array.text = array_api_call.bind(array, api.text);
    array.html = array_api_call.bind(array, api.html);
    array.value = array_api_call.bind(array, api.value);

    array.data = array_data;
    array.attr = array_attr;
    array.removeAttr = array_removeAttr;

    array.css = array_css;
    array.bounds = array_bounds;
    array.addClass = array_classes_call.bind(array, classes.add);
    array.removeClass = array_classes_call.bind(array, classes.remove);
    array.hasClass = array_hasClass;

    array.before = array_insertAdjacentHTML.bind(array, 'beforebegin');
    array.prepend = array_insertAdjacentHTML.bind(array, 'afterbegin');
    array.append = array_insertAdjacentHTML.bind(array, 'beforeend');
    array.after = array_insertAdjacentHTML.bind(array, 'afterend');
    // migrated from renaissance dom api. This is akward here since it only happend on first selected node
    array.appendTag = array_append_tag;

    array.on = array_on;

    return array;
}

/**
 * Augmented array methods
 */

var array_selectByMatcher = function(selector, matcher) {
    var result = [];

    this.forEach(function(element) {
        result = result.concat(matcher(element, selector));
    });

    return augmentArray(result);
}

var array_select = function(selector) {
    return this.selectByMatcher(selector, select);
}

var array_selectByClass = function(selector) {
    return this.selectByMatcher(selector, selectByClass);
}

var array_isEmpty = function() {
    return this.length == 0
}

var array_clear = function() {
    this.forEach(function(element) {
        element.innerHTML = "";
    });
}

var array_data = function(name) {
    return this.isEmpty() ? null : this[0].getAttribute('data-' + name);
}

var array_parent = function (selector) {
    if (this.isEmpty()) {
        return augmentArray([]);
    }

    var element = this[0];
    if (selector) {
        while (!element.matches(selector)) {
            element = element.parentNode;

            if (!element) {
                return augmentArray([]);
            }
        }

        return augmentArray([element]);
    } else {
        return element.parentNode ? augmentArray([element.parentNode]) : augmentArray([]);
    }
}

var array_firstChild = function (selector) {
    if (this.isEmpty()) {
        return augmentArray([]);
    }

    var element = this[0];
    if (selector) {
        return augmentArray([element.getElementsByClassName(selector)[0]])
    }
}

var array_children = function (selector) {
    if (this.isEmpty()) {
        return augmentArray([]);
    }

    var element = this[0];
    if (selector) {
        return augmentArray(element.querySelectorAll(selector));
    } else {
        return element.children ? augmentArray(element.children) : augmentArray([]);
    }
}

var array_index = function (selector) {
    for (var index = 0; index < this.length; index++) {
        if (classes.contains(this[index], selector)) {
            return index;
        }
    }

    return -1;
}

var array_api_call = function(api, value) {
    var getter = arguments.length < 2;

    if (getter) {
        return this.length ? api(this[0]) : '';
    } else {
        this.forEach(function (element) {
            api(element, value);
        });
        return this;
    }
}

var array_attr = function (name, value) {
    var hash = name && typeof name === 'object';
    var set = hash ? setMany : setSingle;
    var setter = hash || arguments.length > 1;
    if (setter) {
        this.forEach(set);
        return this;
    } else {
        return this.length ? api.getAttr(this[0], name) : null;
    }
    function setMany (element) {
        api.manyAttr(element, name);
    }
    function setSingle (element) {
        api.attr(element, name, value);
    }
};

var array_removeAttr = function (name) {
    this.forEach(function (element) {
        element.removeAttribute(name);
    });
}

var array_css = function (name, value) {
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

var EMPTY_BOUNDS = {x: 0, y: 0, left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0};
Object.freeze(EMPTY_BOUNDS)

var array_bounds = function () {
    return this.length ? this[0].getBoundingClientRect() : EMPTY_BOUNDS;
}

var array_classes_call = function (api, value) {
    this.forEach(function (element) {
        api(element, value);
    });
    return this;
}

var array_hasClass = function (value) {
    return this.some(function (element) {
        return classes.contains(element, value);
    });
}

var array_append_tag = function(tag, options) {
    options = options || {};

    var child = global.document.createElement(tag);
    var childWrapper = module.exports.select(child);

    if (options.classes) {
        childWrapper.addClass(options.classes);
    }

    if (options.text) {
        childWrapper.text(options.text);
    }

    this[0].appendChild(child);
    return childWrapper;
};

var array_insertAdjacentHTML = function(where, html) {
    this.forEach(function (element) {
        if (utils.isElement(element)) {
            element.insertAdjacentHTML(where, html);
        }
    });
    return this;
};

var array_on = function(type, delegateSelector, callback, capture) {
    var useDelegate = false;

    if (arguments.length == 2) {
        callback = delegateSelector;
    } else if (arguments.length == 3) {
        if (typeof delegateSelector == 'function') {
            capture = callback;
            callback = delegateSelector;
        } else {
            useDelegate = true;
        }
    } else if (arguments.length == 4) {
        useDelegate = true;
    }

    this.forEach(function(element) {
        element.addEventListener(type, function(e) {
            if (useDelegate) {
                var target = e.target;

                while (target && target != element) {
                    if (target.matches(delegateSelector)) {
                        callback(e, target);
                        break;
                    }
                    target = target.parentNode;
                }
            } else {
                callback(e, element)
            }
        }, capture || false);
    });
};