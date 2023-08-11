const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik', 'Deepak', 'Salani'];
const juneBatch = ['Saba', 'Sabani'];
const julyBatch = [];


// function addStudent (batch, student){
//    batch.push(student);
//    console.log(batch);
// }


// addStudent(aprilBatch, 'Manish');
// addStudent(mayBatch, 'Sunny');

// Rest


function addStudent (batch, ...student){
   for(let i of student){
       batch.push(i);
   }
   console.log(batch);
}


addStudent(aprilBatch, 'Manish', 'Sunny');


// Spread
// Expanding / copying

const newBatch = [...mayBatch];
console.log(newBatch);

mayBatch.push('newStudent');
console.log(newBatch);
console.log(mayBatch);

// Concatenate 

// through Spread Operator, we can concatenate as many array, we want to concat
const mergedBatch = [...mayBatch, ...newBatch];
console.log(mergedBatch);































