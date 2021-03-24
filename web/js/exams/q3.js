/*
First array length is 5 and surname is b,r,o,w,n
Second array length is 5 and surname is b,r,o,w,n

Because the two arrays are the same:

['n','a','e','s', ['b','r','o','w','n'] ]
*/
var array1 = "sean".split('');
var array2 = array1.reverse(); // n a e s

var array3 = "brown".split(''); // b r o w n
array2.push(array3); // n a e s b r o w n

console.log("First array length is " + array1.length + " and surname is ", array1.slice(-1)); // 4, n
console.log("Second array length is " + array2.length + " and surname is ", array2.slice(-1)); // 9, n
