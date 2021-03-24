import React, { useEffect } from "react";
import { Link, Switch, BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import ScrollToTop from './ScrollToTop'
import Page1 from './Page1'
import Page2 from './Page2'
import Home from './Home'

export default function ScrollApp() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/" component={Home} />
                </Switch>
                <ScrollToTop />
                <ul>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page 2</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </Router>
        </div>
    )
}