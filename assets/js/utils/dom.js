
// default method is select at document level
module.exports = function (selector) {
    return augmentArray(select(document, selector));
}

/**
 * method called 'select' not to get confused with Array.find method
 */
module.exports.select = module.exports


function select(context, selector) {
    return toArray(context.querySelectorAll(selector));
}

function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function augmentArray(array) {
    array.select = function(selector) {
        var result = [];

        this.forEach(function(element) {
            result = result.concat(select(element, selector));
        })

        return augmentArray(result);
    }

    return array;
}