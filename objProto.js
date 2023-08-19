const car = {
    getDetails(name){
        console.log(`Your car is ${name}`);
    }
}

console.log(car.__proto__);
const car1 = Object.create(car);
console.log(car1.__proto__);
car1.getDetails('BMW');


// console.log(car.__proto__===car1.__proto__);
//Object assign 