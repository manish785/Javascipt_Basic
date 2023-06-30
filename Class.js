class Vehicle{

    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

var vehicle1 = new Vehicle(2, 5000);
console.log(vehicle1);

var vehicle2 = new Vehicle(20, 50000);
console.log(vehicle2);


// Note - Hoisting does not work in the Class, and can not call without new keyboard (will throw an error)

// class expression can not hoisted while function expression  can be hoisted

var Vehicle1 = class {

    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

var vehicle1 = new Vehicle1(2, 5000);
console.log(vehicle1);

var vehicle2 = new Vehicle1(20, 50000);
console.log(vehicle2);





































