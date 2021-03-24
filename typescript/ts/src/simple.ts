function userState (): Array<any> {
    return ['koda', 22]
}
const [nameX, age] = userState();

console.log('name: ', nameX)
console.log('age: ', age)