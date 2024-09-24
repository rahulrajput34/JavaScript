// part 2 of objects
// singleton  -- object made from costructor is single ton, other are not single ton
// const instaUser = new Object()  // single ton empty object
const instaUser = {} // non single ton object
instaUser.id = "123abc"
instaUser.name = "Rahul"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Rahul",
            lastName: "Rajput"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);

// murging objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {obj1, obj2};  // this is how it is not going to work
// console.log(obj3);


// we have empty object in order to tell that the obj1 and obj2 is going to be store inside a object
// without this {} empty object the method is perfectly fine but we give this one.
const object4 = Object.assign({}, obj1, obj2)
console.log(object4);

// we most of time use below sysntax to murge two objects 
const newObj = {...obj1, ...obj2};
console.log(newObj);

// Below sysntax we wolud see in future when the request come from database
const users = [
    {
        id:1
    },
    {
        name:"Rahul"
    },
    {

    },
    {

    }
]

console.log(users[0].id);
console.log(instaUser);
// to get all the keys and all the values
// we are going to get this value in array format and do array proeprties.
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
// to make 2D array  of key value pairs
console.log(Object.entries(instaUser));

// has 
// has property or not
// to check if it has a key of given name or not 
console.log(instaUser.hasOwnProperty("id"));
console.log(instaUser.hasOwnProperty("name"));
console.log(instaUser.hasOwnProperty("Rahul"));

// we can also find other properties inside mdn or from inspect


