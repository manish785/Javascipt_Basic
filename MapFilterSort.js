
// // -- UseCases
//    // 1. Write Code to get array of names from the given array of users
//    // 2. Get only active users
//    // 3. Sort users by age descending


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

// solution 1
const name1 =[];
// for(let i = 0; i < users.length; i++){
//     //console.log(users[i]);
//     if(users[i].isActive){
//         name1.push(users[i].name);
//     }
// }
// console.log(name1);

// solution 2
// users.forEach(function(user){
//    // console.log(user);
//     if(user.isActive){
//        name1.push(user.name);
//     }
// });
// console.log(name1);

// solution 3
const name2 = users.filter((user)=> user.isActive).map((user)=> user.name);
console.log(name2);


// const obj = {
//     name: 'Alice',
//     greet: function() {
//       console.log('Hello, ' + this.name + '!');
//     }
//   };
  
//   setTimeout(obj.greet, 1000);
  


//   const obj1 = {
//     count: 0,
//     increment: function() {
//       this.count++;
//       console.log(this.count);
//     }
//   };
  
//   setInterval(obj1.increment, 1000);
    
  
  










