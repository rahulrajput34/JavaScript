// Note: Javascript is single threded language means all task is going to run one by one
// How js works behind the scene??

//  JavaScript Execution Context
// This is for all the code , it always presents


// When we run JS that time Javascript devide into two context to run the code
//1. Globle execution Context
//2. Function / Functional execution Context
// There is also Eval execution Context over there it is propert of globale execution context
// We do not worry about Eval

// The code runs in two Phaces
//1. Memory creation Phace  
//2. Execution Phace

//   +++++++++++++++++++++ Question +++++++++++++++++++++++
// How this code run behind the scense

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

//   +++++++++++++++++++++ Answer ++++++++++++++++++++++

// step 1: The Globle Execution Context allocate to this

// step 2: Memory creation Phace (all varibale collected and usme rakha jata hai)
// val1 me jayega undefined  
// val2 me jayega undefined
// addNum me jayega function ki defination 
// result1 me jayega undefined
// result2 me jayega undeined
// This step is called first cycle

// Step 3: Execution Phace
// val1 me jayega 10
// val2 me jayega 5
// addNums vali 3 line ese hi rahegi
// result1 me (ek naya execution context )
// uske bad phle banega( new varibale environment and execution thread)
// ab iske liye bhi Memory face and execution face honge( step wise hoge)
// then all steps of upper repearte over here like givening undefined and allocate the values
// Phir ab ye delete ho jayega
// result2 me bhi naya execution context banega and uske bad usme bhi new varibale environment and execution thread banege
// ab isme bhi memory face and execution face honge
// then all steps of upper repearte over here like givening undefined and allocate the values
// Phir ab ye bhi delete ho jayega
//phir globle wala context bhi delete ho jayega

// This is what happens in behind the scene


// What is callStake ?????
// first globale execution hoga
// When we call one function is come in callstake when the work of its done it removed from callstake
// if functiontwo inside functionOne
// when we call functionOne the first FunctioOne come isidde call stake then the functionTwo come insdie the callstake the function twos work  done that time it come out of callstake and then function one came out


// we can also see in browser in sources
