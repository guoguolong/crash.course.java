import React, { useReducer } from 'react';

const initialState = { count: 0 };

function init(initialCount) {
    return {count: initialCount.count + 9};
  }
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return action.payload
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState , init);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'reset', payload: { count: -1 } })}>RESET</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch()}>Null Action</button>
        </>
    );
}