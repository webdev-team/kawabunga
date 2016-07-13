
var utils = require('./utils');

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
    return augmentArray(select(document, selector));
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

    array.isEmpty = function() {
        return this.length == 0
    }

    array.data = function(name) {
        if (this.isEmpty()) {
            return null;
        }

        return this[0].getAttribute('data-' + name);
    }

    return array;
}