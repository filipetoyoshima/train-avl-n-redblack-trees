import React from 'react';

import styles from './style';

import avlOptions from './../../assets/options/avl'
import { generateTree, avlTypes } from './../../objects/tree';
import TreeNode from './../../components/TreeNode';


export default class Game extends React.Component {

    state = {
        options: [],
        solution: '',
        tree: null,
    }

    componentDidMount() {
        let options = [];
        let types = [];
        switch (this.props.mode) {
            case 'AVL':
                options = avlOptions;
                types = avlTypes;
                break;
            case 'RedBlack':
                // cry
                break;
            default:
                break;
        }
        
        let pickedType = types[Math.floor(Math.random() * types.length)];

        let tree = generateTree(pickedType.problem);
        this.setState({
            options: options,
            solution: pickedType.solution,
            tree: tree,
        })

        console.log(tree, 'tree');
    }

    checkAnswer(answer) {
        if (answer === this.state.solution) {
            console.log('RESPOSTA CERTA');
        } else {
            console.log('RESPOSTA ERRADA');
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>
                    <TreeNode tree={this.state.tree} depth={0} title={"Root"}/>
                </div>
                <div style={styles.right}>
                    <h1 >
                        Qual é a opção correta?
                    </h1>
                    {this.state.options.map((value, id) => {
                        return (
                            <div
                                style={styles.button}
                                onClick={() => this.checkAnswer(value.code)}
                                key={'option_' + id}
                            >
                                <span>{value.name}</span>
                                <br />
                                <img
                                    style={styles.optionImg}
                                    src={value.img}
                                    alt="img"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}