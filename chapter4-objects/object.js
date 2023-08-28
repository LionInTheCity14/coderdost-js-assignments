// singleton: objects created form constructors are one of there own type
// Object.create()

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Varun",
    "full name": "Varun Pal Singh",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "varun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser["lastLoginDays"]);

// // how to print symbol from object
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// use Object.freeze(obj1) to freeze obj1 from any other changes
// Object.freeze(jsUser);

jsUser.email = "varun@openai.com";

jsUser.greeting = function(){
    console.log(`Hello Object, ${this.name}`);
    return "I am return value of function, which is irritating you with 'undefined'."
};

console.log(jsUser.greeting());
console.log(typeof jsUser.greeting());


console.log(jsUser);
