import Validator from './libs/Validator';

const vd = new Validator.letterValidator
let s = 'ChinsesVirus'
console.log(s, 'is Letter?', vd.isAcceptable(s))

console.log('num: ', Validator.num)

// import * as Validator from './libs/Validator';
// const vd = new Validator.letterValidator
// let s = 'ChinsesVirus'
// console.log(s, 'is Letter?', vd.isAcceptable(s))

// console.log('num: ', Validator.num)
// console.log('total: ', Validator.total)