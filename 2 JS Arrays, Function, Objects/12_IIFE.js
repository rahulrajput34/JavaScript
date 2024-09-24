// Immediately Invoked Function Expression(IIFE)
// To execute function at the time of declaration we use IIFE syntaxt

// why we use IIFE ??
// 1. we do not want the goble varibales creates any kind of problem in our function because it avaibales to all the function
// (we do not want goble scope polution)
// 2. we want to invoke the webside immediately

// Named IIFE
(function rk(num){
    console.log(`${num}nd DB connected`);
})(1);  // we must give paranthis  over here other wise it never know where to stop context

// UnNamed IIFE
// we can also do using arrow function
((num, num2) => {
    console.log(`${num + num2}nd DB connected`);
})(2, 4);



