// const means constant something which is going to constant in the whole code
// we can not chnage the value of const
const userId = 123456789

// let and var is similer but there is one difference.. let is for one scope and var is accesable in another scope as well(it create globale variable).
// so that we are not going to use var
let userEmail = "rahulrajput@gmail.com"
var accountPassword = "123445"
accountCity = "Sidhpur"  // this is we are not going to use
let accountState;
// this going to print undefined because something is defined but yet not get the value.


// userId = 13132323;   --> we cannot able to upgdrade the const varibale

userEmail = "rajput@gmail.com"
accountPassword = "222222"
accountCity = "Ahemdabad"

/*
    prefer not to use var becs of issue in block scope and functional scope
*/

console.table([userId , userEmail, accountPassword, accountCity, accountState])