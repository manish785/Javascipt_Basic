
// Currying in JS
// function add1(a, b, c){
//     return a + b + c;
// }
// console.log(add1(2, 3, 4));


// function add2(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log(add2(2)(3)(4))


function power1(a, b){
    return a**b;
}
console.log(power1(2,4));

function power2(a){
    return function(b){
        return a**b;
    }
}
console.log(power2(2)(4));















