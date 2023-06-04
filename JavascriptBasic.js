// javascript is lossely typed as it holds interger, character, boolean etc
var a = 10;
console.log(a);

a = "manish";
console.log(a);

a = 10.5;
console.log(a);

var b = 10.6;
console.log(b);

// variable declarations and definitions
var a ;
console.log(a);

var b = 10;
console.log(b);

// null and undefined
var c = null; // absence of value, want to set value but currently have no value
console.log(c);

// NAN
console.log(Math.sqrt(-1))
console.log(parseInt('aaaaaaa'));

//type of 
var x = null;
console.log(typeof(x));

console.log(typeof(NAN))

//type coercion
console.log('1'+1);
console.log('1'-1);
console.log('1'>0);

//Note - all the falsy values in JS return false. Value like null, 0, "", undefined
var x = -2;
if(x){
    console.log('True');
}else{
    console.log('False');
}

// Const Variable
// read only variable, define and hoisting does not work
console.log("CONST")
// const d = 10;
// d = 20;
// const d;
// d =10;
// console.log(d)  // can not access d before their intilaization
// const d = 1;

console.log("SCOPE")
var a = 10;
if(a<=10){
    var b = 100;
}else{
    var c = 1000;
}
console.log(a, b, c);

var x = 10;
function sum(a){   //var has function scope, it means it is accessible only inside the function scope
    if(10<=a){
       var c = 10;
       console.log('hi', c);
    }else{
      var d = 10;
    }
}
sum(10)
console.log(x, c);

// Let and Const have the block scope
// var a = 10;
// if(a<=10){
//     console.log(x1) //can not acess let before their intialization
//     let x1 = 100; //let has block scope, it means it is accessible only inside the scope
// }else{
//     var c = 1000;
// }
// console.log(a, x1, c);

// find the difference between Let and Const
for(var i=1; i<=5; i++){  //output will be 6 because Var has global scope
    setTimeout(function(){
        console.log(i)
    }, 2000)
}

for(let i=1; i<=5; i++){  //output will be 1,2,3,4,5 because Let has block scope
    setTimeout(function(){
        console.log(i)
    }, 2000)
}

var arrx = [10, 20, 30,40 ,5]
for(var i of arrx){
    console.log(arrx[i]); // this will throw undefined 
    console.log(i);  // this will print the value of arrx
}


















































