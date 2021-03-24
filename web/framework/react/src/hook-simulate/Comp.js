import React, { useState } from './React'

function MyComponent(name, baseCount) {
    const [count, setCount] = useState(baseCount, this, name)
    console.log(name, ',count:', count)

    setTimeout(() => {
        setCount(count + (Math.random() * 10 >> 0));
    }, 1000)
}

React(MyComponent, 'inst1', 100); // 实例1

// React(MyComponent, 'inst2', 1000); // 实例2