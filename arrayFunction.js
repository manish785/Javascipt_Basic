// function

function sum(a, b){
    return a + b;
}
var result = sum(4,6);
console.log(result);


//hoisting in js
//Note - functions are hoisted in the javascript
function hoistDemo(){
    console.log(i);
    var i = 10;
}
hoistDemo();

//scope of variable 
function scopeDemo(){
    var i = 10;
    console.log(i);
}
//console.log(i); - throwing error, i is not defined
scopeDemo();
//console.log(i); - throwing error, i is not defined

// function and scope
function c(){
    console.log('c is called');
}

function b(){
    c();
    console.log('b is called');
}

function a(){
    b();
    console.log('a is called');
}

a();
console.log('global context');

// function expression - assigning function as a value into the variable

var factorial = function fact(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
      ans = ans * i;
    }
    return ans;
}
console.log(factorial);
console.log(factorial(5))

//we can pass function as a argument to the another function , factorial function pass as a argument
function ncr(n, r, factorial){
    return factorial(n)/(factorial(r)*factorial(n-r));
}
console.log(ncr(5,2,factorial));

// array
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arr1 = new Array(1, 2, 3); //more than one value refers to the value present in the array
var arr2 = new Array(1); //one value refrers to the size of the array


// array in heterogenous in javascript, can contain different value
var arr = ['hi','1',1]
console.log(arr);
console.log(arr.shift());
console.log('hello'+ arr);
console.log(arr.unshift(8))
console.log(arr);


//Note - shift function removes the first element from the array and unshift just slides the all elements to the right
// and put some value at the first position

//Different ways to iterate over the array

var arrx = [100, 200, 300, 400, 500];

function print(element){
    console.log(element);
}

arrx.forEach(print); //we basicall pass the function , we try to do on the array elemnts i.e the
//operation we want to do on the array elements 


var arr = new Array(); //
console.log(arr.length);
console.log(arr[0]);

var arr1 = new Array(1);
console.log(arr1.length);
console.log(arr1[0]);

var arr2 = new Array(2,3);
console.log(arr2.length);
console.log(arr2[1]);


var arrx = [1, 2, 3, 4, 5];

function print(element){   //this will print the value of the array element
    console.log(element);
}

arrx.forEach(print); // It will iterate over all the elements of the array 


var arry = [1, 2, 3, 4, 5];

var sum = 0;
function calculateSum(element){
    sum = sum + element;
}

arry.forEach(calculateSum); 
console.log(sum);






























