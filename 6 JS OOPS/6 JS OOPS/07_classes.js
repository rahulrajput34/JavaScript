// Static keyword in classes
// We create static methods becasue we do not want give access to someone else

class User{
    constructor(username, userID, userPass){
        this.username = username;
        this.userID = userID;
        this.userPass = userPass;
    }

    static createID(){
        console.log(`Hey ${this.userID}, How are You?`);
    }

}

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

techerOne.createID();
userOne.createID();

// We can not access like this because it is static method
// We create static methods becasue we do not want give access to someone else
// Here we do not want user create multiple ID's
