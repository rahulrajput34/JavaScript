// we can resize it
// we can add different string
// zero based indexing
// make shallow copy 
// shallow copy means call by reference
// deep copies means call by value

// declare array
const arr = [0, 1, 2, 3, 4, 5, true, "rahul"];
console.log(arr[0]);

const newArr = new Array(1,2,3,4);
console.log(newArr);

// methods
// push  -- Add a new element at the last
arr.push(2);
arr.push(5);
console.log(arr);

// pop -- remove element at the last
arr.pop();
console.log(arr);

// shift --remove elemennt from the start
arr.shift();
console.log(arr);

// unshift -- added at the first
arr.unshift(23)
console.log(arr);

// includes
console.log(arr.includes(23));

// concate -- to make one array from two arrays
let arr1 = [1,2,3,4];
let arr2 = [3,4,5];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// join -- to make array into string
const axx = [1,2,3,4,5,6,7,8];
let zxx = axx.join("hehe")
console.log(zxx);
console.log(typeof zxx);

// reverse -- reverse an array
let cxx = axx.reverse();
console.log(cxx);

// serach for element
console.log(cxx.indexOf(5));

// Interview Question:
//what is difference between slice and splice

//slice
// it is going to print the given array, last index not included
// original array is not going to change
const lastArr = [1, 2, 3 , 4, 5]
console.log("A", lastArr);    // original array
const myn1 = lastArr.slice(2, 4);  // not last index included
console.log(myn1);      
console.log("B", lastArr); //  array after slice

// splice
// it is going to print array with all three index and last index included
// And is also going to change in original array
const lastArrTwo = [1, 2, 3 , 4, 5]

const myn2 = lastArrTwo.splice(2, 4);
console.log(myn2);  // last index included
console.log("C" , lastArrTwo);   // array after splice

// The difference between slice and splice
// when we do slice then print array the array is going to be same
// but when we do splice and then print the original array it is going to be remove the elements which we spiced