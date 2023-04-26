// Note -> JS is an object oriented language
//Note -> objects in js more like of key-value pairs

var student = {
    name: "John",
    age: 20,
    gender: "male"
}

console.log(student);

//can change the value of properties in objects
student.age = 25
console.log(student);

//can assign new properties to objects
student.marks = 90;
console.log(student);

// different ways of creating objects
var obj = {};
var obj =new Object();

//can access the objects value through square brackets also
var student ={
    "-name": "John",
    age: 20,
    gender: "male"
}
//here dot operator will not work
//console.log(student. -name);
console.log(student["-name"]);

// To delete any properties from objects
console.log(delete student.age);
console.log(delete student["-name"]);
console.log(student);

// objects always refereing to the certain address
var object1 = {
    "p1" : 100
}
console.log(object1);
var object2 = object1;
object2.p1 = 1000;
console.log(object2);
console.log(object1);
console.log(object1 == object2);
console.log(object1 === object2);

//here, we are creating a new object, which is taking some other address diffent from object1
var object2 = {
    "p1" : 100
}
console.log(object1 == object2);
console.log(object1 === object2)

// Iterating on the objects
var student = {
    name: "John",
    age: 20,
    gender: "male"
}

for(prop in student){
    console.log(student[prop]);
}

//the below function returns the key of objects
var keys = Object.keys(student)
console.log(keys)

var key1 = Object.getOwnPropertyNames(student)
console.log(key1)

//length property in the array
// var arr = ["name", "age", "gender"];
var arr = [10, 20, 30, 40, 50];
arr.prop = "manish";
console.log(arr);
console.log(arr.length);
arr[10] = "dd";
console.log(arr.length) //length in the array basically, max integer index value as a key + plus one

//iterate over the keys in the array
for(var i in arr){
    console.log(i);
}


var arr = [1, 2, 3];
arr.push(4);
console.log(arr.length);

// Note -> In JS, we can certain function after certain interval once, continously after certain intervals and clear it as well

// var sec = 1;
// function sayHello(){
//     console.log("after " + sec + " seconds");
//     sec++;
//     if(sec == 6){
//         clearInterval(id); //here passing the instance of setInterval to clear the interval
//     }
// }
// //setTimeout(sayHello, 5000);
// var id = setInterval(sayHello, 2000)  //here we are running the sayHello function after 2 sec.


// write a function that runs from 10 to 0 after 1 sec
// var count = 10;
// function CountDown(){
//     console.log("after " + count + " " + "sec");
//     count--;
    
//     if(count == 0){
//        console.log('Times out');
//        clearInterval(id);
//        return ;
//     }
// }
// var id = setInterval(CountDown, 2000);

// Note - In  JS , array and object are pass by reference other primitives are passed by value

function f(a, b, c){
  a = 3;
  b.push("mishra");
  c.first = false
}
var x = 4;
var y = ["manish", "kumar"];
var z = {'first': true};

f(x, y, z);
console.log(x, y, z);


// Note - Deep Copy and Shallow Copy (newOne Not connected to oldOne in Deep and newOne connected to oldOne in shallow)

// Example of deep copy
var susan = {
    "name" : "Susan",
    "age" : 28
}
var raj = {...susan}
raj.name = "raj";
console.log(susan);
console.log(raj);

// once do through spread operator and other through object.assign function, In deep copy(no connection to oldOne)
var virat = Object.assign({}, susan);
console.log(virat);

virat.name = "Virat";
console.log(susan);
console.log(virat);







































