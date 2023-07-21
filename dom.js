// var a = "A";
// console.log(parseInt(a));
// console.log(65-parseInt(a));
// console.log(1.1);

// console.log(1 + '1');
// console.log(1 - '1');

// console.log(typeof(undefined));
// console.log(1 + undefined);

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//         console.log( words.shift());
//         console.log(words);
//     }
// });


// function f(a,b = 1) {
//     console.log(b);
//     console.log(a*b)
//   }
//   var x = 0 // some hidden  value
//   f(5,x)


// //   var arr = []

// //   arr.push("hello")
// //   console.log(arr);
// //   arr.hello = 0
// //   console.log(typeof(arr.hello));
// //   console.log(arr);

// //   var value = 0
// //   for(var i = 0;i < 5; i++) {
// //       value = arr[value]
// //   }
// //   console.log(value)


// function abc(arr) {
//     var arr2;
//     for(i in arr) {
//         console.log(i);
//        // arr2[i] = i;
//        // console.log(arr2[i]);
//     }
//     console.log(arr2);
//     return arr2;
// }


// var arr = [12, 56, 48, "hello"];
// //console.log(abc(arr)[1]);


//console.log(window.document==document);

// var a = 10;
// var a = 20;
// console.log(a);

// let b = 100;
// let b = 200;
// console.log(b);

// const c = 100;
// const c = 200;
// console.log(c);


// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// //console.log(arr); // arr[2]
// arr();
// //console.log(arr()); // 3
// function foo(n) {
//  // console.log(arguments[0]); //1
//  // console.log(n);  //3
//   var f = () => arguments[0] + n; 
//    console.log(arguments[0]);  // 1
//  // console.log(n); //3
//   //console.log(f);
//   //console.log(f());
//   return f();
// }
// foo(3);    


// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let shooter = function() {
//       console.log( i ); 
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   console.log(shooters[0]);
//   console.log(shooters[5]);
//   return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[5]();

// function makeArmy() {
//   let shooters = [];
//   for(let i = 0; i < 10; i++) {
//     let shooter = function() {
//       console.log( i );
//     };
//     shooters.push(shooter);
//   }
//   return shooters;    
// }
// //let army = makeArmy();
// army[0]();
// army[5]();


// console.log((function(x, f = () => x) {
//   console.log(x);
//   var x;
//   var y = x;
//   console.log(y);
//   x = 2;
//   return [x, y, f()];
// })(1));

// var juliet = {
//   name: "Juliet",
//   hello: function(){
//       console.log("Hi, I am " + this.name);
//   }
// }
// juliet.hello();


// function MyClass() {}

// const obj1 = new MyClass();
// const obj2 = MyClass();

// console.log(obj1);
// console.log(obj2);


function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}
function callback(){
    console.log('Hi, I am a callback');
}

greet('manish', callback);












































































