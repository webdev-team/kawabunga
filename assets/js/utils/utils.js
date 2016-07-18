
/**
 * Determines if an element is displayed using offsetWidth and offsetHeight.
 */
exports.isVisible = function(elem){
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    return (w == 0 && h == 0) ? false : (w > 0 && h > 0) ? true : elem.style.display != 'none';
};

/**
 * ie8+ compatible
 * See http://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
 */
exports.toArray = function(nodeList) {
    var array = [];
    for (var i = nodeList.length; i--; array.unshift(nodeList[i]));
    return array;
}