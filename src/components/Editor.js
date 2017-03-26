import React from "react";

import "./Editor.css";

class Editor extends React.Component {
    render() {
        const { onTextChange } = this.props;

        return (
            <textarea
                className="editor__textarea"
                onChange={ (e) => onTextChange(e.target.value) }
            />
        )
    }
}

export default Editor;