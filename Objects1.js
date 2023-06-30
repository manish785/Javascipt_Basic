



// function a() {
//     console.log("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// a();




// function a() {
//     console.log("Inside a");

//     return function b() {
//         console.log("Inside b");
//     }
// }

// var b = a();
// console.log(b);
// console.log(b());

var arr = [ 1, , 3, 4 ];
console.log(arr[1]);


// Noe


// function Person(name) {
//     this.name = name;
//   }
//   var p1 = new Person("Joy");
//   var p2 = new Person("Julie");
  
//   Person.prototype.getName = function() { return this.name };
  
//   p1.getName = function() {
//       return ‘John’ 
//     };
//   console.log(p1.getName() + " is friend with " + p2.getName());
//   p2.getName = function() {return ‘Jonson’};

function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red" ;
B.prototype.color = "red" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);



























