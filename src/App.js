import React from "react";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = ({ text, onTextChange }) => {
    return (
        <div className="container-m">
            <h2>Markdown Editor</h2>
            <Editor text={ text } onTextChange={ onTextChange } />
            <h2>Preview</h2>
            <Preview text={ text } />
        </div>
    );
};

export default App;
