/*
Q: What is a hash table? Implement a simple one.
A: A hash table is a way to identify objects based on keys. 
   We can implement a simple hash table like this:
*/

var a = new Object();
a['first'] = 2;
a['second'] = 3;
a['third'] = 4;

// show values
for (var b in a) {
    if (a.hasOwnProperty(b)) {
        alert('key: ' + b + ', value: ' + a[b]);
    } 
}