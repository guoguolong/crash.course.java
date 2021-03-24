var Animal = function(name, weight) {
  this.name = name;
  this.weight = weight;
}
Animal.prototype.isAlive = true;
Animal.prototype.sayHello = function() {
  return "Hello";
};

var Cat = function(name, weight) {
  this.name = name;
  this.weight = weight;
}
Cat.prototype = new Animal();
Cat.prototype.jump = function() {
    return 'Jump jump.';
}

var garfield = new Cat();

console.log(garfield.sayHello()); // 输出 Hello
console.log(garfield.jump()); // 输出 Jump jump
