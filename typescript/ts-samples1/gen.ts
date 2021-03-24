// function* generator() {
//     console.log("Excuteion started.");

//     yield 1340;
//     console.log('Execution resumed');

//     yield 2677;
//     console.log('Execution end');
//     return 'End'
// }

function* generator() {
    try {
        yield 1;
    } catch (error) {
        console.log(error.message);
    }
}

const iter = generator()
const rx =iter.next();
console.log('R:', rx)
iter.throw(new Error('Fuck'));