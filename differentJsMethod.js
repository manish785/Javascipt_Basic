
// Use Cases -
// 1.Check if the user with same name Exists
// 2.Adding element to the array 
// 3.Remove Duplicates elements in array
// 4. concentating the array


const users = [
    {
        id: 1,
        name: 'Ajay',
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: 'Manish',
        isActive: false,
        age: 20
    },
    {
        id: 1,
        name: 'Alok',
        isActive: true,
        age: 20
    },
]


// 1.Check if the user with same name Exists

// Level 0 - solution
// const isNameExist = (name, users)=>{
//     let flag=false;
//     for(let i=0; i<users.length; i++){
//         if(users[i].name==="Rohit"){
//             flag=true
//         }
//     }
//     return flag;
// }
// let val = isNameExist("Manish",users);
// console.log(val);


// Level 1 - solution
// const isNameExist=(name, users)=>{
//     const user = users.find((user)=> user.name === name);
//     return Boolean(user);
// }
// console.log(isNameExist('Mansi', users));

// Level 2 - solution
// const isNameExist=(name, users)=>{
//     const index = users.findIndex((user)=> user.name === name);
//     return index >=0;
// }
// console.log(isNameExist('Mansi', users));


// Level 3 - solution
// Level 1 - solution
// const isNameExist=(name, users)=>{
//     const user = users.some((user)=> user.name === name);
//     return user;
// }
// console.log(isNameExist('Mansi', users));

// Adding elements to the array
// const arr =[1, 2];
// const append=(arr, ele)=>{
//    return [...arr, ele];
// }

// console.log(append(arr,3));
// console.log(arr);




// Conectating the Array
const mergeArray = (arr1, arr2)=>{
   // return arr1.concat(...arr2);
    return [...arr1, ...arr2]; // In this method, arr1 remains unchanged
    // arr1.push(...arr2); // In this method, arr1 gets changed
    //return arr1;
}
const arr1=[1];
const arr2=[2,3];
const result=mergeArray(arr1, arr2);
console.log(result, arr1, arr2);
















// const obj = {
//     name: 'Alice',
//     greet: function() {
//       console.log('Hello, ' + this.name + '!');
//     }
//   };
  
//   setTimeout(() => obj.greet(), 1000);
  
//   const obj = {
//     count: 0,
//     increment: function() {
//       this.count++;
//       console.log(this.count);
//     }
//   };
  
//   setInterval(() => obj.increment(), 1000);

//   const obj = {
//     value: 10,
//     printValue: function() {
//       console.log(this.value);
//     }
//   };
  
//   setTimeout(obj.printValue.bind(obj), 1000);
  
//   const obj = {
//     name: 'Alice',
//     greet: function() {
//       console.log('Hello, ' + this.name + '!');
//     }
//   };
  
//   setTimeout(function() {
//     obj.greet();
//   }, 1000);
  

//   const obj = {
//     value: 5,
//     increment: function() {
//       this.value++;
//       console.log(this.value);
//     }
//   };
  
//   setInterval(obj.increment.bind(obj), 1000);
  

// function filterArray(arr) {
//     return arr.filter(value => value % 2 === 0);
//   }
  
//   const array = [1, 2, 3, 4, 5];
//   const filteredArray = filterArray(array);
//   console.log(filteredArray);


// function modifyArray(arr) {
//     arr = arr.map(value => value * 2);
//     arr.push(5);
//     console.log(arr);
//   }
  
//   const array = [1, 2, 3];
//   modifyArray(array);
//   console.log(array);


// function sum(a, b) {
//     return a + b;
//   }
  
//   function doubleValue(value) {
//     return value * 2;
//   }
  
//   const array = [1, 2, 3];
//   const result = array.map(doubleValue).reduce(sum, 0);
//   console.log(result);



// function filterArray(arr) {
//     const result = arr.filter((value, index) => {
//       return arr.indexOf(value) === index;
//     });
//     return result;
//   }
  
//   const array = [1, 2, 3, 2, 4, 5, 3];
//   const filteredArray = filterArray(array);
//   console.log(filteredArray);
  
// function modifyValue(obj) {
//     obj.value *= 2;
//   }
  
//   const object = { value: 3 };
//   modifyValue(object);
//   console.log(object.value);



// function processData(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i]));
//     }
//     return result;
//   }
  
//   const array = [1, 2, 3];
//   const modifiedArray = processData(array, value => value * 2);
//   console.log(modifiedArray);

// const arr = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   arr[i] = null;
// }
// console.log(sum, arr);







  






  
  











  









  
  
  
  









































