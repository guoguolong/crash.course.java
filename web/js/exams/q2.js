/*

Q: Convert the string “8675309” to a number.
A: To convert a string to a number, we can use the Number() function:

*/
var x = 'xxx';
var y = Number(x) || 0;
console.error(y, typeof y);

y = parseInt(x) || 0;
console.error(y, typeof y);

x /= 1;
console.error(y, typeof y);
