
// Higher Order Functions
const arr = [1, 2, 3, 4, 5, 6];

// const squaredArray = arr.map(function(currentElement) {  
//    return currentElement * currentElement;
// });

const squaredArray = arr.map((currentElement) =>{  
       return currentElement * currentElement;
    });

console.log(squaredArray);
console.log(arr);