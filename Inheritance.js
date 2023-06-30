// var Vehicle = class {

//     constructor(numWheels, price){
//         this.numWheels = numWheels;
//         this.price = price;
//     }

//     getPrice(){
//         return this.price;
//     }
//     printDescription(){
//         console.log("Vehicle: " + this.numWheels, this.price);
//     }
// }

// // Note -> Before using car's own properties, have to use Super Keyboard
// class Car extends Vehicle{
//    constructor(numDoors){
//        super(4, 10000000000);
//        this.numDoors = numDoors;
//    }
// }

// var c = new Car(4);
// console.log(c);



// // var vehicle1 = new Vehicle(2, 5000);
// // console.log(vehicle1);

// // var vehicle2 = new Vehicle(20, 50000);
// // console.log(vehicle2);


// var obj = {
//     name: "Manish",
//     age: "25"
// };
// for(var i in obj){
//     console.log(i);
// }




// var d = {h: 2, j: 3}

// var e = d
// console.log(e);
// var f = {...d, j: 4}
// console.log({...d});
// console.log(f);

// console.log(f.h)
// console.log(f.j)

// function change1(obj) {
//     obj.name = "ninjas"
//     console.log(obj.name);
// }
// function change2(obj) {
//     obj = {name: "changed"}
//     console.log(obj.name);
// }
  
// var obj = {name:"coding"}
  
//   console.log(change1(obj));
//   console.log(change2(obj));
//   console.log(obj.name)  



// function abc(arr) {
//     var arr2 ;
//     console.log(arr);
//     for(i in arr) {
//        // console.log(arr[i]);
//         console.log(i);
//         console.log(arr2[i]);
//         arr2[i] = i;
//     }
//     console.log(arr2);
//     return arr2;
// }

// var arr = [12, 56, 48, "hello"];
// console.log(abc(arr)[1]);

// function cart() {
//     let items ;
//     return {
//        addItem: function () {
//             items =0;
//             items++;
//         },
//         getItem: function () {
//             return items;
//         }
//     };
// }

// const closure = cart();
// closure.addItem();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());


// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i ); 
//       };
//      // console.log(shooter);
//       shooters.push(shooter);
//       i++;
//     }
//   //  console.log(shooters);
//     return shooters;
//   }
//   let army = makeArmy();
//   //console.log(army);
//  console.log(army[0]());
//  console.log(army[5]());
//  console.log(army[1]());
//  console.log(army[3]());
//   army[5]();



// function makeArmy() {
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   console.log(army[0]());
//   console.log(army[5]());
//   console.log(army[3]());
//   console.log(army[7]());


// var d = {h: 2, j: 3}

// var e = d
// var f = {...d, j: 4}

// //console.log(f);

//  console.log(d.h);
// console.log(f.h)
// console.log(f.j)







// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000);
//     }
//     console.log('namesate javascript');
// }
// x();


function x(){
    for(var i=1;i<=5;i++){

        function close(x){   // everytime it will take, different value of x
            setTimeout(function(){
                console.log(x)
            }, x*1000);
        }
        close(i);
    }
    console.log('namesate javascript');
}
x();






































































