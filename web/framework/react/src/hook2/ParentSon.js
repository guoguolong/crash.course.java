import React, { useState, useCallback } from 'react';

function Parent() {
    const [count, setCount] = useState(100);
    return <div>
        <div>
            <button onClick={() => {setCount(count + 1);}}>+1</button>
        </div>
    </div>;
}

const Child = React.memo(function ({ getNum }: any) {
    const [total, setTotal] = useState(430);
    console.log('Son Render')
    return (
        <div>
            <div>{total}</div>
            <button onClick={() => setTotal(total + 5)}> +5 </button>
        </div>
    )
})
export default Parent;