// first rule - new keyword
// first rule precedence over second rule,second rule precedence over third rule, goes on 
function vechile1(name){
    this.name = name;
    console.log(this);
}

new vechile1('Manish');

// second rule- call the function using Call and Apply methods
const john = {
    name: 'John',
};

function ask(){
    console.log(this, this.name);
}
//ask();
//ask.call(john);
ask.apply(john);

var raj = {
    name: 'Raj1',
    greet: function(){
        console.log(this, this.name);
    }
};
//console.log(raj.greet());

// var localAsk = raj.greet;
// console.log(localAsk());
 
var localGreet = raj.greet.bind(raj); // bind function basically will return new function
console.log(localGreet());


var manish = {
    name: 'Manish',
    greet: function(){
        console.log(this, this.name);
    }
};

//setTimeout(manish.greet, 1000)
setTimeout(manish.greet.bind(manish), 1000); //hard binding occurs using bind functions


// 3rd - Implicit binding rules
var raj2 = {
    name: 'Raj2',
    greet: function(){
        console.log('Hello', this)
    }
};
//console.log(raj2.greet());

var localAskFunc = raj2.greet;
console.log(localAskFunc);
console.log(localAskFunc()); // It will take window object value because it is calling in global scope


// fourth rule is - default binding rules
function ask1(){
    console.log(this, this.name);
}

ask1();

// Constructors 
function Student(name, rollNo, marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var student1 = new Student("abcd", 15, 78);
console.log(student1);

var student2 = new Student("manish", 15, 78);
//var student2 = Student("manish", 15, 78);
console.log(student2);


// Example
function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    this.getPrice = function(){
        return this.price;
    }
}

var vechile1 = new Vehicle(2, 50000);
console.log(vechile1.getPrice());
var vechile2 = new Vehicle(20, 500000);
console.log(vechile2);























































