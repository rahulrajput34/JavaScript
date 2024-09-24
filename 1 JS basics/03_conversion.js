// pay attenction on below one
let score = "123Rk";
// both the same things
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// we are converting string to number and the type become number and the value sotre is NaN..
// These are some uncertainity in JavaScrip
// we have to rember below one

// if we do upper operation for string and all type then what happen
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0;
// undefined => NaN

let isLoggedIn = 1;
let booleanIsloogedIn = Boolean(isLoggedIn);
console.log(booleanIsloogedIn);

// 1 => true; 0=> false;
// "" => false
//"rk" => true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

