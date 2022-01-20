/**
 * 相比 new Class，更专注于“对象”本身
 * 问题：object.constructor 不可用了。但是重要吗？
 */
if (typeof Object.beget !== 'function') {
  Object.beget = function (o) {
    var Model = function () {};
    Model.prototype = o;
    return new Model();
  };
}
var myMammal = {
  name: 'Herb the Mammal',
  get_name: function () {
    return spec.name;
  },
  says: function () {
    return spec.saying || '';
  },
};

var henCat = Object.beget(myMammal);
henCat.name = 'Henrietta';
henCat.saying = 'meow';
henCat.purr = function (n) {
  var i,
    s = '';
  for (i = 0; i < n; i++) {
    if (s) s += '-';
    s += 'r';
  }
  return s;
};
henCat.get_name = function () {
  return this.says() + ' ' + spec.name + ' ' + this.says();
};