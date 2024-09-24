// There are two methods of declaring arrow function

// 1.implesite return
// return without using return keyword and curly brackets
const addThree = (num1, num2, num3) => (num1 + num2 + num3);
console.log(addThree(1,2,3));

// the first question is why we give paranthisis in second block
// we give paranthisis becauce when we return object that time it become mandatory

// const Adds = (num1, num2, num3) => {name: "Rahul"};  // give undefined
const Adds = (num1, num2, num3) => ({name: "Rahul"});   // work perfectly 
console.log(Adds(1,2,3));
// so it is good practice to give paranthisis when we do implisite return


// 2.explisite return
const addTwo = (num1, num2) =>{
    return num1 +  num2;
}
console.log(addTwo(1,2));

// this is where we use implesit arrow method
const myArr = [2, 4, 5, 6, 7];
// myArr.forEach( () => ());