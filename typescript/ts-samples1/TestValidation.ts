import { Validation } from './Validation';
import ValidationModule from './Validation';
import * as pkg from './Validation';
import polygons = pkg.Shapes.Polygons;

(function () {
    interface Per {
        run: (b: number) => number;
        // run(b: number):number;
    }
    const vd = new Validation.LetterValidator
    let s = 'abcdef'
    const r = vd.isAcceptable(s);
    console.log(s, 'is Letter?', r)
    
    s = '3423423';
    let zipCodeObj = new ValidationModule.ZipCode;
    console.log(s, 'is Number? ', zipCodeObj.isAcceptable(s));

    s = '8988K';
    zipCodeObj = new pkg.Validation.ZipCodeValidator;
    console.log(s, 'is Number? ', zipCodeObj.isAcceptable(s));

    // new polygons.Square();
    new pkg.Shapes.Polygons.Square();
})()