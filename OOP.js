

// Constructor function
// function Movie(title, year){
//     this.title = title;
//     this.year = year;

//     this.getDetails = function(){
//         console.log(`title: ${this.title}, year: ${this.year}`)
//     }
//     //return this;
// }
// const movie1 = new Movie('Gaddar2', '2023');
// console.log(movie1);
// movie1.getDetails();


function Car(make, model, car){
    this.make = make;
    this.model = model;
    this.car = car;

    this.getDetails = function(){
        console.log(`make: ${this.make}, model: ${this.model}`);
    }
}
const car1 = new Car('Tata', 'x', 'Jaguar');
console.log(car1);
car1.getDetails();















