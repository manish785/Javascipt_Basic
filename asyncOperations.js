
// const promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         const data =  "Promise resolved successfully!";
//         resolve(data);
//     }, 2000)
// });


// promise.then((data)=>{  // this handle the resolved case
//     console.log('Hello world!!');
//     console.log(data);
//    // return;
// }).then(function(){   // this handle the resolved case
//     console.log('this peice of the code will always executed');
//    // return;
// }).catch(function(err){
//     console.log('hi');
//     console.log(err);
// })


function greet(name, callback){
    console.log(name);
    callback();
}

function callback(){
    console.log('Here, I am invoking the callback function');
    return;
}


greet ('Manish', callback);