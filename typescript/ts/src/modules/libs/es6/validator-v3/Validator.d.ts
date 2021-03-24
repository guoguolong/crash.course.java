// import V from './Validator'

declare interface ILetterValidator {
    isAcceptable(s: string): boolean;
}
export class letterValidator implements ILetterValidator {
    isAcceptable(s: string): boolean;
}
export var total: number
export let num: number