// function sayMyName(){
//     console.log("V");
//     console.log("A");
//     console.log("R");
//     console.log("U");
//     console.log("N");
// }

// conosle.log(sayMyName);
// sayMyName();

function addTwoNum(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else
        return `enter correct numbers`;
}

// console.log(addTwoNum(2, 4));
// console.log(typeof(5) === "number");

function loginUserMessage(username){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a username");
        return;
    }
    else
        return `${username} just logged in`;
}

console.log(loginUserMessage("varun"));
console.log(loginUserMessage());

// dont know how many params are given

function calculateCartPrice(...nums){
    return nums.reduce((acc, num) => num + acc, 0);
}

console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "varun",
    id: 1,
}

function handleObject(obj){
    console.log(`username is ${obj?.username} and id is ${obj?.id}`);
}

// handleObject(user);
handleObject({username: "sahil", id: "2"});

const myNewArray = [200, 400, 100, 600];

function return2ndValue(arr){
    return arr[1];
}

// console.log(return2ndValue(myNewArray));
console.log(return2ndValue([2, 3, 5]));
