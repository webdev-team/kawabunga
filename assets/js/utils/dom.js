
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

    array.parent = function (selector) {
        if (selector) {
            var element = this.isEmpty() ? null : this[0];
            if (element) {
                while ((element = element.parentElement) && !((element.matches || element.matchesSelector).call(element, selector)));
                return module.exports.select(element);
            }
            return [];
        }
        return this.isEmpty() ? null : module.exports.select(this[0].parentNode);
    }

    /**
     * Using textContent if defined, innerText otherwise
     * Beware of http://perfectionkills.com/the-poor-misunderstood-innerText/
     */

    function keyValue (key, value) {
        var getter = arguments.length < 2;
        if (getter) {
            return this.length ? api[key](this[0]) : '';
        }
        this.forEach(function (elem) {
            api[key](elem, value);
        });
        return this;
    }

    function keyValueProperty (prop) {
        array[prop] = function accessor (value) {
            var getter = arguments.length < 1;
            if (getter) {
                return keyValue.call(this, prop);
            }
            return keyValue.call(this, prop, value);
        };
    }
    ['html', 'text', 'value'].forEach(keyValueProperty);


    array.clear = function () {
        this[0].innerHTML = "";
        return this[0];
    }

    array.appendTag = function(tag, options) {
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

    array.attr = function (name, value) {
        var hash = name && typeof name === 'object';
        var set = hash ? setMany : setSingle;
        var setter = hash || arguments.length > 1;
        if (setter) {
            this.forEach(set);
            return this;
        } else {
            return this.length ? api.getAttr(this[0], name) : null;
        }
        function setMany (elem) {
            api.manyAttr(elem, name);
        }
        function setSingle (elem) {
            api.attr(elem, name, value);
        }
    };

    array.removeAttr = function (name) {
        if (!this.isEmpty()) {
            this.forEach(function (el) {
                el.removeAttribute(name);
            })
        }
    }

    array.on = function(type, delegateSelector, callback, capture) {
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

    var funcInsert = [['before', 'beforebegin'],
        ['prepend', 'afterbegin'],
        ['append', 'beforeend'],
        ['after', 'afterend']];
    funcInsert.forEach(insertMethods);

    function insertMethods (data) {
        array[data[0]] = function (html) {
            this.forEach(function (el) {
                if (utils.isElement(el)) {
                    el.insertAdjacentHTML(data[1], html);
                }
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