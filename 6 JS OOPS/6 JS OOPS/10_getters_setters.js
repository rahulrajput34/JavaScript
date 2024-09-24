// getter and setter
// after 2022, we are using # intread of _(underscore)
class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // when we define getter we must define setter in JS
    get password(){
        return `${this._password}rahul`;
    }

    // we must return getter
    get email(){
        return `rahulrajput${this._email}`  // this is how we give fake email if anyone want to get (one type of encapulation)
    }

    // it gonna set the value and controctor also setting value
    // so we got error of RangeError: Maximum call stack size exceeded
    // set password(value){
    //     this.password = value;
    // }
    // So how to set the value
    // we give one underscore so it not going to confused and throw error

    
    // we do not return setter
    set password(value){     //we give password property from there it know we are refering the password varibale
        this._password = value;
    }

    set email(value){
        this._email = value;  // it is  better to give _email but we can give anything
    }
}

const rahul = new User('rahul@gmail.com', "12345");
console.log(rahul.password);
console.log(rahul.email);


// +++++++++++++  What we were doing when there is not classes in JS? ++++++++++++++
// +++++++++++++++++++++ function based getters and setters ++++++++++++++++++++++++
function Teacher(email, password){
    this._email = email;
    this._password = password;

    // we must give our this and the varibale we want to get and object
    // in object we give getters and setters
    Object.defineProperty(this, 'email', {
        get: function(){
            return `abcdX${this._email}`
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return `abcdX${this._password}`
        },
        set: function(value){
            this._password = value
        }
    })
}

const t1 = new Teacher('teacher@gmail.com', '123Rk');
console.log('Old one:->' , t1.email);
console.log('Old one:->' , t1.password);

// ++++++++++++++++ Object based  getters and setter(Old One) +++++++++++++++++++
// we can not function and object based syntax in codes
// we most the time see class based syntaxt of getters and setter.


const Animal = {
    // when we give underscore that time we want to say we are giving private varible
    _email: 'zoro@gmail.com',
    _password: 'zoronoob',
    get email(){
        return this._email;
    },
    set email(value){
        this._email = value
    }
}
// we can not create new object by new keyword , we should use factory function for it
const animalOne = Object.create(Animal)    // factory function
console.log(animalOne.email);
