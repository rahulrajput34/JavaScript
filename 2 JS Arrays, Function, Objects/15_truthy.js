// Truthy value and Falsy value

const userEmail = [];
if(userEmail){
    console.log("Got user mail");
} else{
    console.log("Do not get the use mail");
}

// Flasy value
// false, 0, -0, BigInt ma 0n ekloj, "", null, undefined, NaN

// except above 
// all truthy value
// Some example
// true, "0", 'false', function(){}, [], " " <- string na under game te space pan thruthy

//How to check if array is empty or not??
if(userEmail.length === 0){
    console.log("Array is empty");
}

// How to check if object is empty or not
const empObject = {}
if(Object.keys(empObject).length === 0){
    console.log("Object is emplty");
}


// One more interview question
// if we compare on broswer

/* 

false == 0
false == ''
0 == ''

*/

// all have answer true