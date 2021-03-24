export var color = 'red';
export let name = 'Nicholas';
export const magicNumber = 7;
export const address = {city:'nanjing', country: 'China'}
export function setName(n) {
    name = n
}
function sum(num1, num2) {
    return num1 + num2;
}

export {sum as default }