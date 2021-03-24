/*** 演示 组件卸载时执行清理操作 ***/
import React, { useState, useEffect } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Edit from './Edit';
import List from './List';

export default function () {
  const [count, setCount] = useState(0);
  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/edit" component={Edit} />
          <Route path="/list" component={List} />
        </Switch>
        <div>
          <Link to="/list">List</Link> | <Link to="/edit">Edit</Link> | <Link to="/">Index</Link>
        </div>
      </Router>
     </div>
  );
}