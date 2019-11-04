import React from 'react';
import LineTo from 'react-lineto';

import styles from './style';

export default class TreeNode extends React.Component {

    componentDidMount() {
        console.log(this.props.tree, "tree");
    }

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
        
        if(!node) return <></>;

        return(
            <>
            <div style={styles.container}>
                <div style={styles.node}>
                    {node.value}
                </div>
                <div>
                    {this.renderIfExists(node.right)}
                    {this.renderIfExists(node.left)}
                </div>
            </div>
            </>
        )
    }
}