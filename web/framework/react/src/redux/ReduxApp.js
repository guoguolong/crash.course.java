import React from 'react'
import store from './Store'

export default class ReduxApp extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch({ type: 'INCREMENT' })
          // 1
          store.dispatch({ type: 'INCREMENT' })
          // 2
          store.dispatch({ type: 'DECREMENT' })
        }}>INCREMENT</button>
      </div>
    )
  }
}