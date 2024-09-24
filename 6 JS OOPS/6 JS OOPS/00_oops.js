// JavaScript and Classes

// javaDcript is prototype based language, class are there in js but, most of the time, it is not used 
// Classes is programming paramind(likhne na acha tarika)

// what is object
// collection of properties and methods
// - toLowerCase, promise and many

//Why use OOPS
// Because make code reusable at many place

//Componets / parts of OOPS
// object literal -- mean literally object

/// some of the keywords we gonna learn
// constuction  function
// protorypes
// classes
// Intances( new, this)

// 4- pillars of OOPS
// Abstraction   --> what happen behind the scene is not showing to you but it do work for us  (example fetch() --> we made promise and then give response and reject, fetch() do all the things itself but not show us how he did it behind the scene. This is called Abstraction.
// Encapulation  --> make thing private
// Inheritance   --> classes inside the classes( we use extends key word in java)
// Polymorphism  --> (overridding- classes with same function name and paras but diffrent logic), and (overloading- function with same name diffent paras) is called Polymorphism

//++++++++++++++++++++++++++++    what is object literal??   ++++++++++++++++++++++++++++++++++++
// below  one is object literal
const user = {
    username: "Rahul",
    loginCount: 10,
    singedIn: true,
    getUserDetails: function(){
        // console.log(`Got user details from database of ${username}`);  // it would throw an error because out runtime not knows which username it should take
        // that is why we should give this keyword over here
        console.log(`Got user details from database of ${this.username}`);
        // console.log(this);  // it would give current context
    }
}

console.log(user);
console.log(user.getUserDetails());
// console.log(this);  // it would give empty object( curly brackets)here
// but when we do on browser that time it give window object which is globale object

// +++++++++++++++++++++++++++++++++  this keyword ++++++++++++++++++++++++++++++++++++++++
// When we make two arrays so our bower do not know that where to do all the methods
// that is why we give this keyword suggesting them current context
// In simple words, this is giving current context



// When we want to create userTwo that time we need to create userTwo like this and it is lenghty process
// here's where we use constuction function 
const userTwo = {
    username: "Rahul",
    loginCount: 10,
    singedIn: true,
    getUserDetails: function(){
        console.log(`Got user details from database of ${this.username}`);
    }
}

// +++++++++++++++++++++++++++++++  Constuction Function +++++++++++++++++++++++++++++++++++++++
// const promiseOne = new Promise();
// const date = new Date();
// new keyword is helpful to create new object
// and we called new keyword controction function

function User(username, loginCount, isLoggedIn){
    // we want that take username and assign the username which is above
    // username = username  
    // we use this key word to assig a value
    this.username = username;
    // first this wala username is our varibale and username is parameter which we passed
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // we can also user function over here
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }    
    return this;   // it is not mandatory it is default
}

// const userOne = User('Rahul', 10, true);
// console.log(userOne);

// const usrTwo = User('Rk', 12, false);
// console.log(usrTwo);  // it will overwrite the value

// here's where we use new keyword, means use controctor function
const oneUser = new User('Rahul', 10, true);
const twoUser = new User('Rk', 12, false);
// console.log(oneUser.constructor);   // output [Function: User]
console.log(oneUser);
console.log(twoUser);

// it means controctor function give new instance all the time
// Somwthing about NewKeyword


/* +++++++++++++++++++++++++++   when we use new keyword   ++++++++++++++++++++++++++++++++++++++
step 1: new empty object is created(we called it intance)
step 2: Controctor function is called because of new keyword( it packed all the arguments and give it to us)
step 3: all the arguments is gonna injected to this keyword
step 4: we got it in our function
*/


// ++++++++++++++   There is also a keyword called instaceof  +++++++++++++++++++++++++++++++++
// We can check it if it is created by using object User or not
console.log(twoUser instanceof User);
console.log(oneUser instanceof User);

