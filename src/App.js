import React from "react";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    onTextChange(text) {
        this.setState({ text });
    }

    render() {
        return (
            <div className="container-m">
                <h2>Markdown Editor</h2>
                <Editor onTextChange={ (text) => this.onTextChange(text) } />
                <h2>Preview</h2>
                <Preview text={ this.state.text } />
            </div>
        )
    }
}

export default App;
