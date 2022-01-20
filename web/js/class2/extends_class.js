// TODO 写博客 https://www.cnblogs.com/memphis-f/p/12029534.html
// const lib = require('./libs');
/**
 * 
 * "伪类" 给不熟悉 JS 的程序员提供便利，但它隐藏了该语言的本质。借鉴类的表示法可能误导程序员编写过于深入复杂的蹭册结构。
 * 许多复杂的类层次结构产生的原因就是静态类型检查的约束。Js完全摆脱了那些约束.
 */
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
};

Cat.prototype = new Mammal('Unknown');
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

// 属性没有私有化，所有实例共享之
var henCat = new Cat('Henrietta');
console.log('henCat Address:  ', henCat.address);

console.log('henCat constructor:  ', henCat.constructor.name);

var bixCat = new Cat('Bix');
bixCat.address.city = 'Nanjing';
console.log('henCat Address again: ', henCat.address);

