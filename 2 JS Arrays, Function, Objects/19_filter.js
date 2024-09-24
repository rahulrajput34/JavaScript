const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nums = myNums.forEach(el => (el < 6));   // implisit return
// console.log(nums);
// it is giving us undefined

// that is why there are other methods filter and reduce
const numbers = myNums.filter( (num) => (num > 4));  // implisit return

// const numbers = myNums.filter( (num) => {
//    return  num > 4
// });  // explisit return
console.log(numbers);


// These things with for each loop
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];
myNumbers.forEach(num => {
    if(num > 4){
        newNums.push(num)
    }
});
console.log(newNums);

// books array with objects
// real world example
const books = [
    {
        title: 'Book One',
        genre: 'Maths',
        publish: 1022,
        edition: 2023
    },
    {
        title: 'Book Two',
        genre: 'PHy',
        publish: 2022,
        edition: 2023
    },
    {
        title: 'Book Three',
        genre: 'Eng',
        publish: 1233,
        edition: 2003
    },
    {
        title: 'Book Four',
        genre: 'Bio',
        publish: 1200,
        edition: 2024
    },
    {
        title: 'Book Five',
        genre: 'Chemist',
        publish: 1002,
        edition: 2004
    },
    {
        title: 'Book Six',
        genre: 'Py',
        publish: 1990,
        edition: 2015
    },
    {
        title: 'Book Seven',
        genre: 'Java',
        publish: 1998,
        edition: 2014
    },
    {
        title: 'Book Eight',
        genre: 'JS',
        publish: 1995,
        edition: 2012
    }
]

// const userBooks = books.filter( (bk) => (bk.genre === "JS"));
const userBooks = books.filter( (bk) => (bk.publish < 1500 && bk.edition < 2020));
console.log(userBooks);



