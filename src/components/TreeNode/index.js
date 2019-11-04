import React from 'react';
import LineTo from 'react-lineto';

import styles from './style';

export default class TreeNode extends React.Component {

    renderIfExists(node) {
        if (node !== null) return (
            <TreeNode tree={node}/>
        )
        else return (
            <div style={styles.container}/>
        )
    }

    render() {
        let node = this.props.tree;
        
        if(!node) return (
            <div
                style={{
                    ...styles.child,
                    height: '120px',
                }}
            />
        )

        return(
            <>
            <div style={styles.container}>
                <div style={styles.node}>
                    {node.value}
                </div>
                <div style={styles.child}>
                    <TreeNode tree={node.left}/>
                </div>
                <div style={styles.child}>
                    <TreeNode tree={node.right}/>
                </div>
            </div>
            </>
        )
    }
}