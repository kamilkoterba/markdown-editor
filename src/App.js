import React from "react";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = () => (
    <div className="container-m">
        <h2>Markdown Editor</h2>
        <Editor />
        <h2>Preview</h2>
        <Preview />
    </div>
);

export default App;
