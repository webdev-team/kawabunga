
exports.$find = function(selector) {
    return toArray(document.querySelectorAll(selector));
}

exports.$findOne = function(selector) {
    return toArray(document.querySelector(selector));
}

function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}