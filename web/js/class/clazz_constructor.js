var Animal = function(name, weight) {
  this.name = name;
  this.weight = weight;
  this.isAlive = true;
  this.sayHello = function() {
    return 'Hello';
  };
}