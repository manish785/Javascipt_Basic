
// filter functions

const inputs = [1, -2, 3, -4, 5, -6, 7, -8, 9];

const positives = inputs.filter(noNegative);


function noNegative(ele){
    return ele > 0;
}

console.log(`Original array: ${inputs}`);

console.log(`only positive number: ${positives}`)

// here in the current elements, we are applying condition on the current element
const negative = inputs.filter((num)=> num <0 );
console.log(negative);