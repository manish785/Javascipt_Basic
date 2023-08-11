
function Calculate(a , b){
    return a + b;
}
console.log(Calculate(1, 2));


const discount = 25;
function CalDis(price){
    discount = discount * discount // should not manipulate the external variables
    return price - discount;  // It depend on the external factor- it is Impure function
}
