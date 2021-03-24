import React, { useState } from 'react'
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Switch, Redirect } from 'react-router-dom'

const App = (props) => {
  const [count, setCount] = useState(0)
  let isLogin = true;
  if (count > 2) {
    isLogin = false;
  }
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Go to Login when count&gt;2. Current:{count}</button>
      <AddTodo/>
      { !isLogin && <Redirect to="/login"/>}
      <VisibleTodoList filter={props.match.params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}

export default App