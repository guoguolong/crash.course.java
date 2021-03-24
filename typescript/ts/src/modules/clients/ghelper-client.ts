// declare module 'ghelper' {
//     function encrypt(s:string):string
// }
/// <reference path = "../typings.d.ts" /> 
import ghelper from 'ghelper'

const s = ghelper.encrypt('ABC')
console.log(s)