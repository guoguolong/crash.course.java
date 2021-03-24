/*** 演示 ‘需要清理的副作用’ ***/
import React, { useState, useEffect } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  // useEffect(() =>{
  //   document.getElementById('btn').addEventListener('click', (e)=>{
  //     console.log("Bind 1")
  //   });

  //   document.getElementById('btn').addEventListener('click', (e)=>{
  //     console.log("Bind 2")
  //   });
  //   document.getElementById('btn').onclick = (e)=>{
  //     console.log("onclick=1")
  //   };
  //   document.getElementById('btn').onclick = (e)=>{
  //     console.log("onclick=2")
  //   };
  // }, []);
  useEffect(() =>{
    const fun = (e)=>{
      console.log("Bind " + count)
    }
    document.getElementById('btn').addEventListener('click', fun);
    return () => {
      document.getElementById('btn').removeEventListener('click', fun);
    }
  }, [count]);

  return (
    <div className="App">
      <button id="btn">Click Event</button>
      <button onClick={()=>{
        setCount(count+1);
      }}>+ 1</button>
   </div>
  );
}