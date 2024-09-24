const name = "Rahul";
const repoCount = 50;
console.log( name +  " " + repoCount + " " + "Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

// we can create this string on the console and get all the in-build properies  of the string
const gameName = new String("Rahul-Rajput");
// console.log(gameName);
// console.log(gameName[0]);

// return empty object
// console.log(gameName.__proto__);  // for fun


//some methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("R"));
// substring
const newString = gameName.substring(0,3);
console.log(newString);

//slice
const anotherString = gameName.slice(0, 6);
console.log(anotherString);

/// trim
// it romoves starting spaces and ending spaces
const newStringONe = "  Rahul    Rajput ";
console.log(newStringONe);
console.log(newStringONe.trim());

// replace
const url = "https://rahul.com/rahul%20rajput"
console.log(url.replace("%20", "-"));

//include
console.log(url.includes('rahul'));

//string to array
console.log(gameName.split('-'));



