import App from "../components/App";
import { connect } from "react-redux";
import { createTextChangedAction } from "../actions";

const mapStateToProps = (state) => {
    return { text: state }
};

const mapDispatchToProps = (dispatch) => {
    return { onTextChange: (newText) => dispatch(createTextChangedAction(newText)) }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
