'use strict'
function Rectangle(length, width) {
    this.length = length
    this.width = width
}
Rectangle.ttt = '[what is ttt]'

Rectangle.prototype.getArea = function() {
    return this.length * this.width
}

function Square(length) {
    Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        enumeration: true,
        writable: true,
        configurable: true
    }
})

var square = new Square(4)

// Rectangle.prototype.getArea = function() {
//     return this.length ** this.width
// }

console.log(square.getArea())
console.log(square instanceof Square)
console.log(square instanceof Rectangle)
console.log(square.constructor.name)
