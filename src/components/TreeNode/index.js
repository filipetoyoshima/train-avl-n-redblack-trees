import React from 'react';
import LineTo from 'react-lineto';

import styles from './style';

export default class TreeNode extends React.Component {

    renderIfExists(node) {
        if (node !== null) return (
            <TreeNode tree={node} />
        )
        else return (
            <div style={styles.container} />
        )
    }

    generateClassName = (depth, side, node) => {

        let value = side === "left" ? (node.left ? node.left.value : "null") : (node.right ? node.right.value : "null");

        return depth + side + value;
    }

    drawLine = (from, to, node) => {

        console.log(node.left !== null || node.right !== null, "aa", from, to);
        return (

            node.left !== null || node.right !== null ?

                <LineTo from={from} to={to} delay={true} borderColor='black' borderStyle='solid' borderWidth={3}/>
                :
                console.log("porr")
        )
    }

    render() {
        let node = this.props.tree;
        if (node) {
            console.log(this.props.depth, this.props.title, node.value);
        }

        if (!node) return (
            <div
                style={{
                    ...styles.child,
                    height: '120px',
                }}
            />
        )

        return (
            <>
                <div style={styles.container} className={this.props.title}>
                    <div style={styles.node}>
                        {node.value}
                    </div>
                    <div style={styles.child}>
                        <TreeNode tree={node.left} depth={this.props.depth + 1} title={this.generateClassName(this.props.depth + 1, "left", node)} />
                        {
                            this.drawLine(this.props.title, this.generateClassName(this.props.depth + 1, "left", node), node)
                        }
                    </div>
                    <div style={styles.child}>
                        <TreeNode tree={node.right} depth={this.props.depth + 1} title={this.generateClassName(this.props.depth + 1, "right", node)} />
                        {
                            this.drawLine(this.props.title, this.generateClassName(this.props.depth + 1, "right", node), node)
                        }
                    </div>
                </div>
            </>
        )
    }
}