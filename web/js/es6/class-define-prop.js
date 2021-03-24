'use strict'
class P {

}
class PersonClass extends P {
    static gender = 'man'
    // addr = "Nanjing"
    constructor(name) {

        super(name)
        // console.log('new.target1:', new.target)
        // console.log('new.target2:', PersonClass)

        this.name = name;

        Object.defineProperty(PersonClass.prototype, "run", {
            value: function() {
                if (typeof new.target !== 'undefined') {
                    throw new Error('Please use new to instantiate it')
                }
                console.log('Run::::', this.name)
            },
            enumerable: true,
            writable: true,
            configurable: true
        })
        Object.defineProperty(PersonClass.prototype, "addr", {
            value: "Nanjing, China",
            enumerable: false,
            writable: true,
            configurable: false
        })
        Object.defineProperty(this, "addr", {
            writable: true,
            configurable: false
        })
    }

    sayName() {
        console.log(this.name)
    }

    static whoAmI() {
        console.log('I am PersonClass')
    }
}


let person = new PersonClass("Nicholas");
// person.run();
person.sayName();
console.log('person.addr:', person.addr)

person.addr = "Beijing CHina"
console.log('person.addr2:', person.addr)

delete person.addr
console.log('delete person.addr:', person.addr)


// for(let p in person) {
//     console.log('e: ', p)
// }
// console.log('Name:', person.name)
// console.log(person instanceof P)
// console.log(person instanceof PersonClass)

// PersonClass.whoAmI()
// console.log('gender:', PersonClass.gender)