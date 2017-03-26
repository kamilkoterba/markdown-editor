import React from "react";

class Editor extends React.Component {
    render() {
        const { onTextChange } = this.props;

        return (
            <input onChange={ (e) => onTextChange(e.target.value) } />
        )
    }
}

export default Editor;