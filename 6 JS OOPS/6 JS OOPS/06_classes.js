// Inheritence in the classes
// we use extends keyword for it
class User{
    constructor(username, userID, userPass){
        this.username = username;
        this.userID = userID;
        this.userPass = userPass;
    }

    greetings(){
        console.log(`Hey ${this.username}, How are You?`);
    }

}

// this is how we extends the classes
// here Techer is parent and User is child
class Teacher extends User{
    constructor(username, useremail){
        super(username);
        this.useremail = useremail;
    }

    Working(){
        console.log(`What is you work ${this.username} and email is ${this.useremail}`);
    }
}

const userOne = new User("Rahul", 2323, 242322);
const techerOne = new Teacher("urvesh", "urvesh@gmail.com")

// userOne.Working();   // error because inherit class not have have property of parent class
techerOne.greetings();
techerOne.Working();



console.log(userOne === techerOne); // false


// To if it is instence of the class or not
console.log(userOne instanceof User);