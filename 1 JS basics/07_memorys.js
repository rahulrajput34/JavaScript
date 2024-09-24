// Stack (primitive), Heap(Non-primitive)
// stack give a copy
// heap give reference means change in original value

// This is for all primitive
// this one store in the stack that is why a copy of one varibale is going to store in another one
let myYoutubeName = "FFRK YT"

let anotherChannel = myYoutubeName;
anotherChannel = "Rahul rajput";

console.log(myYoutubeName);
console.log(anotherChannel);

// This is for all not primitives
// This one is inside the heap that is why it is going to chnage the orignle value.
let userOne =  {
    name: "Rahul",
    Email: "rahul@gmail.com"
}
let userTwo = userOne;

userTwo.name = "Urvesh"

console.log(userOne);
console.log(userTwo);
