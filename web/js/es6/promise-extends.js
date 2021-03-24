class MyPromise extends Promise {
    ok(resolve, reject) {
        // console.log('.....ok.....')
        return this.then(resolve, reject);
    }
    ok2(reject) {
        // console.log('......failure.....')
        return this.catch(reject)
    }
}

let promise = new MyPromise(function (resolve, reject) {
    console.log('run promsie first.')
    reject(42)
})

promise.ok(function(value) {
    console.log(value)
}).ok2(function(value) {
    console.log('ok2:', value)
})

console.log('start...')