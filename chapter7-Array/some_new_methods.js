let score = 1;
let score1 = 2;
let score2 = 3;

const arr1 = Array.of(score, score1, score2);

console.log(arr1);

const arr2 = Array.from({name: "varun"}) // interesting case,
// have to specify to if key have to use or value to make new array.
// otherwise gives empty array
console.log(arr2);

console.log(Array.isArray("varun"));
console.log(Array.isArray(Array.from("varun")));