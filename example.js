var person = {
    name: 'John',
    ask: function(){
        console.log(this);
    }
}
console.log(person.ask.bind(person));
console.log(new(person.ask.bind(person))());

"use strict"
function bike() {
    console.log(this.name);
}
var name = "Ninja";
bike();

function Abc() {
    "use strict"
    this.a = 25;
    return {a: 35, b: 44};
    }
    var obj = new Abc();
    console.log(obj.a, obj.b);


    class Person {
        constructor(name) {
            this.name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        }
        var person = new Person("James");
        console.log(person);

        function User(name) {
            this.isAdmin = false;
            return name;
            }
            var user = User("Jack");
            console.log(user);

            var a = "A";
            console.log(65 - a);

            console.log(typeof(undefined));


            console.log(x1);
            var x1=10;