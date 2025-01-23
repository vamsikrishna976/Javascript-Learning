                      //Function types :
//Anonymous Function :
// example : 1
var add;
add = function add(a, b) {
    var c = a + b;
    return c;
}(1, 7)
console.log(add);

//IIFE Function :
// example : 1
(function add(a, b) {
    var c = a + b;
    console.log(c);
})(2, 7)

//example : 2
var add;
add = (function add(a, b) {
    var c = a + b;
    return c;
})(1, 9)
console.log(add);

//Arrow Function :
// Type : 1
var product;
product = (a,b) => {
    var c = a*b;
   return c;
}
console.log( product(2,7));

//Type : 2
var product;
product = (a,b) => {
    var c = a*b;
    console.log(c)
}
( product(2,6));
