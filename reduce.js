
// reduce

// reduce(fn, intial value)

// reduce(fn, intial value, index, array) // expect fn all are optional

const arr = [1, 2, 3, 4, 5];

const totalSum = arr.reduce((acc, currEle)=>{
    // console.log(acc + currEle);
    return acc + currEle;
}, 0);

console.log(totalSum);