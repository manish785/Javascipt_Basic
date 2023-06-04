
// If two variables names are same, then  second will print
// console.log(name);
// var name = "Manish"
// console.log(name)
// var name = "Sani"
// console.log(name)

// example of IIFE
// (function (){    //anonymous function, wrap inside the close brackets and then invoke it
//     var name1 = "Manish";

//     setTimeout(function(){
//         console.log(name1);
//     }, 5000)
// })();


// Closures 
var i = 1000;
function outer (){
    var j = 2000;
    console.log(i, j);
    var inner = function(){
        var k = 3000;
        console.log(j, k);
    }
    return inner;
}
var inner = outer();
console.log(inner);
inner();

// Note - Every call creates a new ExecutionContext means Variable will get fresh value
// if (true){
//     let x = 10;  //Block of x is only inside the Parenthesis
// }
// console.log(x);


// Array functions
console.log('ARROW FUNCTIONS');
var multiply = function (a, b){
    return a*b;
}
console.log(multiply(3,4));

var multiply1 = (x, y) => {
    return x*y;
}
console.log(multiply1(2,3));

// Binding in Arrow functions
console.log('Binding in Arrow functions');
function Person(name){
    this.name = name;
    console.log(this);

    // setTimeout(function(){
    //     console.log(this); //here , this refers the GLOBAL object.
    // }, 1000);
    setTimeout(() => {
        console.log(this);  //In the arrow function, both "This Keyboard" refreing the same object.
    }, 1000);
}
var p = new Person("Manish");












































