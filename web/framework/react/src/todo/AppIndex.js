import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

import reducers from './redux/reducers';
import App from './App'

const store = createStore(reducers,
    applyMiddleware(thunkMiddleware))
export default function AppIndex() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}