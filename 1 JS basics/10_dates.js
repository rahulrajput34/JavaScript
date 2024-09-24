// Dates
let myDate = new Date();
// console.log(myDate); // awkward
// console.log(myDate.toString()); // good(day, month in name, date, year, time, name)
// console.log(myDate.toDateString()); // (day, month in name, date, year)
// console.log(myDate.toISOString()); // (day, month in number, date, year)
// console.log(myDate.toJSON()); // (day, month in number, date, year)
// console.log(myDate.toLocaleDateString()); // (year, month in number, date)
// console.log(myDate.toLocaleString()); // (year, month in number, date) and time with am and pm
console.log(typeof myDate);

// declare a date
// let myCreatedDate = new Date(2023, 0, 23 , 5 , 4); // month start from zero  // 4,5 is for time
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("2023-01-24")
// console.log(newDate.toLocaleString());

// time stamp mate
let myTimeStamp = Date.now() 

// first date 1- Jan - 1970 thi total aape
// from there to todays time in mili seconds
console.log(myTimeStamp);  

// from 1st jan to mynewdate total time in mili seconds
console.log(myNewDate.getTime());

// time in sconds
console.log(Math.floor(Date.now()/1000));  

// for get perticuler
let oneMoreDate = new Date();
console.log(oneMoreDate.getDate());
console.log(oneMoreDate.getDay());
console.log(oneMoreDate.getMonth() + 1);

// we are going to use like below
console.log(`${myNewDate.getDate()} and the time is ${myNewDate.getTime()}`);

// customize the upper format
//Imp .. we have to know that there is something like below inside the JavaScript
console.log(myNewDate.toLocaleString("default", {
    weekday: "long",
}));


