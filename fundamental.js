

// var a = "A";
// console.log(parseInt(a));
// console.log(parseInt('111'));
// console.log(65 - parseInt(a));
// console.log(65 + a);
// console.log(65 + NaN);


// console.log(1 + '1')
// console.log(typeof(1+ '1'));


// console.log(typeof(undefined));
// console.log(typeof("undefined"));


// var a;
// console.log(typeof(a));
// if( typeof(a) ) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// console.log(undefined + 5);


// function demo() {
//     console.log(x);
//     var x = 10;
// }
// //console.log(x);
// demo();
// console.log(x); // because x has function scope

//var a = 10;

// function test() {
//      a = 200;
// }

// test(); 
// console.log(a);
// //console.log(window.a);
// console.log(window);


// console.log(window);


// var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

// fruits.splice(2, 0, 'Banana');

// console.log(fruits[3]);
// console.log(fruits);


// const students = {
//     "name": "John",
//     "age": "20",
// }
// for(let i in students){
//     console.log(i);
// }

// for(let i of students){
//     console.log(i);
// }


// var arr = []

// arr.push("hello")
// console.log(arr);

// arr.hello = 0
// console.log(arr);

// var value = 0
// for(var i = 0;i < 5; i++) {
//     value = arr[value]
//     console.log(value, arr[value]);
// }
// console.log(value)

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//         console.log(words);
//     }
// });


// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter1 = makeCounter();
//   console.log(counter1);

  
//   let counter2 = makeCounter();
//   console.log(counter2);

//   console.log( counter1() );  // 0
//   console.log( counter1() );  // 1
//   console.log( counter2() );  // 0


//   var Sequence = (function sequenceIIFE() {
//     let current = 0;
//     //console.log(current);
//     return {
//         getCurrentValue: function() {
//             console.log(current);
//             return current;
//         },  
//         getNextValue: function() {
//             current = current + 1;
//             console.log(current);
//             return current;
//         }
//    };
// }());
// // console.log(Sequence.getNextValue());
// // console.log(Sequence.getNextValue());
// console.log(Sequence.getCurrentValue());





// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// arr();
// // console.log(arr);
// // console.log(arr());
// // console.log(arguments[0]);

// function foo(n) {
//   console.log(arguments[0]);
//   console.log(n);
//   var f = () => arguments[0] + n; 
//   return f();
// }
// foo(3);    

// function cart() {
//     let items = 0;
//     return {
//        addItem: function () {
//              items++;
//         },
//         getItem: function () {
//             return items;
//         }
//     };
// }

// const closure = cart();
// // console.log(closure.addItem());
// // console.log(closure.addItem());
// // console.log(closure.addItem());
// console.log(closure.getItem());

var a;
if( typeof(a) ) {
    console.log(typeof(a));
    console.log("true");
}
else {
    console.log("false");
}

x = 5;
console.log(x);
var x;

var RectArea = function(width, height) {
    return width * height;
}
console.log(RectArea);
console.log(RectArea(5,4));


var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

fruits.splice(4, 0, 'Banana');

console.log(fruits);

var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

fruits.splice(1, 1, 'Banana');

console.log(fruits);

var hoisted = function() {
    console.log('bar');
};
hoisted(); 

function fun(...input){
    console.log(...input);
    var sum = 0;
    for(var i = 0; i < input.length; i++){
        sum += input[i];
    }
    return sum;
}
console.log(fun(1,2,3,4,5)); 


function f(a,b = 1) {
    console.log(a*b)
  }
  var x = undefined// some hidden  value
  f(5, x)

  var add = (function ( ) {
    var counter = 0;
    return function ( ) {
         counter += 1; 
         return counter;
  }
  })();    
  console.log(add());
  console.log(add());
  console.log(add());


  function foo() {
    var a = 800;
    function bar() {
        console.log(a);
    }
    var a = a+200;
    console.log(a);
    return bar;
}
var fun = foo();
console.log(fun);
fun();



































  




































