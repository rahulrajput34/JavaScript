// Closure 
// Very interesting and important concept

function anyfunction(){
    const name = "Dog";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myfun = anyfunction();  
// anyfunction()  // we can not see anything
// jab ham ese store karte hai tab isme sift display name nai jayega uske sath uska outer function agr exist karta hai to uska bhi pura scope jayega memory me
// means full lexicle scope is goes to our myfun memory
myfun();