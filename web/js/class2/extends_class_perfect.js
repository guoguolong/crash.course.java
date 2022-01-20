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

// Cat.prototype = new Mammal('Unknown');
Cat.prototype = Object.create(Mammal.prototype); // object.create(Mammal.prototype )是对Mammal.prototype的浅拷贝，而不是调用Mammal的构造函数
Cat.prototype.constructor = Cat; // 上一行操作 constructor 被修改为 Mammal了，要修正回来.
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

var henCat = new Cat('Henrietta');
console.log('henCat Address:  ', henCat.address);
console.log('henCat constructor name:  ', henCat.constructor.name);

var bixCat = new Cat('Bix');
bixCat.address.city = 'Nanjing';
console.log('henCat Address again: ', henCat.address);

henCat.says();
henCat.purr();