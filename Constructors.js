// first rule - new keyword
// first rule precedence over second rule,second rule precedence over third rule, goes on 
function vechile1(name){
    this.name = name;
    console.log(this);
}

new vechile1('Manish');

function vechile(){
    console.log(this);
}
console.log(new vechile());


function Student(name){
    this.name = name ;
    console.log(this) ;
}
var student1 = new Student("Raj") ;
console.log(student1.name);

// using new keyword to call function
function Vehicle(name){    //Create empty Object 
    this.name = name;      // linked with vehicle prototype
    console.log(this);    // Vehicle -> this -> {name}
}
new Vehicle('car'); //   return newly created object


// calling the function using Call or Apply method
const john = {
    name: 'John',
};

function ask(){
    console.log(this, this.name);  //first will return name object and second will print the value
}

ask(); // output- window object and undefined
ask.call(john);  //one way to call ask function
ask.apply(john);  //other way to call ask function




const billy = {
    name: "Billy Jol", 
    outer: function() {
         function inner(){
         console.log(this);
       }     
       inner();
    }
  }
  billy.outer();
























