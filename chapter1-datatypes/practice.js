// primatives vs reference type

// primatives -> string, number, boolean, null, undefined, symbol, bigInt

const str = "Varun";
const num = 424;
const isTrue = false;
const nullify = null;
const unknown = undefined;
const id1 = Symbol("123");
const id2 = Symbol("123");
const bigNum = 431524645623452345134n;

console.table([str, num, isTrue, nullify, unknown, id1, id2, bigNum]);

console.log(`is id1 and id2 are same ? ${id1 === id2}`);

// Reference type -> Array, Object(most imp), functions,

const arr = [1, 2, "hello"];
const obj = {
    name: "varun",
    age: "23",
}
const func = function(str){
    return `${str} world`;
}

console.table([arr, obj, func("hello")]);

// Difference between primatives and reference type

let str1 = "varun";
let str2 = str1;
str2 = "sahil";              // call by value, (copy of variable's value is given);

console.table([str1, str2]);

let obj1 = {name: "varun"};
let obj2 = obj1;
obj2.name = "sahil";         // call by reference, (same value of variable is given);

console.table([obj1, obj2]);