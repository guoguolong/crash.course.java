/* 函数是一等公民 */
// var sum = function(x, y) {
//     return x + y
// };
// console.log(sum(5 , 7));

/* 静态属性 */
// uniqueInteger.counter = 0;
// function uniqueInteger() {
//   return uniqueInteger.counter++;
// }
// console.log('Counter:', uniqueInteger()); // 输出 0
// console.log('Counter:', uniqueInteger()); // 输出 1

/* 函数式编程(求平均数的例子) */
// // 1. 普通实现
// var data = [1, 1, 3, 4, 6];
// var total = 0;
// for (var i = 0; i < data.length; i++) {
//   total += data[i];
// }
// var mean = total / data.length;
// console.log('Mean:', mean);

// // 2. 函数式实现
// var data = [1, 1, 3, 4, 6];

// Array.prototype.cumulate = function(func, initial) {
//   initial = initial || 0;
//   for (var i = 0; i < this.length; i++) {
//     initial = func(initial, this[i]);
//   }
//   return initial;
// }
// var sum = function(x, y) {
//   return x + y
// };
// // console.log('Mean:', data.reduce(sum) / data.length); // 内置函数
// console.log('Mean:', data.cumulate(sum) / data.length);

/** 作为命名空间的函数 **/
// function mymodule() {
//   // 模块代码
//   // 这个模块所使用的所有变量都是局部变量
//   // 而不是污染全局命名空间
// }
// mymodule();
// // 匿名函数立即执行
// (function() {
//   // 模块代码
// }())

/** 闭包例子 **/
// function f1() {
//   var count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   }
// }
// var increment = f1();
// increment(); // 输出 1
// increment(); // 输出 2

/* 空判断问题: undefined */
// var age;
// console.log(age) // 输出 undefined

// if (!age) console.log('yes')
// if (age === undefined) console.log('yes')
// if (typeof age === 'undefined') console.log('yes')

/* 空判断问题: 0、null 都是false，但是 undefined*/
// var age = null;

// if (age) console.log('yes') // 输出 yes
// console.log(age === undefined) // 输出 false

// age = 0;
// if (age) console.log('yes') // 输出 yes
// console.log(age === undefined) // 输出 false

/* 原语类型 和 NaN */
var age = 12;
var weight = '12';

console.log(age == weight); // 输出 true
console.log(age === weight); // 输出 false

// NaN 是什么类型
age = parseInt('十二');
console.log(typeof age); // 输出 number
if (isNaN(age)) {
  console.log('age 不是合法的数字');
}

// 类的类型: typeof 和 instanceof
// 字面量类
var animal = {
  name: 'BigCat'
}
console.log(typeof animal); // object
console.log(animal instanceof Object); // true

// 构造函数类
var Animal = function(name) {
  this.name = name;
}
var bigCat = new Animal('BigCat');
console.log(typeof bigCat); // object
console.log(bigCat instanceof Object); // true
console.log(bigCat instanceof Animal); // true
