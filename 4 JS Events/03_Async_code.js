// Behind the scene

// javasript (these two below is default behaviors)
// by default sychronous (line by line code executiuon) 
// single threaded ( all in one thread ) 

// Execution Context
// execute one line of code at a time
// each operation wait until the last operation has been finished
// we have callStack(functions) and Memory heap( give memory(location))

/*
There are two type of code we can write in js
1.Blocing code (block the flow of program)       --> read file sync
2.Non-Blocking code(do not block the execution)  --> read file Async

Important Node: Both code are good according to what we need

1.if we want user to register in our website that time if he fill details and we wrote the non-blocking code then without cheking it give response to the user
so in this case blocking code is good..

2.There are mant scenarios in which the non-blocking code is good due to make website fast or multitasking
*/


// we can see on the pricture
// when we execute the code that, in callstake, all the code and function is going to run..
// when they find any setInterval or setTimeout or many more that time it goes to webApi and then register call back
// regerster call back register and then it passes to task queue, is come from back and then goes to callstack from front 
// it all goes when it needed
// there is also one new high priority queue over there we called it promise queue
// promise queue is used for fetch() and all
// it is like task queue but it has higher priority
// this is how all the work done behind the scene

// One example

console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);
console.log('3');

// first one is printed
// although it is 0 second time over here but when it goes to webAPi and regerter call and task queue in this time the 3 is executed
// then 2 is executed






