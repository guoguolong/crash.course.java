import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import User from './User.jsx';
import Hello from './Hello.jsx';

export default function() {
  const [flag, setFlag] = useState(0);
  const [userList, setUserList] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'Allen' }, 
    { id: 2, name: 'Leo' }, 
    { id: 3, name: 'Nancy' }
  ]);

  const deleteUser = id => {
    const list = users.filter(u => {
      return u.id !== id;
    });

    setUsers(list);
  }

  useEffect(()=>{
     setUserList(users.map( user => {
          return <User 
            key={user.id} 
            name={user.name} 
            onDeleteClick={() => deleteUser(user.id)} />
        }));

  }, [users])
  let count= 1;

  const us = [...users].map( user => {
    count ++;
    return <User 
      key={count} 
      name={user.name} 
      onDeleteClick={() => deleteUser(user.id)} />
  });
  console.log('Effective Running....')
  return (
    <div>
      <h1>Users</h1>
      {flag} &nbsp; <button onClick={() => {setFlag(flag + 1);}}>Increase Number</button>
      <ul>{us}</ul>
      <Hello />
    </div>
  );
}