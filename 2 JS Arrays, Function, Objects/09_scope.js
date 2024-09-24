// Scopes

// For Interview
// the scope on online server (inspact and go to console) is different than scope on the node(when we run the code)

if(true){
    let a = 10;   // create block scope
    var b = 20;  // create globle scope
    const c = 30;   // ceate block scope
}
// console.log(a);  
console.log(b);
// console.log(c);

// Important
// scope when there are multiple functions
function one(){
    const userName = "Rahul"
    
    function two(){
        const website = "Youtube"  
        console.log(userName);   // we can access
    }
    // console.log(website);    // we can not access
    two()  // we can do function call inside it's parent only because the function itself inside the scope of it's parent function
}

one();
// two();   // we can not do this function call out side the it parent



// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++


// Normal function
addnums(2)   // it is oky to do this
function addnums(num){
    return num + 1;
}

// function expression
// addTwo(2)  // error 
const addTwo  = function(num){
    return num + 2
}


