// Importance of new Keyword

// in 00_protoType.png directory you can see the image, in image, there is word prototype
// this is what we are going to learn

// Javascript dfault behavois is prototypele behaviour
// means it har nai manti, aage se aage jake dundh lati hai.(we can also call it prototypele inheritence to this behaviour)
// Our classes, new Keyword, this keyword access is given by proto type.

// When we open proto type it open and open and open again, it gonna goes to object

// Important note:
// Every thing inside the javascript is object

// This is called prototyple inheritence 
// Array --> Object --> null
// String --> Object --> null
// Function --> Object --> null

// to tech how function behave like object
function multiple(num){
    return num*5
}
multiple.password = 232310;  // we can also give some object properties like this
// it means function hai vo function bhi hai and object bhi hai 
// because end  of day, badhu function , array ends objects mai hota hai
console.log(multiple(5));
console.log(multiple.password);
console.log(multiple.prototype);  // it gives output - {}  // becuase of its default this
// protoype gives some propties and methods 

function createUser(username, score){
    this.username = username;
    this.score = score;
}

// creating our own methods
// create new method like map and  for each and all(upperCase many more)
// this is how all the methods like for each, map created but it is accesable in our js by default
createUser.prototype.increment  = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

// We must write new keyWord here
const Chai = new createUser("chai", 25);
const Tea = new createUser("tea", 500);
// this keyword means jisne bhi bulaya hai uske pass jao

// we do not need to write prototype word like below as we do not do prototype.map when we want to use map means the work of prototype is done behind the scnene 
// Chai.prototype.printMe();
// Chai.prototype.map();

// so we just need to write 
Chai.printMe();  // our own method
// this method is not working if we do not pass new keyword in Chai when we declared
// this is the importance of new keyword , we must write it in order to perfomm uppper task

