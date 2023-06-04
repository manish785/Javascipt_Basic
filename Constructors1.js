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





































