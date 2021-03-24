var obj = {
  get foo() {
    console.log('Observe:', { name: 'foo', object: obj, type: 'get' });
    return obj._foo;
  },
  set bar(val) {
    console.log('Observe:', { name: 'bar', object: obj, type: 'set', oldValue: obj._bar });
    return obj._bar = val;
  }
};

obj.bar = 2;
// {name: 'bar', object: <obj>, type: 'set', oldValue: undefined}

obj.foo;