import React from 'react';
import Game from './../Game';

import styles from './style';

class Menu extends React.Component {
    state = {
        selected: null,
    }
    
    select(option) {
        this.setState({
            selected: option
        })
    }

    render() {
        if (this.state.selected === null) {
            return (
                <div style={styles.container}>
                    <h1 style={styles.title}>
                        O que quer treinar?
                    </h1>
                    <div
                        style={styles.button}
                        onClick={() => {this.select('AVL')}}
                    >
                        <span style={styles.buttonText}>
                            Árvores AVL
                        </span>
                    </div>
                    <div
                        style={styles.button}
                        onClick={() => {this.select('RedBlack')}}
                    >
                        <span style={styles.buttonText}>
                            Árvores Vermelha e Preta
                        </span>
                    </div>
                </div>
            )
        }
        return (
            <Game mode={this.state.selected}/>
        )
    }
}
 
export default Menu;