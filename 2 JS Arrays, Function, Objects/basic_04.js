// Arrow function or Fat arrow function
// we can define without function key word
let sumTwoNum = (num1 , num2) => {
    let total = num1 + num2;
    return total;
}   

//Anonymous Function
// function which not have their name is called Anonymous function.
let func = function(a , b){
    console.log(a + b);
    console.log("Hey bro");
}
func(5, 3);

// Immediately Invoked Function Execution
// IIFE
// it is going to do given task with even calling it.
(function (){
    console.log("hello");
})();

