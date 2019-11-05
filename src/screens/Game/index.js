import React from 'react';

import styles from './style';

import avlOptions from './../../assets/options/avl'
import { generateTree } from './../../objects/tree';
import TreeNode from './../../components/TreeNode';
import LineTo from 'react-lineto';


export default class Game extends React.Component {

    state = {
        options: [],
        tree: null,
    }

    componentDidMount() {
        let options = [];
        switch (this.props.mode) {
            case 'AVL':
                options = avlOptions;
                break;
            default:
                break;
        }

        let tree = generateTree('randomTest');
        this.setState({
            options: options,
            tree: tree,
        })

        console.log(tree, 'tree');
    }

    render() {
        {
            console.log(this.state.tree);
        }
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
                                key={'option_' + id}
                            >
                                <span>{value.name}</span>
                                <br />
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