import React, {useEffect} from 'react';

export default  React.memo(User);

function User ({id, name, onDeleteClick }){
  console.log(`${name} just rendered`);
  useEffect(() =>{
    console.log('Init User Component: ' + name)
  }, [])

  function onClick() {
    onDeleteClick(id);
  }
  return (
    <li>             
      <input 
        type="button" 
        value="Delete" 
        onClick={onClick} 
      /> 
      {name}
    </li>
  );
}
