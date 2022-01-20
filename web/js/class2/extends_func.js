Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

Object.method('superior', function (name) {
  var that = this;
  method = that[name];
  return function () {
    return method.apply(that, arguments);
  };
});

var mammal = function (spec) {
  var that = {};
  that.get_name = function () {
    return spec.name;
  };
  that.says = function () {
    return spec.saying || '';
  };
  return that;
};

var cat = function (spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  that.purr = function (n) {
    var i,
      s = '';
    for (i = 0; i < n; i++) {
      if (s) s += '-';
      s += 'r';
    }
  };
  that.get_name = function () {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};

var coolcat = function (spec) {
  var that = cat(spec);
  var super_get_name = that.superior('get_name'); // 有点脱裤子放屁，直接用 var super_get_name = that.get_name; 就完了
  that.get_name = function () {
    return 'like [' + super_get_name() + ']\'s baby';
  };
  return that;
};
// var myMammal = mammal({ name: 'Herb' });
// var o = { name: 'Henrietta' };
// var myCat = cat(o);
// console.log(o.saying);

var myCoolCat = coolcat({name: 'Bix'});
var catName = myCoolCat.get_name();
console.log(catName);