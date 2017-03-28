import { TEXT_CHANGED } from "./actions";

export default (state = "# Title", {type, newText}) => {
    if (type === TEXT_CHANGED) {
        return newText;
    }
    return state;
}
