if( 2 === "2"){   // this is for stict check
    console.log("You are wrong");
} else{
    console.log("Your are right");
}

if( 2 == "2"){   // this is not for stict check
    console.log("You are wrong");
} else if(2 != "2"){
    console.log("Your are right");
} else{
    console.log("You are noob");
}
// <, >, !==, ==, <= ,>=, !=, ===

// if-else
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFaceBook = true;

if(userLoggedIn && debitCard && 2 == 4){   // 2 == 4 to give always not login
    console.log("Allow user");
} else{
    console.log("Not Allowed");
}

if(loggedInFromFaceBook || loggedInFromGoogle){
    console.log("Used Looged In");
}

// we also have Swich case
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Enter a valide number");
        break;
}

// for string
const months = "Jan";
switch (months) {
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "Mar":
        console.log("March");
        break;
    default:
        console.log("Enter a valide String");
        break;
}

/// Nullish Coalescing Operator (??)
// this is helpful when we call from database that time we not gonna get response directly, we get response from it in two values. if we get undefined or null that time program can be crash.
// this is where we use this ?? to save our programs from crash

const val1 = 5 ?? 10;
console.log(val1);

const val2 = null ?? 10;
console.log(val2);

const val3 = undefined ?? 10;
console.log(val3);

const val4 = undefined ?? 11 ?? 2;
console.log(val4);


// Terniary Operator
// condision ? ture: false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80"): console.log("More than 80");



