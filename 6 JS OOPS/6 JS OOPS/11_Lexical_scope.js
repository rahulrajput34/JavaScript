// The below one called lexicle scoping

function outer(){
    let username = "Rahul"
    function innerOne(){
        let secret = "my123"
        console.log(username);  // acceptable
    }
    function innerTwo(){
        console.log(username);
        // console.log(secret); s // not acceptable
    }
    innerOne()  // acceptable
    innerTwo()  // acceptable
}

// innerOne();   // not acceptable
outer();  // acceptable