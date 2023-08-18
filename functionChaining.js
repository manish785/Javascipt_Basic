
// function chaining

class Product {
    constructor (name, qty){
        this.name = name;
        this.qty = qty;
    }

    getName (){
        console.log('Product name is: ', this.name);
    }

    getQty (){
        console.log('Product qty is: ', this.qty);

    }
}

const mobile = new Product('Iphone', 1);
console.log(mobile);
console.log(mobile.getName());
console.log(mobile.getQty());


const watch = new Product('Iwatch', 1);
console.log(watch);
console.log(watch.getName());
console.log(watch.getQty());

// here function chaining is not possible because we are not returning "this" object here...
// console.log(mobile.getName().getQty()); // mobile.getName() is returning undefine, we are calling function on undefined


// function chaining

class Product1 {
    constructor (name, qty){
        this.name = name;
        this.qty = qty;
    }

    getName (){
        console.log('Product name is: ', this.name);
        return this;
    }

    getQty (){
        console.log('Product qty is: ', this.qty);
        return this;
    }
}

const mobile1 = new Product1('Iphone', 1);
console.log(mobile1);
console.log(mobile1.getName());
console.log(mobile1.getQty());


const watch1 = new Product1('Iwatch', 1);
console.log(watch1);
console.log(watch1.getName());
console.log(watch1.getQty());

console.log(mobile1.getName().getQty()); // here, value will get printed because we are returing "this" 

