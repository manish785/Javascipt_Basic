// var promise = new Promise((resolve, reject) => {
//    //resolve("Yay, Promise is full filled");
//    //reject("Something went wrong");
//    setTimeout(()=>{
//       // resolve({message: 'success'});
//          reject({message: 'error'});
//    }, 3000)
// });

// //console.log(promises);
// promise.then((data) => {   // It handle the fullfilled state of the promise
//     console.log(data);
// }).catch((error) => {
//     console.log("error", error); //It handle the rejected state of the promise
// })


// // Callback
// // function greet(name, callback){
// //     console.log(`Hi ${name}`);
// //     callback();
// // }

// // function askQuestion(){
// //     console.log('How are you?');
// // }

// // greet('manish', askQuestion);


// //example
// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 1000);
// console.log(3);

// // we get asynchronous nature of JS using callback function
// console.log(100);
// var promise1 = new Promise(function(resolve, reject){
//     resolve(200);
// });
// promise1.then(function(data){
//     console.log(data);
// });
// console.log(300);


// // example - Promise and event loop
// setTimeout(function(){
//     console.log(10);
// }, 0);

// var promise = new Promise(function(resolve, reject){
//     resolve(20);
// });
// promise.then(function(data){
//     console.log(data);
// })

// console.log(30); 

// async function - It basically return a promise
// async function asyncTask(){
//     return "Resolved";
// }
// console.log(asyncTask());


// async function x() {
//     try{
//       await Promise.reject("Rejected!!")
//     } catch(e) {
//       console.log(e)
//     }
//   }

// x();


// function x() {
//     Promise.reject('x')
//     return Promise.resolve('y')
//   }
  
//   async function log() {
//     const val =  await x()
//     console.log(val)
//   }
  
//   log()



  const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('a')
    })
  })
  
  const promise2 = new Promise((resolve,reject) => {
    resolve('b')
  })
  
  const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('c')
    },10)
  })
  
  
  Promise.race([promise1,promise2,promise3])
  .then((msg) => {
    console.log(msg)
  })


  x((a,b,c) => {
    return a+b+c
  },2,3,6)
  
  function x(callback,a,b,c) {
    let str = ""
    setTimeout(() => {
      str += "x"
    });
  
    str += callback(a,b,c)
    console.log(str)
  }
























































