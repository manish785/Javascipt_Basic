
const fruits = ['apple', 'orange', 'banana', 'mango', 'pineapple'];


//Binding Pattern

const [a, b, ...f] = fruits;

console.log(a, b);

console.log(f);