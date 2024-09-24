const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map (it is like for each, but it can return)
// so it is better than foreach to use
const newNums = myNumbers.map( (num) => (num + 10));
console.log(newNums);


// ++++++++++++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++++++
// This is helpful in shopping carts

const prices = [10, 20, 30];

// here currVal is each indexes values and it store in acc
// acc start with given instial value then store currval values
const myBill = prices.reduce( function (acc, currVal){    
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal     // we can also do minus , devide and more
}, 0)   // here 0 is starting value

console.log(`Your total is ${myBill}`);
// first time in acc the zero is going to be stored
// than currvalue is going to be added in acc

// write by using arrow function

const myTotal = prices.reduce((acc, currVal) => (acc + currVal), 0)
console.log(`Your arrow function total is ${myTotal}`);


// ++++++++++++++++++   Question for Reduce   ++++++++++++++++++++++++

const books = [
    {
        title: 'Book One',
        genre: 'Maths',
        price: 1022,
        edition: 2023
    },
    {
        title: 'Book Two',
        genre: 'PHy',
        price: 2022,
        edition: 2023
    },
    {
        title: 'Book Three',
        genre: 'Eng',
        price: 1233,
        edition: 2003
    },
    {
        title: 'Book Four',
        genre: 'Bio',
        price: 1200,
        edition: 2024
    },
    {
        title: 'Book Five',
        genre: 'Chemist',
        price: 1002,
        edition: 2004
    },
    {
        title: 'Book Six',
        genre: 'Py',
        price: 1990,
        edition: 2015
    },
    {
        title: 'Book Seven',
        genre: 'Java',
        price: 1998,
        edition: 2014
    },
    {
        title: 'Book Eight',
        genre: 'JS',
        price: 1995,
        edition: 2012
    }
]


const yourBill = books.reduce(( acc, item) => (acc + item.price), 0)
console.log(yourBill);