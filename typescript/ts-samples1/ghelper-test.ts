// import Validator from './Validator';
// // new Validator.ZipCodeValidator

// const vd = new Validator.letterValidator
// let s = 'abc9def'
// console.log(s, 'is Letter?', vd.isAcceptable(s))

// Validator.validate()
// console.log(Validator.num)
// import helper from '@tuniu/light-helper';
// const hs = helper.hashNr('abcd');
// console.log('hs>', hs)

import ghelper from 'ghelper';
let s = 'Man <b>is </b> a funny animal'
s = ghelper.removeTagsd(s)
console.log(s)