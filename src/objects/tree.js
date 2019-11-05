export function newTree(value, color = 'blue') {
    return {
        value: value,
        color: color,
        left: null,
        right: null,
    }
}

function addNode(tree, value, color = 'blue') {
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
    for (let i = 0; i < arr.length; i++) {
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
            break;
        case 'randomTest':
            return randomTest();
        default:
            break;
    }
}

function generateArray(quantity) {
    let number = Math.floor(Math.random() * 10) + 1;
    let arr = [number];
    for (let i = 1; i < quantity; i++) {
        number = Math.floor(Math.random() * 10) + 1 + arr[i - 1];
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