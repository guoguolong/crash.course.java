import React, { useState, useEffect, useMemo}from 'react';

function Example() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    const getNum = useMemo(() => {
        console.log('run memo getNum')
        return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
    }, [count])

    // const getNum = (() => {
    //     let r = Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
    //     console.log('run getNum', r)
    //     return r;
    // })()

    // console.log('getNum>>', getNum)
 
    return <div>
        <h4>总和：{getNum}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}

export default Example;