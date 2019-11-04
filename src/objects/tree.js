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
    for (let i=0; i<arr.length; i++) {
        tree = addNode(tree, arr[i]);
    }
    return tree;
}

export function generateTree(type) {
    let order = [1]; 
    switch (type) {
        
        case 'doubleRight':
            order = [1, 0, 3, 2, 4, 5];
            break;
        
        case 'doubleLeft':
            order = [4, 5, 2, 1, 3, 0];
            break;
        
        case 'middleRightRight':
            order = [1, 0, 4, 5, 2, 3];
            break;
    
        case 'middleRightLeft':
            order = [1, 0, 4, 5, 3, 2];
            break;
        
        case 'middleLeftRight':
            order = [4, 5, 1, 0, 2, 3];
            break;

        case 'middleLeftLeft':
            order = [4, 5, 1, 0, 3, 2];
            break;

        case 'randomTest':
            return randomTest();
        
        default:
            break;
    }
    return createTreeWithOrder(order);
}

export const avlTypes = [
    'doubleRight',
    'middleRightRight',
    'middleRightLeft',
    'doubleLeft',
    'middleLeftRight',
    'middleLeftLeft',
]

function generateArray(quantity) {
    let number = Math.floor(Math.random() * 10) + 1;
    let arr = [number];
    for (let i=1; i<quantity; i++) {
        number = Math.floor(Math.random() * 10) + 1 + arr[i-1];
        arr.push(number);
    }
    return arr;
}

function createTreeWithOrder(order) {
    let arr = generateArray(order.length);
    arr = reorderArray(arr, order);
    let tree = addArray(null, arr);
    return tree;
}

function randomTest() {
    let arr = generateArray(8);
    let tree = addArray(null, shuffle(arr));
    return tree;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function reorderArray(arr, order) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        newArr.push(arr[order[i]]);
    }
    return newArr;
}