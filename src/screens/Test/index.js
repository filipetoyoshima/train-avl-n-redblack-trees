import React, { Component } from 'react';

import styles from './style';

class Test extends Component {
    render() {
        console.log(styles);
        if (this.props.q < 1) 
            return (
                <div
                    id="empty"
                    style={{
                        ...styles.child,
                        height: '120px',
                    }}
                />
            );
        return (
            <div
                style={{
                    ...styles.container,
                    // background: '#cfc',
                }}
            >
                <div style={{
                    ...styles.parent,
                    // background: '#afa',
                }}>
                    <div style={styles.ball}/>
                </div>
                <div>
                    <div style={{
                        ...styles.child,
                        // background: '#faa'
                    }}>
                        <Test q={this.props.q - 1}/>
                    </div>
                    <div style={{
                        ...styles.child,
                        // background: '#aaf'
                    }}>
                        <Test q={this.props.q - 2}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Test;