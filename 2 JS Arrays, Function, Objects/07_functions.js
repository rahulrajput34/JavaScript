// Functions in JavaScript
function printMyName(){
    console.log("Hehe");
    console.log("haha");
}

// a function with one parameter
function isOddEven(num1){  // here num 1 is parameter
    if(num1/2 == 0){
        console.log("Odd");
    } else{
        console.log("Even");
    }
}

// a fuanction with two parameters(here one parameter is defualt)
function sumTwoNum(num1 , num2 = 3){
    let total = num1 + num2;
    return total;
    // after result che that is why anreachable code
    console.log("Rahul");
}

const result = sumTwoNum(3, 6);  // argumnets (3,6)
console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined) {    // if(!username)  (both are same)
        console.log("Please Enter a username");
        return; /// if we do not want to print furture code
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());