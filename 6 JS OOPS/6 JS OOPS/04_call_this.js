// Nowdays, call is not that musch important
// Solving a problem in callstake
function setUserName(username){
    this.username =username;
    console.log("called");
}

function createUser(username, email, password){
    // this.username = username;  // we want to do that over here from upper function
    // when we do below one that time it not working
    // setUserName(username) // not working so that because it called over there but after calling it removes its all varible from call stack , so did not reach out createUser function
    // so we must hold it reference over here
    // for holding the reference we use call keyword
    // video stamp : 08:05:00  
    // setUserName.call(username)  // still not working , so give our own this for holding reference
    setUserName.call(this, username)  // yeee, now it is working
    this.email = email;
    this.password = password;
}

const rahul = new createUser("Rahul", "rahul@gmail.com", "123");
console.log(rahul);