// Seniour level Interview Question
//The value of pie is 3.14 when we do Math.PI
// Question is can we change it or not 
// if change it ? why?   ||    if not ? why?


// Not working
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// getOwnPropertyDescriptor()  // inbuilt properties ma sadi karvi hoy to
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);  

// output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// Answer: here  writable is false so that we are not able to change the value of PI


// ++++++++++++++++++++ now question is how to change writable ++++++++++++++++++++
// it is not changable for inbuilt methods but for our own methods we can modidy it

const rk = {
    name: 'rahul',
    company: 'Google',
    isAvailable: true
}
// step 1: to give this below poperty where we want to change
console.log(Object.getOwnPropertyDescriptor(rk, "name"));

// step 2: Do below to change it
Object.defineProperty(rk, 'name', {
    value: 'rahul',
    writable: false,
    enumerable: true,
    configurable: true
})

// step 3: we did writable false so that name is not changing to urvesh below.
rk.name = "Urvesh"
console.log(rk.name);



