// ********** => primitive

// call by value  // value allocate thay memory ma
// 7 types: String, Number , Boolean, null, unndefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

// the use of symbol is to create unique value
const id = Symbol('123')
const anotherId = Symbol('123')
// even if both id and anotherId is same it is going to give false
// because symbol make them unique
console.log(id === anotherId);

// we write n in the last to make it bigint 
const bigNumber = 2323232324323432343234334323n;
console.log(typeof bigNumber);


// ********* =>  Non-primitve

// referenced type  // reference allocate thay memoery ma
// Array, Objects, Functions.
// all non-prmitives have dataypes is object 
// function=> object function

const heros = ["rahul", "Urvesh", "doga"]
let myObj = {
    name: "rahul",
    age: 22,
}

const myFunction = function (){
    console.log("Hello brother");
}

console.log(typeof myFunction);  // function object
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof heros);   // object
//JavaScript is dynamacilly typed language( google it ).










