export function newTree(node) {
    // node object should have {
    //     value: int,
    //     color: string,
    //     isNew: bool,
    // }
    return {
        ...node,
        left: null,
        right: null,
    }
}

function arrOfNodes(arr) {
    let nodes = arr.map((value) => {
        return {
            value: value,
            color: 'blue',
            isNew: false,
        }
    })
    return nodes;
}

function addNode(tree, node) {
    if (tree === null) {
        return newTree(node);
    } else if (node.value >= tree.value) {
        tree.right = addNode(tree.right, node);
        return tree;
    } else {
        tree.left = addNode(tree.left, node);
        return tree;
    }
}

function addArray(tree, arr) {
    for (let i=0; i<arr.length-1; i++) {
        tree = addNode(tree, arr[i]);
    }
    if (arr[arr.length-1] !== null) {
        let lastNode = {
            ...arr[arr.length-1],
            isNew: true,
        }
        console.log(lastNode);
        tree = addNode(tree, lastNode);
    }
    return tree;
}

export function generateTree(type) {
    let order = [1]; 
    switch (type) {       
        case 'AVLdoubleRight':
            order = [1, 0, 3, 2, 4, 5];
            break;
        
        case 'AVLdoubleLeft':
            order = [4, 5, 2, 1, 3, 0];
            break;
        
        case 'AVLmiddleRightRight':
            order = [1, 0, 4, 5, 2, 3];
            break;
    
        case 'AVLmiddleRightLeft':
            order = [1, 0, 4, 5, 3, 2];
            break;
        
        case 'AVLmiddleLeftRight':
            order = [4, 5, 1, 0, 2, 3];
            break;

        case 'AVLmiddleLeftLeft':
            order = [4, 5, 1, 0, 3, 2];
            break;

        case 'AVLrandomTest':
            return randomTest();
        
        default:
            break;
    }
    return createTreeWithOrder(order);
}

export const avlTypes = [
    {
        problem: 'AVLdoubleRight',
        solution: 'simpleRight'
    },
    {
        problem: 'AVLmiddleRightRight',
        solution: 'doubleRight'
    },
    {
        problem: 'AVLmiddleRightLeft',
        solution: 'doubleRight'
    },
    {
        problem: 'AVLdoubleLeft',
        solution: 'simpleLeft'
    },
    {
        problem: 'AVLmiddleLeftRight',
        solution: 'doubleLeft'
    },
    {
        problem: 'AVLmiddleLeftLeft',
        solution: 'doubleLeft'
    },
]

function generateArray(quantity) {
    let number = Math.floor(Math.random() * 10) + 1;
    let arr = [number];
    for (let i = 1; i < quantity; i++) {
        number = Math.floor(Math.random() * 10) + 1 + arr[i - 1];
        arr.push(number);
    }
    return arr;
}

function createTreeWithOrder(order) {
    let arr = generateArray(order.length);
    arr = reorderArray(arr, order);
    let nodes = arrOfNodes(arr);
    let tree = addArray(null, nodes);
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