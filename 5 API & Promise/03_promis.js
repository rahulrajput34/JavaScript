// promise means abhi ke abhi task nai hoga, jake line me lag jayega jab time aayega uska tab hoga ya phir nai hoga

//Defination
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise has three states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed

// ++++++++++++++++++++   How to create a Promise ?? ++++++++++++++++++++++++++

const promiseOne = new Promise(function(resolve, reject){
    // promises do Async task
    // it used in DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();  // we should give it for resolve
    }, 1000);
})

promiseOne.then(function(){       // resolve is directly connected to this then
    console.log("Promise Consumed");
})


// ++++++++++++++++++++++++ below one is direct method of upper one  +++++++++++++++++++++++++++++++++

new Promise(function( resolve, reject){
    setTimeout(function() {
        console.log("Async task 2 Complete");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise resolve again");
})


// +++++++++++++++++++++++  promise 3 +++++++++++++++++++++++++++++++++

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function() {
        // resolve("Rahul") // we can pass anthing over here
        resolve({username: "Chai", email: "rahul@gmail.com"})  // but most of the time we pass object over here
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);   // whaever we passes in resolve it comes to here becauce resolve and this then both are connected
})

// ++++++++++++++++++++++++++++++++ Promise 4 ++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;  // if error = ture below catch block executed
        if(!error){  // if error nahi hai to first one execute karo
            resolve({username: "rahul", password:"12345678"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then(function(user){
    console.log("I am executing");   // execute only if no error
    return user.username;  // yaha jo return karege vo isme const deke to nai le sakte
    // is liye yaha ek aur then aata hai
    // waha sara data jata hai
})
.then((myUserName) =>{   // data of above then will come over here
    console.log(`I am ${myUserName}`);
})
.catch(function(err){  // if error occur then and only then execute
    console.log(err);
})
.finally(function(){         // execute at any cost
    console.log("The promise is eigher resolve or rejected ");
})

// +++++++++++++++++++++++ Promise 5(with async, await) +++++++++++++++++++++++++++++++++++

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false;  // if error = ture below catch block executed
        if(!error){  // if error nahi hai to first one execute karo
            resolve({username: "JavaScript", password:"12345678"})
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000);
})

// this is how we can do upper task by async and await key words
async function consumePromiseFive(){  
    // here there is not catch block so that we must give try catch block to handle errors
    try {
        const response = await promiseFive  // It is object so that we are not gonna write like promiseFive()
    console.log(response); 
    } catch (error) {
       console.log(error); 
    }
     
}
consumePromiseFive() // here we do not need to pass another then for print (we can directly get value by call the function)

// +++++++++++++++++  this is all using fetch++++++++++++

// Upper thing with then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    const data = response.json();
    return data;
})
.then(function(dataAboveOne){
    console.log(dataAboveOne);
})
.catch(function(err){
    console.log("error", err);
})
.finally(function(){
    console.log("Promise either rejected or resolved");
})

//  ++++++++++++++++++++++++++ The most important note  +++++++++++++++++++++++++++++++++++++
// Here first this fetch executed and than all upper one executed because fetch is in high priority task Queue
// when we give 1 second to normal queue and 1 second to promise queue , the promise queue task first run

