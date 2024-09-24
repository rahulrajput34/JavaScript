const arr1 = ["Rahul", "Rajput", "Mahi"];
const arr2 = ["urvesh", "Rajput", "lasan"];
// This is we are not going to murge two arrays
// this is going to upgrade an aaray
// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[1][2]);

//Concate
// this is going to return new array
const oneMoreArr = arr1.concat(arr2);
console.log(oneMoreArr);

// There is one more method for it
// most of time use below one
// spread operator
const allNewArray = [...arr1, ...arr2]
console.log(allNewArray);

//to change 2d or 3d or 4d or infiniteD array to one flat array
const another_array = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]]

// if array is 2D and we want to change to flat we give 1
// infinity is Jugad
const real_another_arrsy = another_array.flat(Infinity)
console.log(real_another_arrsy);


// to check if it is array or not
console.log(Array.isArray("rahul"));

//from
// from is helpful to create an array from the given value
console.log(Array.from("Rahul"));
// empty array we have to define what we want key or value
console.log(Array.from({name: "Rahul"}));   // interesting

// of
// create an array from given values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

