var Animal = function(name, weight) {
  this.name = name;
  this.weight = weight;
  // this.isAlive = true;

  // this.sayHello = function() {
  //   return 'Hello';
  // };
}
Animal.prototype.isAlive = true;
Animal.prototype.sayHello = function() {
  return "Hello";
};