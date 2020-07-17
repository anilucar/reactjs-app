import { createStore } from 'redux';

function loginReducer(state = 'LoginReducer text', action) {
    return state;
}
const store = createStore(loginReducer);
console.log(store.getState());