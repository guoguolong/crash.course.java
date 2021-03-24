function NoSuchProperty() {
}

let proxy = new Proxy({}, {
    get(trapTarget, key, receiver) {
        // console.log('key:::', key, typeof key)
        if (typeof key === 'symbol' || key === '__proto__') {
            Reflect.get(trapTarget, key, receiver)
        } else 
            Reflect.get(trapTarget, key, receiver)
            // throw new ReferenceError(`${key} doesn't exist`)
    }
})

NoSuchProperty.prototype = proxy
NoSuchProperty.prototype.getBrain = function(){
    return 'Brain...'
}

class Square extends NoSuchProperty {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    // getArea() {
    //     return 990
    // }
}
// Square.prototype.getCapacity = function() {
//     return 100000;
// }

let shape = new Square(2, 6)
let shapeProto = Object.getPrototypeOf(shape)
// console.log(shapeProto.getArea())
console.log(shapeProto.getBrain())
console.log(shapeProto === proxy);

let secondLevelProto = Object.getPrototypeOf(shapeProto)
console.log(secondLevelProto)
console.log(secondLevelProto === proxy)

// class Square{
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }
//     getArea() {
//         return 990
//     }
// }
// Square.prototype.getCapacity = function() {
//     return 100000;
// }

// let shape = new Square(2, 6)
// let shapeProto = Object.getPrototypeOf(shape)
// console.log(shapeProto.getArea)
// console.log(shape.__proto__.getCapacity())
