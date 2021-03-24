import React from 'react';

export default function (props) {
  return (
    <div>
      <h1>Kid: { props.user.name }</h1>
      <button onClick={()=>{
      	props.user.name = 'Alice by Kid'
      }}>Kid Click</button>
    </div>
  );
}