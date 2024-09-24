// Question (make your own method which give original lenght of an array)
let myname = "Rahul       ";
console.log(`lenght is ${myname.length}`);

String.prototype.trueLenght = function(){
    const trueString = this.trim();
    console.log(`True lenght is: ${trueString.length}`);
}

myname.trueLenght();
"there      ".trueLenght();
"Rk".trueLenght();