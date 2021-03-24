import React, { useState, useEffect } from 'react';
import Child from './Child';
import Kid from './Kid';

/**
 * 1. childComp 和 list 都是保持 Child 组件对象本身，所以改变 kidName 不会重新渲染这俩变量
 * 2. 而 <Child name="Andy" /> 每次无关的kidName改变，都会触发起重新执行，除非用 React.memo()包裹;
 */
let count = 0;
export default function () {
  const [kidName, setKidName] = useState('Mike');
  const [childComp] = useState(<Child name="Alice" />);
  const [list, setList] = useState([
      <Child name="Allen" key="111"/>,
      <Child name="Bob" key="222"/>,
    ]);

  useEffect(() =>{
    //  打开Chrome Network工具，体验一下key 不是 111 渲染的效果
    if (kidName === 'Mike2') {
      list[0] = <Child name="Toy" key="111"/>
    }

    if (kidName === 'Mike5') {
      list[0] = <Child name="Roger"  key="111"/>
    }

    setList([...list]);
  }, [kidName]);

  return (
    <div className="App">
      <div><span>{kidName}</span></div>
      <button onClick={() => setKidName('Mike' + (++count))}>改 Kid 名字</button>&nbsp;
      {childComp}
      {list}
      <Child name="Andy" />
    </div>
  );
}