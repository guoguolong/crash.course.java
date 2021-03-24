/*
Q: What is a “Singleton?” Implement a simple one.
A: A Singleton is when a class has one instance only, with a global point to access it. 
We can implement one with an immediate anonymous function:
*/
var my_Single = (function () {
    var iteration;
    function createIteration() {
        var obj = new Object("This is the iteration");
        return obj;
    }
    return {
        getInstance: function () {
            if (!iteration) {
                Iteration = createIteration();
            }
            return iteration;
        }
    };
})();

function run() {
    var iteration1 = my_Single.getInstance();
    var iteration2 = my_Single.getInstance();
    alert("Same iteration? " + (iteration1 === iteration2));
}