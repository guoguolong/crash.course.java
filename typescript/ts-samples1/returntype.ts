(function () {
    let fun1 = (a: number) => ({a, b: 'hello'});
    type Fun1ReturnType = ReturnType<typeof fun1>
    const ry:Fun1ReturnType = {
        a: 45,
        b: 'abc'
    }
    console.log('typeof:::', ...(typeof fun1))
    console.log('ry:::', ry)
    // console.log(Fun1ReturnType.toString())
})()
