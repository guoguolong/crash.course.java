import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

import App from './App'
import PostDetail from './PostDetail'
import Login from './Login'
import reducers from './redux/reducers';

const store = createStore(reducers,
    applyMiddleware(thunkMiddleware))
export default function AppIndex() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/detail" component={PostDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/:filter?" component={App} />
                </Switch>
            </Router>
        </Provider>
    )
}