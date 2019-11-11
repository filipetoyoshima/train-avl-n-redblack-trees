import React from 'react';
import Game from './../Game';
import Button from './../../components/Button';

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
                    <Button
                        action={() => this.select('AVL')}
                        text='Árvores AVL'
                    />
                    <Button
                        action={() => this.select('RedBlack')}
                        text='Árvores Vermelha e Preta'
                    />
                </div>
            )
        }
        return (
            <Game
                mode={this.state.selected}
                back={() => this.select(null)}    
            />
        )
    }
}
 
export default Menu;