/* 
已经废弃.
https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/Object.observe
*/

var obj = {
  foo: 0,
  bar: 1
};

Object.observe(obj, function(changes) {
  console.log(changes);
});

obj.baz = 2;
// [{name: 'baz', object: <obj>, type: 'add'}]

obj.foo = 'hello';
// [{name: 'foo', object: <obj>, type: 'update', oldValue: 0}]

conso.error(obj)
delete obj.baz;
// [{name: 'baz', object: <obj>, type: 'delete', oldValue: 2}]