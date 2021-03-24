/* Version 1 */
// declare module 'ghelper' {
//     export function encrypt(s:string): string;
// }

import './Validator'
declare module './Validator' {
    export function validate():any;
    export let num:number;
    export let total:number;
    export let letterValidator: any;
    export let zipCodeValidator: void;
}