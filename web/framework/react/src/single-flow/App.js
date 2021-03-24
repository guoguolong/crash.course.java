import React, { useState, useEffect } from 'react';
import Kid from './Kid';

export default function () {
  const [user, setUser] = useState({
    name: 'Allen',
    gender: 1
  });

  useEffect(() =>{
    
  }, [user]);

  return (
    <div className="App">
      <h2>{user.name}</h2>
      <button onClick={()=>{
        alert(user.name)
      }}>Parent Click</button>
      <Kid user={user} />
    </div>
  );
}