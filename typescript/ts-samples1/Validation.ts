export namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

const lettersRegexp = /^[A-Za-z]+$/
const numberRegexp = /^[0-9]+$/
export namespace Validation {
    export class LetterValidator implements Validation.StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

export namespace Validation {
    export class ZipCodeValidator implements Validation.StringValidator {
        isAcceptable(s: string) {
            return numberRegexp.test(s);
        }
    }
}

export namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {
            constructor() {
                console.log('....Square.....');
            }
        }
    }
}

export default {
    ZipCode: Validation.ZipCodeValidator,
    Letter: Validation.LetterValidator
}