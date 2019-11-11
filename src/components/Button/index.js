import React from 'react';
import styles from './style';

class Button extends React.Component {

    render() {
        let color = 'blue';
        if (this.props.color) {
            color = this.props.color;
        }

        return (
            <div
                style={{
                    ...styles.button,
                    background: color,
                }}
                onClick={this.props.action}
            >
                <div style={styles.reflect}/>
                <div style={styles.buttonLabel}>
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}
 
export default Button;