import React from "react";

import Remarkable from "remarkable";

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
    }

    parseMarkup(text) {
        return { __html: this.md.render(text) };
    }

    render() {
        const { text } = this.props;
        return (
            <div dangerouslySetInnerHTML={ this.parseMarkup(text) }></div>
        );
    }
}

export default Preview;
