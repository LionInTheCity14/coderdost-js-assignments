 let a = 10;
 const b = 20;
 var c = 30;

console.log("Outer 1 :" ,a, b, c);

{
    // console.log(a, b, c);
}

if(true){
    let a = 40;
    // a = 400;
    const b = 50;
    // b = 500;
    var c = 60;
    console.log("Inner : ", a, b, c);
}

console.log("Outer 2:");
console.log("a ", a);
console.log("b ", b);
console.log("c ", c);

// Scope in browser JS is different form nodeJS.

function one(){
    const username = "varun";

    function two(){
        const website = "youtube";
        console.log("Username", username);
    }
    // console.log("website", website);
    two();
}

// two();

// one();

// if-else 
if(true){
    const username = "varun";
    if(username === "varun"){
        const website = "Youtube";
        // console.log(username+" "+website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addOne(5));     // no error
function addOne(num){
    return num + 1;
}

// console.log(addTwo(5));     // error
const addTwo = function(num){
    return num + 2;
}

// console.log(addThree(5));   // error
const addThree = num => num + 3;
