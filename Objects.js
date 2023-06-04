// var obj = {};
// console.log(typeof(obj));

// console.log(typeof(Object));

// console.log(typeof(Object) == typeof(obj));

 var i = 10;
function scopeDemo(){
     i = 100;
    console.log(i);
}
scopeDemo();
console.log(i);


var student = {
    "name": "manish",
    rollNo: 41,
    marks: 91,
    "2": "two",
    "address":{
        "city": "Jagwan",
        "pincode": 91
    }
};

console.log(student.address.city);
console.log(student.address.pincode);

console.log(student["address"]["city"]);
console.log(student["address"]["pincode"]);


const obj11 = {
     A : "A",
     2 : 2,
};
console.log(obj11);
console.log(obj11["A"]);
console.log(obj11[2]);



let obj1 = { firstName: 'James' };
console.log(obj1);
let obj2 = {...obj1};
console.log(obj2);

console.log(obj1 == obj2); // false 
console.log(obj1 === obj2); // false
obj2.firstName = 'John';
console.log(obj1);


var objx = {
    "company":"product based companies",
    "location":"noida",
}
console.log(Object.keys(objx));
console.log(Object.getOwnPropertyNames(objx));



// example - Promise and event loop
setTimeout(function(){
    console.log(10);
}, 0);

var promise = new Promise(function(resolve, reject){
    resolve(20);
});
promise.then(function(data){
    console.log(data);
})
console.log(30); 


var a =10;
var b;
function outer(){
    var b = 30;
    function inner(a){
        var a = 30;
        console.log(a++ ,b++)
        }
        console.log(a, ++b);
        inner(a);
}
outer();
console.log(a++,b++);


























































