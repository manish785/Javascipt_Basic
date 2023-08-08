const teams = ['CKS', 'MI', 'RCB', 'PNB'];

// check the element present in the array

// indexOf
// const rcbIndx = teams.indexOf('RCB');
// console.log(rcbIndx);

// const gtIndx = teams.indexOf('GT');
// console.log(gtIndx);

// includes
// const rcbIndx = teams.includes('RCB');
// console.log(rcbIndx);

// const gtIndx = teams.includes('GT');
// console.log(gtIndx);


// Slice - It does not change the original array, original array remians the same
// console.log(teams);
// console.log(teams.slice(2));
// console.log(teams);


// Splice 
// console.log(teams);
// teams.splice(2, 0, 'GT');
// console.log(teams);


// concat 

const teams2 = [
    'India',
    'AUS',
    'sri'
];

const mergedTeams = teams2.concat(teams);
console.log(mergedTeams);


























