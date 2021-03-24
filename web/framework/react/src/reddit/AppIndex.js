import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk' // 支持异步dispatch
import { createStore, applyMiddleware } from 'redux';

import App from './App'
import reducers from './reducers';

const store = createStore(reducers,
    applyMiddleware(thunkMiddleware))
export default function AppIndex() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}