console.log("Global current context :",this);

const user = {
    username: "varun",
    price: 999,
    welcomeMessage(){
        // "this" means refering current context.
        console.log(`Welcome to website, ${user.username}`);
        console.log("Inside object : ",this);
        return "return value of welcomeMessage()"; 
    }
}
// console.log("user object context : ", user.welcomeMessage());

// console.log("username change to :", user.username = "sahil");

// console.log("user object context : ", user.welcomeMessage());

// user.welcomeMessage();

// global();
function global(){
    console.log(this);
}

// chai1();
function chai1(){
    let username = "varun";
    console.log("function declearation username ",this.username);
    console.log(this);
}

const chai2 = function(){
    let username = "varun";
    console.log("function expression username", this.username);
    console.log(this);
}
// chai2();

const chai3 = () => {
    let username = "varun";
    console.log("Arrow functions username", this.username);
    console.log(this)
}
chai3();

// basic arrow function, explicitly return

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicitly return arrow functions (very useful in react)

// const addTwo = (num1, num2) => (num1 + num2);

// to return objects

// const returnObjectFromArrowFunc = () => {
//     return {username : "varun"};
// }

// or 

const returnObjectFromArrowFunc = () => ({username: "varun"});

console.log(returnObjectFromArrowFunc());

let sum = 0;
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(el => sum += el);

console.log(sum); 