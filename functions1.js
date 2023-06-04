// var student1 = {
//     name: "Manish",
//     rollNo: "12",
//     marks: "91",
// };

// console.log(student1);

// var student2 = {
//     name: "Sunny",
//     rollNo: "15",
//     marks: "89",
// };
// console.log(student2);

// Note - we can not do like this (above way) for storing information of 100 students


function createStudent(name, rollNo, marks){
    var student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
};

var student1 = createStudent('Manish', 15, 91);
var student2 = createStudent('Manish kumar', 19, 89);

console.log(student1);
console.log(student2);

// Note -> Through this way,we can store information of 100 of the students



















