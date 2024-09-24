const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chaining is something loop and loop
// const newNums = myNums.map().map().filter()

// const newNums = myNums.map((num) => (num*10)).map((num) => (num + 10));

// below one and upper one are exact same
const newNums = myNums
                .map((num) => (num*10))
                .map((num) => (num + 10))
console.log(newNums);
// when we do chaining that time, in first chain the value update and then it passed to second chain
// here in first map value of index one is 1 after map it become 10 and 
//in second chain the starting value is 10 and after loop it become 20

//Another example
const anotherNums = myNums
                    .map((num) => (num*10))
                    .map((num) => (num + 10))
                    .filter((num) => (num < 100))
console.log(anotherNums);

