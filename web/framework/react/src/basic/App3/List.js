/*** 演示 ‘需要清理的副作用’ ***/
import React, { useState, useEffect } from 'react';
import { Link, Switch, BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Edit from './Edit';

export default function () {
  const [count, setCount] = useState(0);
  useEffect(() => {

  }, []);

  return (
    <div className="app-list">
      <h1>This is a list page.</h1>
   </div>
  );
}