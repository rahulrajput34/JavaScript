// Proto Type   -- to make our own method like in-build methods
let myHero = ["Thor", "spiderman"];

let heroPower = {
    speed: "120km/h",
    fly: true
}

// As we have seen Everything inside the JS is object thst is why we add new method to object and it is the avilable for function , array and string all

// this one accesable to all array, function and objects
Object.prototype.rahul = function(){
    console.log(`I am rahul`);
}

heroPower.rahul();
myHero.rahul();  

// but this one is not present in object. object has parent prototype
// this propties also not has in function and strings it only has in array
Array.prototype.heyRahul = function(){
    console.log(`Rahul is Rajput`);
}

// heroPower.heyRahul();  // Not accessable
myHero.heyRahul();    // accessable


// Above one is called prototyple inheritence 
// Array --> Object --> null
// String --> Object --> null
// Function --> Object --> null

// +++++++++++++++++++++++  Three ways to give protoTypele inheritence  ++++++++++++++++++++++++++++++++
let user = {
    name: "Rahul",
    email:"rahul@gmail.com"
}

// Inheritence 
let teacher = {
    createVideo: true
}

//Old syntax
let techerAssistence = {
    // To access all the propeties of techer
    __proto__: teacher,  // first way
    helpteacher: true
}

let TA = {
    fullTime: true,
    Create: "Assignemnts of JS"
}

//Another way
// user is parent , techer is child
teacher.__proto__ = user

// Mordern Systax
// techerAssistence is child, techer is parent
Object.setPrototypeOf(techerAssistence, teacher);