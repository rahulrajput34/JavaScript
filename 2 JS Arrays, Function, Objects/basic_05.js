// function expression
// way to define a fucntion and assign  it to is variable
// Anonymous fdunction and Arrow functions are function expression
// The only difference is  function expression have a name too where as Anonymous function not have a name.

let addTwoNum = function(x, y){
    return x+ y;   // Anonymous function expression
}

let TwoNum = function sumOftwo(x, y){
    return x + y;    // named function expression
}

console.log(addTwoNum(3,4));
console.log(TwoNum(4,5));

// we can call  both by its variable.. the first one(with no name) is easy to wrtie and second one is easy to debug(withname)