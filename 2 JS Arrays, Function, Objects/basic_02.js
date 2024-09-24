// some of the methods of an array

let arr = [10, 20, 30, 40];

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

// concate -- to make one array from two arrays
let arr1 = [1,2,3,4];
let arr2 = [3,4,5];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// slice --  to get one part of array from given two indexex.
const axx = [1,2,3,4,5,6,7,8];
const ayy = axx.slice(2, 4);
console.log(ayy);

// join -- to make array into string
let zxx = axx.join("hehe")
console.log(zxx);

// reverse -- reverse an array
let cxx = axx.reverse();
console.log(cxx);

// serach for element
console.log(cxx.indexOf(5));

// splice
let z = [1,2, 3, 4, 5, 6, 7]
let removed = z.splice(2, 2, 0, 0);
console.log(removed);


