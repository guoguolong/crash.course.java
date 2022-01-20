// const lib = require('./libs');

var Mammal = function (name) {
  this.name = name;
  this.address = {
    city: 'Beijing',
    stree: 'No 1, Stree MXY'
  }
};

Mammal.prototype.get_name = function () {
  return this.name;
};

Mammal.prototype.says = function () {
  return this.saying || '';
};

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
  Mammal.call(this, name);
};

Cat.prototype.purr = function (n) {
  var i,
    s = '';
  for (i = 0; i < n; i++) {
    if (s) s += '-';
    s += 'r';
  }
};
Cat.prototype.get_name = function () {
  return this.says() + ' ' + spec.name + ' ' + this.says();
};

// 优点：属性私有化，实例之间不互相影响
var henCat = new Cat('Henrietta');
console.log('henCat Address:  ', henCat.address);
console.log('henCat constructor:  ', henCat.constructor);

var bixCat = new Cat('Bix');
bixCat.address.city = 'Nanjing';
console.log('henCat Address again: ', henCat.address);

// 缺点：父类的原型方法不能继承
henCat.says();