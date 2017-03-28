import React from "react";

import "./Editor.css";

class Editor extends React.Component {
    render() {
        const { text, onTextChange } = this.props;

        return (
            <textarea
                className="editor__textarea"
                defaultValue={ text }
                onChange={ (e) => onTextChange(e.target.value) }
            />
        )
    }
}

export default Editor;
