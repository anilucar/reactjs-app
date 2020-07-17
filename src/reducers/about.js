import { createStore } from 'redux';

function aboutReducer(state = 'AboutReducer text', action) {
    return state;
}
const store = createStore(aboutReducer);
console.log(store.getState());