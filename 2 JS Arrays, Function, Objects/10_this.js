// Talk about this keyword
const user = {
    userName: 'Rahul',
    emailID: 'rahul@gmail.com',
    company: 'Adobe',
    welcome: function (){
        //This is how we can not do
        // console.log(`${userName}, welcome to Google`);

        console.log(`${this.userName}, welcome to Google`);
        // here the 'this' key word is referering to curent context

        console.log(this); // it gonna print current context
    }
}

// user.welcome  // not prints

// we should give paranthisis to print
// user.welcome();

// user.userName = "Rk"
// user.welcome();


// console.log(this);
// This gonna give {} because we are doing in nodejs
// if we do on server it give window  <<--- globle context
// Window is globle object


function rk(){
    let userName = "Rahul"
    // console.log(this);
    console.log(`${this.userName}`);  // it prints undefined
}

const rkTwo = () => {
    let userName = "Rahul"
    // console.log(this);
    console.log(`${this.userName}`);  // it prints undefined
}

rk();
rkTwo();

