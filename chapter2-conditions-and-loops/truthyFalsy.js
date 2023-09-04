// false, 0, -0, BigInt 0n, "", null, undefined, NaN : these are falsy value;
// else are truthy values 
// truthy values
// "0", "false", " ", [], {}, function(){}
const userEmail = "v@varun.ai";

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined 

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

// ternary operator
// condition ? true : false ;

const num = 14;

const range = num < 5 ? "less than 5" :
              num < 10 ? "less than 10" :
              num < 15 ? "less than 15" :
              "greater than 15";

console.log(range);