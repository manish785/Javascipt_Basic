
// console.log(a);
// var a=10;

// a ();

// function a(){
//     console.log("b");
// }

// b();
// var b = function(){
//     console.log("Manish is learning JS");
// }

// console.log(b()); 

// Example of TypeError
// const a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// variable has function scope

// function a(){
//     var x = 10;
//     console.log(x);
// }
// a();
// console.log(x);

// exmaple of Closure
// function a(){
//     var i = 10;
//     return function b(){
//         var j = 20;
//         console.log(i , " " , j);
//     }
// }
// var val = a();
// console.log(val);
// val();

// example of callback -

// function greet(name, callback){
//     console.log(`hi my name is : ${name}`);
//     callback();
// }

// function callback(){
//     console.log('Hi, Here callback function is getting called');
// }

// greet ('Manish', callback);


// example of promises

// var promise = new Promise(function (resolve, reject) {
//     reject('Hello Manish');
// })

// promise.then(function(data){
//     console.log('Hello');
//     console.log(data);
//     return;
// }).catch((err)=>{
//    console.log('Hi');
//    console.log(err);
//    return;
// }).then(function(){
//     console.log('This peice of the code will always runs');
//     return;
// });

// async function a(){
//     let 
// }


// function sum(x, y){
//    console.log(x + ' ' + y);
//    return  x + y;
// }
// console.log(undefined + undefined);
// const ans = sum()
// console.log(ans);

// var a = true + true + true * 3;
// console.log(a)

// let hero = {
//    powerLevel: 99,
//    getPower(){
//      return this.powerLevel;
//    }
//  }
 
//  let getPower = hero.getPower;
// //  console.log(getPower);
 
//  let hero2 = {powerLevel:42};
//  console.log(getPower());
//  console.log(getPower.apply(hero2));


//  var x = 23;

//  (function(a){
//     console.log(a);
//    return (function(){
//      console.log(a);
//      a = 23;
//    })()
//  })(45);


// let a = 1 - '1';
// console.log(typeof(a));


// var a;
// console.log(typeof(a));
// console.log(typeof(undefined));
// if( undefined) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }


// console.log(RectArea(3,4));
// var RectArea = function manish(width, height) {  // Will function gets called using RectArea
//   return width * height;
// }

// console.log(RectArea);

// Example of Callback function -


// function greet(name, callback){
//   console.log(`hi my name is : ${name}`);
//   callback();
// }

// function callback(){
//   console.log('Here, callback function is getting called');
// }

// greet ('manish', callback);


// example of arryForEach

// const arr = [1, 2, 3];

// function print(element){
//   console.log(element);
// }

// arr.forEach(print);


// var a = 1;

// function b() {  //Note - local gets more priority than global or the next one
//     a = 10;
//     return;
//     function a() { }
// }

// b();
// console.log(a);


// function change1(obj) {
//     console.log(obj);
//     obj.name = "ninjas"
//     console.log(obj);
//   }
//   function change2(obj) {
//     console.log(obj);
//     obj = {name: "changed"}
//     console.log(obj);
//   }
  
//   var obj = {name:"coding"}
  
//   change1(obj)
//   change2(obj)
//   console.log(obj.name)  



// const arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(i, arr[i]);
//   }, 1000);
// }

// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);

// function foo() {
//     console.log(this.bar);
//   }
  
//   const obj = { bar: 42, foo: foo };
//   const obj2 = { bar: 99, foo: obj.foo };
//   const bar = 1337;
  
//   obj.foo();
//   obj2.foo();
  
// var pi=4;
// const pi=3.14;
// console.log(pi);


function a(){
    var i = 10;
    return function b(){
        var j = 20;
        console.log(i, j);
    }
}
var val = a();
console.log(val);
val();

































































































































