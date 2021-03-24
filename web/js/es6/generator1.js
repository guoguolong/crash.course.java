// function *createIterator() {
//   let first = yield 1;
//   let seond = yield first + 2;
//   yield second + 3;
// }

// let iterator = createIterator();
// console.log(iterator.next())
// console.log(iterator.next(4))
// console.log(iterator.throw(new Error('Boom')));


function *createIterator() {
  let first = yield 1;
  let seond;

  try {
    second = yield first + 2;
  } catch( ex) {
    second = 6;
  }
  console.log('second::', 6)
  yield second + 3
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(new Error('Boom')));
console.log(iterator.next());

