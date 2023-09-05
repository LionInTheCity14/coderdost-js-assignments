let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());
console.log(myDate.getUTCFullYear());

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2023-08-29");
console.log(myCreatedDate1.toLocaleString());

// time stamps (used in booking sites and online quizs);

let toCompareFrom = new Date().getTime();
console.log(toCompareFrom);

let player1 = Date.now() - toCompareFrom;
let player2 = Date.now() - toCompareFrom;

console.log(`player1 time is ${player1} and player2 time is ${player2}`);

if(player1 > player2){
    console.log(`Player2 win, his time is ${player2}`);
}else{
    console.log(`Player1 win, his time is ${player1}`);
}

// more useful method

let currDate = new Date();

const convertedDate = currDate.toLocaleString("default", {
    weekday: "long",
    // timeZone: "IST",
});

console.log(convertedDate)