import React from 'react';

import styles from './style';

import avlOptions from './../../assets/options/avl'
import { generateTree, avlTypes } from './../../objects/tree';
import TreeNode from './../../components/TreeNode';

export default class Game extends React.Component {

    state = {
        options: [],
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
            default:
                break;
        }
        
        let pickedType = types[Math.floor(Math.random() * types.length)];

        let tree = generateTree(pickedType);
        this.setState({
            options : options,
            tree: tree,
        })

        console.log(tree);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>
                    <TreeNode tree={this.state.tree}/>
                </div>
                <div style={styles.right}>
                    <h1>
                        Qual é a opção correta?
                    </h1>
                    {this.state.options.map((value, id) => {
                        return (
                            <div
                                style={styles.button}
                                key={'option_' + id}
                            >
                                <span>{value.name}</span>
                                <br/>
                                <img
                                    style={styles.optionImg}
                                    src={value.img}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}