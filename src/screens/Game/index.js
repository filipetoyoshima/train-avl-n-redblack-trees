import React from 'react';

import styles from './style';

export default class Game extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.left}>

                </div>
                <div style={styles.right}>
                    <h1>
                        Qual é a opção correta?
                    </h1>
                </div>
            </div>
        )
    }
}