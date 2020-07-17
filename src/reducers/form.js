import { createStore } from 'redux';

function formReducer(state = 'FormReducer text', action) {
    return state;
}
const store = createStore(formReducer);
console.log(store.getState());