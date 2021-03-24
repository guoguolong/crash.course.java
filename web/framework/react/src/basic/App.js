/*** 演示 更新对象子节点可以被对象观察到从而出发点页面更新 ***/

import React, { useState, useEffect } from 'react';

export default function () {
  const [activities, setActivities] = useState([
   {
     name: 'allen', gender: 'male',
   },
   {
     name: 'Koda', gender: 'female',
   }]);
  const [record, setRecord] = useState({});

  const [activityObj, setActivityObj] = useState({person:
     {
       name: 'Roger', gender: 'male',
     }
   });
  const [person, setPerson] = useState({});
  // const [value, setValue] = useState(20);

  // useEffect((item) => {
  //   console.log('value changed:', value)
  // }, [value]);
  
  return (
    <div className="App">
      <h1>{record.name}</h1>
      {/*<button onClick={()=>{ setValue(21) }} >Set Value</button>*/}
      <button onClick={()=>{
        activities[0].name = 'Alice';
        setRecord(activities[0]);
      }}>Update Record</button>

      <button onClick={()=>{
        activityObj.person.name = 'Andy';
        setPerson(activityObj.person);
      }}>Update Person</button>

      {
        activities.map((item)=><h3>{item.name}</h3>)
      }
      <hr/>
      <h3>{activityObj.person.name}</h3>
    </div>
  );
}