
var student1 = {
    name: 'sani kumar',
    rollNo: 90,
    marks: 80
}


var student2 = {
    name: 'manish kumar',
    rollNo: 100,
    marks: 90
}
// In the above solution, we can not create 100 times Student Object for 100 Student


// function to create Object
// function Student(name, rollNo, marks){
//     var student = {}; // new Object() -> this way also create Object
//     student.name = name,
//     student.rollNo = rollNo,
//     student.marks = marks
//     return student;
// }

// var student1 = Student("manish", 20, 100);
// console.log(student1);
// var student2 = Student("sani", 10, 90);
// console.log(student2);


function Student(name, rollNo, marks){  //name should start from Capital letter
   // var student = {}; // new Object() -> this way also create Object
    this.name = name,
    this.rollNo = rollNo,
    this.marks = marks
    //return student;
}

var student1 = new Student("manish", 20, 100);
console.log(student1);
var student2 = new Student("sani", 10, 90);
console.log(student2);



function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){
    //     return this.price;
    // }
}
Vehicle.prototype.getPrice = function(){
    return this.price;
}


var vehicle1 = new Vehicle(2, 5000);
var vehicle2 = new Vehicle(4, 50000);
// console.log(vehicle1);
// console.log(vehicle2);
 console.log(Vehicle.prototype.color = "black"); //It add the color property to all the vehicles like V1 and V2
// console.log(vehicle1.color);
// console.log(vehicle2);


console.log(Vehicle.hasOwnProperty("color"));  //True
console.log(vehicle1.hasOwnProperty("color"));  //False


//Passing function as argument
var factorial = function fact(n){
    var ans = 1;
    for(var i=1; i<=n; i++){
        ans = ans*i;
    }
    return ans;
}

function ncr(n, r, factorial){
    return factorial(n)/(factorial(r)* factorial(n-r));
}
console.log(ncr(5, 2, factorial));





























































