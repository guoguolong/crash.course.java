import React, { useState, useEffect } from 'react';

let total = 0;
export default function BasicHookApp() {
  const [count, setCount] = useState(10);
  
  const [count2, setCount2] = useState(20);
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log('call again:', new Date())
  })
  useEffect(() => {
    document.title = `Your clicked ${count} tiems.`
    console.log('document.title:::', document.title)
    return function() {
      total ++;
      console.log('>>>>>User Effect>>>>>',  total)
    }
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increate Count.
      </button>
      <button onClick={() => setAge(age + 1)}>
        Increate  Age.
      </button>
    </div>
  )
}