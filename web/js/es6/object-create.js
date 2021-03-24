const person = {
  isHuman: false,
  addr: {city: 'nanjing', no: 23},
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman} at ${this.addr.city}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
console.log('m.p.name', me.__proto__.addr)
person.addr.city = "Beijing"
person.name = "Koda"
me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
person.printIntroduction();

// console.log(JSON.stringify(person))
