// unlimited paramters
// we use rest operatior for this
function calculatrCartPrice(val1, val2,...num1){
    return num1;
}

// the first two is going to store in val1 and val2 and rest of all are going to store in rest operator

console.log(calculatrCartPrice(100, 200, 300, 400));

// passing an object as parameters
const user = {
    username: "Rahul",
    price: 100
}

function handleObject(anthing){
    console.log(`Username is ${anthing.username} and price is ${anthing.price}`);
}
// handleObject(user);
// upper one and below one are same so that we can also pass direct object to a function in function call
handleObject(
    {
        username: "Rahul",
        price: 100
    }
)


// Passing a Array as an argument in function

const myNewArray = [200, 300, 400, 500]
function returnSecondValue( myArray){
    return myArray;
}

// console.log(returnSecondValue(myNewArray));
// we can also pass direct array to the function call
console.log([200, 300, 400, 500]);

