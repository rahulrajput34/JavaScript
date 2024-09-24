const score = 400
const balance = new Number(100);
console.log(balance);

// to string
console.log(score.toString().length);
console.log(typeof score);

// tofixed
// upto two dicimal point
const moreScore = 300.2322;
console.log(score.toFixed(2));
console.log(moreScore.toFixed(2));

// precision
// give the number of digits we have
// It returns value in sting 
// It give presition if the given number is less than the total digits 
const otherNumber = 112323.8966; // give presition
const otherNumber2 = 111.232; // not give presition
console.log(otherNumber.toPrecision(3));
console.log(otherNumber2.toPrecision(3) + " SD");

// Local
// for comma to know the value
const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN'));  // for india commas

//+++++++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);

// absolute
console.log(Math.abs(-12321));   // to convert into absolute value
console.log(Math.abs(232));

// round of
console.log(Math.round(23.243));
// ceil
console.log(Math.ceil(4.2));
// floor
console.log(Math.floor(4.9));

console.log(Math.sqrt(25));
console.log(Math.pow(9,2));

// min max
console.log(Math.min(3,5,6,7,8));
console.log(Math.max(3,5,6,7,8));

// random
console.log((Math.random()*10) + 1); // + 1 is for when the random value multiple 10 is less than one that time it would give value more than 1
console.log(Math.floor(Math.random()*10) + 1);
// it give us value between 1 and 0
// not 1 not 0


// small formula for get value between the given two numbers 
//Important formula
const min = 10;
const max = 20;
let rand = Math.floor(Math.random() * ((max - min) + 1)) + min;
console.log(rand);