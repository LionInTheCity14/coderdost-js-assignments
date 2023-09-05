// if()

// if(condition){

// }

// <, >, <=, >=, ==, ===, !=,!==

if(2 !== 3){
    console.log("yes!");
}

const balance = 1000;

// if(balance > 500)
//     console.log("greater than 100"),
//     console.log("greater than 500");    // bad practice

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log(`user logged in : ${userLoggedIn} and has debit card : ${debitCard}`);
}

const loggedInFromGoogle = false, loggedInFromEmail = true;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}