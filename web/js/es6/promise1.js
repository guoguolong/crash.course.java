// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve()
// })

// promise.then(function(){
//     console.log('Resolved.')
// })

// console.log('HI')

process.on('unhandledRejection', function(reason, promise){
    console.error('unhandled: ', reason, promise)
})

process.on('rejectionHandled', function(promise){
    console.error('reject too later: ', promise)
})

let promise = Promise.reject(42)

setTimeout(function() {
    promise.catch(function(value) {
        console.log(value);
    })
}, 10000);
