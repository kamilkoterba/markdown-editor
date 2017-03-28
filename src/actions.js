export const TEXT_CHANGED = "TEXT_CHANGED";

export const createTextChangedAction = (newText) => {
    return { type: TEXT_CHANGED, newText};
};
