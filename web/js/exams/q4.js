/*
Q: In the following code, if the array is too large, we’ll get a stack overflow. 
   How would you fix this without removing the recursive pattern?
*/

var array1 = processBigArray();
var newArrayEntry = function() {
    var entry = array1.pop();
    if (entry) {
        // do something to the current entry...
        newArrayEntry();
    }
};

/*
A: We can avoid a stack overflow by changing the newArrayEntry function:
*/

var array1 = processBigArray();
var newArrayEntry = function() {
    var entry = array1.pop();
    if (entry) {
        // do something to the current entry...
        setTimeout(newArrayEntry, 0);
    }
};

// That code eliminates the stack overflow because setTimeout(function, 0) clears the call stack before moving on to the next iteration.
