
// example of promise -> promise

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(function(){
//         resolve('Going through very Bad Times');
//     }, 5000);
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).then((data)=>{
//     console.log('Hope, the things will be better soon');
// })


// example of callback 

// function greet(name, callback){
//    console.log(name);
//    callback();
// }
// function callback(){
//     console.log('Here, the callback function is getting called');
// }

// greet ('Manish', callback);

// example of closure 

// function a(){
//     var i=10;
//     return function b(){
//         var j=20;
//         console.log(i, " ", j);
//     }
// }

// var c = a();
// console.log(c);
// c();
//console.log(c());

// write a program that prints 1 after 1 sec, 2 after 2 sec, 3 after 3 sec
// function x (){
//     for(var i=1;i<=5;i++){
//         function close(x){
//         setTimeout(function(){
//             console.log(x);
//         }, x*1000)
//        }
//     close(i);
//     }
//     console.log('Going through very bad phase of life');
// }
// x();

// write a program that prints 10 to 0 after every second

let count = 1;
function abc(){
   console.log('after every second', count);
   count++;
   if(count==6){
       clearInterval(id);
       return;
   }
}




var id = setInterval(abc, 1000);





























