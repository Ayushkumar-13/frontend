// var a  = function() {console.log("hello hii bye bye ")};
// a();

function f1(a,b,fn) {
    console.log(fn(a,b));
}
var sum = function(a,b) {return a+b};
var multiply = function(a,b) {return a*b};
var divide = function(a,b) {return a / b};

// f1(4,2,sum)  output 6

// f1(4,5,multiply);  output 20
// f1(4,6, divide);  output 0.6666666666666666
function f(a) {
    if (a === '+') {
        return function(a,b) {return a + b};
    }
    else if ( a === '*'){
        return function(a,b) {return a*b};
    }
    else if (a === '/'){
       return function(a,b) {return a / b};
    }
}

console.log(f('+')(6,3));
console.log(f('*') (3,5));
console.log(f('/')(10,2))