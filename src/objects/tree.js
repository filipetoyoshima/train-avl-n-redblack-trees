export function newTree(value, color='blue') {
    return {
        value: value,
        color: color,
        left: null,
        right: null,
    }
}

function addNode(tree, value, color='blue') {
    if (tree === null) {
        return newTree(value, color);
    } else if (value >= tree.value) {
        tree.right = addNode(tree.right, value, color);
        return tree;
    } else {
        tree.left = addNode(tree.left, value, color);
        return tree;
    }
}

function addArray(tree, arr) {
    console.log(arr.length);
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i], 'adding node')
        tree = addNode(tree, arr[i]);
    }
    return tree;
}

export function generateTree(type) {
    switch (type) {
        case 'rightSimple':
            return rightSimpleTree();
        case 'leftSimple':
            break;
        case 'middleRightRight':
            break;
        case 'middleRightLeft':
            break;
        case 'middleLeftRight':
            break;
        case 'middleLeftLeft':
            break
        default:
            break;
    }
}

function generateArray(quantity) {
    let number = Math.floor(Math.random() * 10) + 1;
    let arr = [number];
    for (let i=1; i<quantity; i++) {
        number = Math.floor(Math.random() * 10) + 1 + arr[i-1];
        arr.push(number);
    }
    return arr;
}

function rightSimpleTree() {
    let arr = generateArray(3);
    console.log(arr);
    let tree = addArray(null, arr);
    return tree;
}