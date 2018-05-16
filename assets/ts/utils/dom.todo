// ..
// Intefaces
//

// ...


// ..
// Method 'select' (not to get confused by Array.find method)
//

let dom = function (selector:string | Node):Node[] {
    if (typeof selector === 'string') {
        return select(global.document, selector);
    } else {
        return augmentArray([selector]);
    }
};
export default dom;

function select(context:Element | Document, selector:string):Node[] {
    let toNodeArray = function (nodeList:NodeList):Node[] {
        let nodeArray = [];
        for (let i = nodeList.length; i--; nodeArray.unshift(nodeList[i])) {
        }
        return augmentArray(nodeArray);
    };

    return toNodeArray(context.querySelectorAll(selector));
}


// ..
// Augmented Array
//

function augmentArray(array:Node[]):Node[] {
    return array;
}