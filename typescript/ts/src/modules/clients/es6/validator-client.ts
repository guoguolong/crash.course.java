import Validator from '../../libs/es6/validator-v3/Validator';

const vd = new Validator.letterValidator
let s = 'ChinsesVirus'
console.log(s, 'is Letter?', vd.isAcceptable(s))

console.log('num: ', Validator.num)
console.log('total: ', Validator.total)
