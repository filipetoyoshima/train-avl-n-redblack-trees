import React from 'react';

import styles from './style';

import avlOptions from './../../assets/options/avl'
import { generateTree } from './../../objects/tree';

export default class Game extends React.Component {

    state = {
        options: [],
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
        this.setState({
            options : options
        })

        let tree = generateTree('rightSimple');
        console.log(tree);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>

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