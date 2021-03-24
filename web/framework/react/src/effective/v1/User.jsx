import React, {useEffect} from 'react';

// Note how the debugger below gets hit when *any* delete
// button is clicked. Why? Because the parent component
// uses an arrow function, which means this component
//
export default function({name, onDeleteClick }){
  console.log(`${name} just rendered`);
  useEffect(() =>{
    console.log('Init User Component: ' + name)
  }, [])
  return (
    <li>             
      <input 
        type="button" 
        value="Delete" 
        onClick={onDeleteClick} 
      /> 
      {name}
    </li>
  );
}
