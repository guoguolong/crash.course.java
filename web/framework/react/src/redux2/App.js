import React from 'react'
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)
// console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default function() {
    return (
        <div>
            <button onClick={(e) => {
                store.dispatch({type: 'ADD_TODO', text: 'I am gonna Canada.'})
            }}>Add TODO</button><br/>
            <button onClick={(e) => {
                store.dispatch({type: 'TOGGLE_TODO', index:0});
            }}>Toggole 0</button><br/>
            <button onClick={(e) => {
                store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'})
            }}>Show Complete.</button>
        </div>
    )
}