// part 1 of objects


// object literals
const sym = Symbol("myKey1")
const jsUser = {
    name: "Rahul",
    age: 20,
    [sym]: "myKey1",   // to add symbol we must use []. 
    location: "Hamilton",
    email: "RahulRajput@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Saturday"]
};   

// these are two type of methods from we can access one keys or value
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[sym]);
// console.log(jsUser["Hamilton"]);

// chnage a value
jsUser.email = "Rahul@rk.com"

// freeze method for freeze the value of object
// if we do this method after that we can not change the value of given object value
// Object.freeze(jsUser)
// console.log(jsUser);

// The meaing of first class citizens of function is we can store inside the varibale 
jsUser.greeting = function(){
    console.log("Hello brother");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);  // this key word points out to its original object
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



