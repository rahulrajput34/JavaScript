// for of
let arr = ["Rahul", "Rk" , "Rajput", "Ram"]
for (const val of arr) {
    console.log(val);
}

// Maps
// it almost same as object
// main difference is it not have duplicate values
// values jis order me enter kiya hai us order me hi rehegi
// we can also do loop over here

let map = new Map();
map.set('IN', 'India')
map.set('US', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'India')  // it not have duplicates

console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// ++++++++++++++++++++  Can we interate the object ?? ++++++++++++++++++++++++++
const names = {
    'game1': 'NFS',
    'game2': 'GTA'
}

// for (const [key, value] of object) {
//     console.log(key, ':-', value);
// }
// Show error it means object are not interatable



//++++++++++++++++++++++++++++ For in loop ++++++++++++++++++++++++++++++++++

// but there are some ways to interate to object
// we use for in loop for it
// from key we access to all the keys
// from names[keys] we access to all the values
// this loop not work in maps
for (const key in names) {
    console.log(names[key]);
}

// Note:
/*
if we do console.log(names.key);
    The loop will not work as expected because names.key will try to access a property named "key" in the names object, which likely doesn't exist
*/

const coding = ["Rk", "Rahul", "Rajput", "R", "Ram"];
// it will give index because it give only keys and in array keys are index
// we can also check this is on broswer in console
for (const key in coding) {
    console.log(coding[key]);
}

//Array has number and its value in key pairs that is why javascript needs object and object is created to give any index.
