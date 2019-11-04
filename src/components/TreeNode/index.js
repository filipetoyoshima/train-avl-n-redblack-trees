import React from 'react';
import LineTo from 'react-lineto';

export default class TreeNode extends React.Component {

    componentDidMount() {
        console.log(this.props.tree, "tree");
    }

    renderIfExists(node) {
        if (node !== null) return (
            <TreeNode tree={node}/>
        )
    }

    render() {
        let node = this.props.tree;
        if(!node) return <></>;
        return(
            <>
            <div>
                {node.value}
            </div>
            {this.renderIfExists(node.right)}
            {this.renderIfExists(node.left)}
            </>
        )
    }
}