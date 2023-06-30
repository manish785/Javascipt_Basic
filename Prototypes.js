function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){
    //     return this.price;
    // }
}

Vehicle.prototype.getPrice = function(){
    return this.price;
};

var vechile1 = new Vehicle(2, 5000);
console.log(vechile1);
console.log(vechile1.getPrice());

var vechile2 = new Vehicle(20, 50000);
console.log(vechile2);

// we can add the properties at the runtime
Vehicle.prototype.color = "Pink";

console.log(vechile1.color);

var a;
if( typeof(a) ) {
    console.log(typeof(a));
    console.log("true")
}
else {
    console.log("false")
}























