import App from "../components/App";
import { connect } from "react-redux";
import { createTextChangedAction } from "../actions";

const mapStateToProps = (state) => {
    return { text: state }
};

export default connect(
    mapStateToProps,
    { onTextChange: createTextChangedAction }
)(App);
