// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

// Question: when we do a request from promise and there is error of 404 (a resolve ma malse ke reject ma)
// Anwer: Vo hamesha response me hi milega vo error nai hai.
//error tab hota hai jab browser req kar hi nai paya

// we can also learn new things on mdn about fetch
// examples of fetch
//1.
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    const data = response.json();
    return data;
})
.then(function(dataAboveOne){
    console.log(dataAboveOne);
})
.catch(function(err){
    console.log("error", err);
})
.finally(function(){
    console.log("Promise either rejected or resolved");
})

//2. fetch by async and await
async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();    // this one take more type to format so we have to await this as well
        console.log(data);
    } catch (error) {
        console.log("ERROR is", error);
    }
}

// behind the scene fetch works in promise queue
// when we give 1 second to normal queue and 1 second to promise queue , the promise queue task first run

