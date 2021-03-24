var MathLib;  
(function(Root) {
    var Calculator = (function () { 
        function Calculator() { 
        } 
    })
    Calculator.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    Root.Calculator = Calculator; 
    return Calculator; 
})(MathLib || (MathLib = {})); 