const lettersRegexp = /^[A-Za-z]+$/
const numberRegexp = /^[0-9]+$/

module.exports = {
    num: 189,
    total: 1989,
    validate: function() {
        console.log('validate....');
    },
    letterValidator: class LetterValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    },
    zipCodeValidator: class ZipCodeValidator {
        isAcceptable(s) {
            return numberRegexp.test(s);
        }
    }
}

// export class LetterValidator {
//     isAcceptable(s) {
//         return lettersRegexp.test(s);
//     }
// }

// export class ZipCodeValidator {
//     isAcceptable(s) {
//         return numberRegexp.test(s);
//     }
// }