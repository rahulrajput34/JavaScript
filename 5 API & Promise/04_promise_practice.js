// Question: from this api, do this promise task by async & awain, And then.catch
// what we did in promise was make our own prmoise
// by fetch key word we do all the task we do not need to resslove and all just pass fetch keyword and api ulr
async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();    // this one take more type to format so we have to await this as well
        console.log(data);
    } catch (error) {
        console.log("ERROR is", error);
    }
}
// getAllusers();


// Upper thing with then().catch()

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

