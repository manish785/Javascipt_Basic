
const car = {
    name : 'car',
    color : 'black',
    getDetails(brand, seats){
        console.log(`This is ${this.color} ${this.name} of ${brand} company. It has ${seats} seats`);
    }
}

const bus = {
    name : "bus",
    color : 'blue'
}


// car.getDetails('Audi', 5);

// car.getDetails.call(bus, 'BMW', 4); // passing list of arguments

// car.getDetails.apply(bus, ['BMW', 4]); // passing the arguments inside the array

const veh1 = car.getDetails.bind(bus);
// can reuse it multiple times
veh1('silver', 20);
veh1('Gold', 26);






