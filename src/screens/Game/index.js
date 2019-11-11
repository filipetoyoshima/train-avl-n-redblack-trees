import React from 'react';

import styles from './style';

import avlOptions from './../../assets/options/avl'
import { generateTree, avlTypes } from './../../objects/tree';
import TreeNode from './../../components/TreeNode';

import ReactTooltip from 'react-tooltip';

export default class Game extends React.Component {

    state = {
        options: [],
        solution: '',
        tree: null,
        hasFinished: false,
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
            hasFinished: false,
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
            this.setState({
                hasFinished: true,
            })
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>
                    <TreeNode tree={this.state.tree} depth={0} title={"Root"}/>
                </div>
                <div style={styles.right}>
                    <h1>
                        Qual é a opção correta?
                    </h1>
                    {this.state.options.map((value, id) => {
                        return (
                            <>
                            <div
                                style={{
                                    ...styles.button,
                                    background: this.getButtonColor(value),
                                }}
                                onClick={() => this.checkAnswer(id)}
                                key={'option_' + id}
                                data-for={'option_' + id}
                                data-tip=''
                            >
                                <div style={styles.reflect}/>
                                <div style={styles.buttonLabel}>
                                    <span>{value.name}</span>
                                </div>
                            </div>
                            <ReactTooltip
                                id={'option_' + id}
                                effect='solid'
                                place='left'
                            >
                                <img
                                    style={styles.optionImg}
                                    src={value.img}
                                    alt="img"
                                />
                            </ReactTooltip>
                            </>
                        )
                    })}
                    {this.state.hasFinished ?
                        <div
                            style={{
                                ...styles.button,
                                background: 'purple',
                            }}
                            onClick={() => this.componentDidMount()}
                        >
                            <div style={styles.reflect}/>
                            <div style={styles.buttonLabel}>
                                <span>De Novo</span>
                            </div>
                        </div>
                    :
                        <></>
                    }
                </div>
            </div>
        )
    }
}