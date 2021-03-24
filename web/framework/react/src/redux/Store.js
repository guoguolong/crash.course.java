import { createStore } from 'redux';

let store = createStore(function counter(state = 0, action) {
    console.log('creatae store...')
    switch (action.type) {
        case 'INCREMENT':
            return state + 2
        case 'DECREMENT':
            return state - 3
        default:
    }
    return state
})

store.subscribe(() => console.log(store.getState()))

export default store