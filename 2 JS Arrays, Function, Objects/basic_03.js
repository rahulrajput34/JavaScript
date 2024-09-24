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
}

// A function with unlimited parameters
function sumOfAllparametes(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];   // arguments keyword helpful to get unlimited parameter in function 
    }    
    return sum;
}



printMyName();
let total = sumTwoNum(2);   // take num = 3 which we gave defualt
console.log(total);
isOddEven(2) // here 2 is argument
let totalsum = sumOfAllparametes(3, 5, 6, 67, 7); // we can write unlimited

console.log(totalsum + "efe");