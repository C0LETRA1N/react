import { withStateHandlers, compose } from "recompose";

const initialState = {
    firstName: "",
};

const onFirstNameChange = event => ({
    firstName: {
        value: event.target.value,
        isDirty: true
    }
});

const withTextFieldState = withStateHandlers(initialState, {
    onFirstNameChange
});

export default withTextFieldState;