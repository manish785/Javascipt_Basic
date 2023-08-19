function Movie(title){
    this.title = title;
   
    // Note - here removing this method because it is making several calls and it leads to wastage of
    // lot oof memory
    // this.getDetails = function (){
    //     console.log(`Title : ${this.title}`);
    // }
}


Movie.prototype.getDetails = function(){
    console.log(`Title : ${this.title}`);
}

const movie1 = new Movie('Gaddar 2');
movie1.year = 2023;
console.log(movie1);
// console.log(movie1.__proto__);
// console.log(movie1.__proto__.__proto__);

const movie2 = new Movie('Gaddar 3');
movie2.year = 2023;
console.log(movie2);
// console.log(movie2.__proto__);
// console.log(movie2.__proto__.__proto__);














