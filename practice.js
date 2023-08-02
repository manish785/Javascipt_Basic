
// example of promise -> promise

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(function(){
//         resolve('Going through very Bad Times');
//     }, 5000);
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).then((data)=>{
//     console.log('Hope, the things will be better soon');
// })


// example of callback 

// function greet(name, callback){
//    console.log(name);
//    callback();
// }
// function callback(){
//     console.log('Here, the callback function is getting called');
// }

// greet ('Manish', callback);

// example of closure 

// function a(){
//     var i=10;
//     return function b(){
//         var j=20;
//         console.log(i, " ", j);
//     }
// }

// var c = a();
// console.log(c);
// c();
//console.log(c());

// write a program that prints 1 after 1 sec, 2 after 2 sec, 3 after 3 sec
// function x (){
//     for(var i=1;i<=5;i++){
//         function close(x){
//         setTimeout(function(){
//             console.log(x);
//         }, x*1000)
//        }
//     close(i);
//     }
//     console.log('Going through very bad phase of life');
// }
// x();

// write a program that prints 10 to 0 after every second

// let count = 1;
// function abc(){
//    console.log('after every second', count);
//    count++;
//    if(count==6){
//        clearInterval(id);
//        return;
//    }
// }
// var id = setInterval(abc, 1000);
// let a = 5;
// let b = 10;
// let result = (a++ * 2) + (++b);
// console.log(result);

// console.log(null == undefined && null === undefined)
// console.log(null == undefined)
// console.log( null === undefined)
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const array = [1, 2, 3];

// console.log(obj[array[4]]);
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);
//   }
  
// let x = undefined;
// console.log(typeof x);
// console.log(typeof x === "undefined");

// const a = 0;
// const b = '0';

// if (a == b) {
//   console.log('A');
// } else if (a === b) {
//   console.log('B');
// } else {
//   console.log('C');
// }

// console.log(true> 1)

// function mysteryFunction(arr) {
//   return arr.reduce((acc, val) => acc + val, 0);
// }

// const myArray = [1, 2, 3, 4, 5];
// const result = mysteryFunction(myArray);
// console.log(result);

// function foo(a, b) {
//   return a + b;
// }

// const bar = foo.bind(null, 2);
// console.log(foo.bind(null, 2));
// console.log(bar);
// const result = bar(5);
// console.log(result);

// function customFunction(arr) {
//   return arr.some((val) => val % 2 === 0);
// }

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [1, 2, 3, 4, 5];
// const result1 = customFunction(arr1);
// console.log(result1);
// const result2 = customFunction(arr2);
// console.log(result2);

function uniqueValues(arr) {
  return arr.filter((val, index) => arr.indexOf(val) === index);
}

const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const result = uniqueValues(arr);
console.log(result);






















































