
/**
 * Determines if an element is displayed using offsetWidth and offsetHeight.
 */
exports.isVisible = function(elem){
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    return (w == 0 && h == 0) ? false : (w > 0 && h > 0) ? true : elem.style.display != 'none';
};

exports.toArray = function(nodeList) {
    return Array.prototype.slice.call(nodeList);
}