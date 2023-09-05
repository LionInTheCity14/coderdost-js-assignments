// 1.1
let val1;       // undefined;
console.log(val1);
let val2 = null // null
console.log(val2);


// 1.2
// const must be initialized at the time of declaration
const val3 = 1;

// 1.3

let languages = 'java javaScript python cSharp';

let result1 = languages.lastIndexOf('S');

console.log(result1);    // last Index of "S" is 24.

// 1.4

let variable = 'hello programmers';

let result2 = Number(variable);

console.log(result2);   // NaN (Because "variable" is not a string of number).

// 1.5

let num1 = 32;

let num2 = '32';

let result3 = num1 !== num2;

let result4 = num1 != num2;

console.log(result3, result4);  // true false, as result3 checks strictly equality while result4 checks loose equality.


// 1.6

let str = 'Hello Programmers';

let result5 = str.includes('r');

console.log(result5);    // true, str contains r in "Programmers".

// 1.7

let num3 = 2;

let num4 = 5;

let result6 = num3 ** num4 * 2;

console.log(result6);    // 64, first step is 3**4 then multiply ans with 2;

// 1.8

let num5 = [1, 2, 4, 5];

let num6 = [6, 5, 8, 0];

let result7 = num5.concat(num6);

console.log(result7);   // [1, 2, 4, 5, 6, 5, 8, 0];

// 1.9

let a = 5;

let b = 7;

let c = 8;

let result8 = a < b > c;

console.log(result8);   // false

// 1.10 f your State is split into four equal parts such 
// that in each part there are 1/4 number of people live. 
// You have to find how many people would live in each part? 
// which operators will you use ?

// divide operator
let totalPopulation = 100;
let populationAfterSplit = 100/4;
console.log(`Population after split in 1/4 equal parts is ${populationAfterSplit}`);