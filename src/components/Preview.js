import React from "react";

import Remarkable from "remarkable";

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
    }

    render() {
        const text = this.md.render(this.props.text)
        return (
            <pre>{ text }</pre>
        );
    }
}

export default Preview;
