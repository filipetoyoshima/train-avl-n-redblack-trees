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
        options = options.map((option) => {
            return {
                ...option,
                isAnswer: option.code === pickedType.solution,
                isSelected: false,
            }
        })

        let tree = generateTree(pickedType.problem);
        this.setState({
            options: options,
            solution: pickedType.solution,
            tree: tree,
        })
    }

    getButtonColor(option) {
        let btnColor = 'blue';

        if (option.isSelected) {
            if (option.isAnswer) {
                btnColor = 'green';
            } else {
                btnColor = 'red';
            }
        }

        return btnColor;
    }

    checkAnswer(id) {
        let options = this.state.options;
        options[id].isSelected = true;

        this.setState({
            options: options,
        })

        if (options[id].code === this.state.solution) {
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
                                style={{
                                    ...styles.button,
                                    background: this.getButtonColor(value),
                                }}
                                onClick={() => this.checkAnswer(id)}
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