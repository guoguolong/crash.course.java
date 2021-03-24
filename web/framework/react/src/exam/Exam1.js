import React, { useState } from 'react';

// const Item = ({item, onClick}) => {
//     return <li onClick={() => onClick(item) }>{item}</li>
// }

const List = (props) => {
  const [items, setItems] = useState(props.items)
  function onClick(item) {
    const nitems = items.filter((obj) => {
        return obj!==item
    })
    nitems.unshift(item)
    
    setItems(nitems)
  }

  return  (
    <ul>
       {items.map(item => (<li onClick={() => onClick(item)}>{item}</li>))}
    </ul>
  )
}

export default function() {
  return <List items={["A", "B", "C"]} />
}