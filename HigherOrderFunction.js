
// example of higher Order function - 

const input = [1, 2, 3, 4, 5, 6, 7, 8];

function operatiions(input, fn){  // This is higher order function
    const output = [];
    for(let i of input){
        output.push(fn(i));
    }
    return output;
}

function square(number){
    return number * number;
}

function cube(number){
    return number * number * number;
}

console.log(operatiions(input, square));
console.log(operatiions(input, cube));