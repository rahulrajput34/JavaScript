// This is all happen after ES6
// this is just a syntax, behind the scene, all the work is done by new keyword and prototype
// Basic of classes and this code without class as well

class User{
    // this is how we make contructor
    constructor(username, userID, userPass){
        this.username = username;
        this.userID = userID;
        this.userPass = userPass;
    }
    // functions are called methods in classes
    greetings(){
        console.log(`Hey ${this.username}, How are You?`);
    }

}
// this is how we create Intances
const userOne = new User("Rahul", 2323, 242322);
userOne.greetings();  // this is how we run the methods

// +++++++++++++++++   Same without using a class   +++++++++++++++++++++++++

function WebUser(username, userID, userPass){
    this.username = username;
    this.userID = userID;
    this.userPass = userPass;
}

WebUser.prototype.greetings = function(){
    console.log(`Hey ${this.username}, How are You?`);
}

const userTwo = new WebUser("Urvesh", 2323, 242322);
userTwo.greetings();
