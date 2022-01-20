Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

Function.method('curry', function () {
  var slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this; // 此 this 就是调用时的方法，即下面例子中的： add
  console.log('args:', args);
  return function () {
    console.log('arguments:', arguments);
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

if (typeof Object.beget !== 'function') {
  Object.beget = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
