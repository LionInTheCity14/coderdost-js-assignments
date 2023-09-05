// 7.1: You have given array of strings. Your task is to obtain 
// last two elements of given array using slice method?
// Input;
let admins = ['john', 'paul', 'Neha', 'harry'];
// Ouput[('Neha', 'harry')];
console.log("7.1", admins.slice(-2));

// 7.2: You have given an array of 5 elements(1-5). Your task is defined as below.
// You have to delete 2 elements starting from index 2.
// You have to add 3 new elements on index 1 choice.
// Display the 2 deleted elements in console (from step 1)
const arr = [1, 4, 7, 6, 8];
console.log("7.2", arr.splice(2,2));   // [7, 6];
arr.splice(1, 0, 2, 2, 2);      
console.log(arr);               // [1, 2, 2, 2, 4, 8];

// 7.3: What happens if we use negative number inside slice method?
const arr1 = [1, 4, 7, 6, 8];
// indexing will start from last index of that element and goes till last element of array;
console.log("7.3", arr1.slice(-3));    // [7, 6, 8];

// 7.4: Write three different methods/approaches to get last element of the array?
const arr2 = [1, 4, 7, 6, 8];
console.log("7.4", arr2[arr2.length-1]);
console.log(arr2.slice(-1)[0]);
console.log(arr2.at(-1));

// 7.5: You have given an array of nums. Create new Array with 
// the help of nums array. In new Array each element will be a 
// result of multiplication by 2 of the original array element
// Example: Input;
// let nums = [1, 2, 3, 4, 5];
// output;
// updatedNums = [2, 4, 6, 8, 10];
const arr3 = [1, 4, 7, 6, 8];
console.log("7.5",arr3.map(el => el * 2));

// 7.6 You have given an array of scores in which score of each 
// student is stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%.
let totalScore = 150;
let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
const arr4 = [10, 40, 70, 60, 80];
const cond = totalScore * 75 / 100;
// console.log(cond, 75/2, 75+75/2)
console.log("7.6", scores.filter(el => el > cond));

// 7.7: You have given an array of numbers nums. You have to 
// find sum of all array elements using reduce method?
let nums = [2, 3, 5, 7, 8, 4, 9];
console.log("7.7", nums.reduce((total,el) => {
    total += el;
    return total;
}, 0))

// 7.8: You have given an array of numbers nums. You have to 
// find the index of value 8 using built-in method of array?
let nums1 = [2, 3, 5, 6, 8, 6, 4, 8];
console.log("7.8", nums1.findIndex((el) => el === 8));

// 7.9: You have given an array of objects of users as below.
//  Find the specified user with name = "John" 
// Also find the position (index+1) of that user inside the array?
let users = [
    {
      name: 'Paul',
  
      age: 24,
  
      verified: true,
    },
  
    {
      name: 'John',
  
      age: 21,
  
      verified: false,
    },
  
    {
      name: 'Neha',
  
      age: 19,
  
      verify: true,
    },
  ];

console.log("7.9","required user object is", users.find(el => el.name === "John"), "and required user is at index", users.findIndex(el => el.name === "John"));

//   7.10: Guess the Output and explain Why?
let nums2 = [1, 2, 4, 5, [6, [8]], [9, 0]];
let res1 = nums2.flat(1);
let res2 = nums2.flatMap((el) => el);
console.log("7.10", res1, res2);
// res1 = [1, 2, 4, 5, 6, [8], 9, 0];   // 1 level deep
// res2 = [1, 2, 4, 5, 6, [8], 9, 0];   // 1 level deep for every element (flat + map);

// 7.11: You have given an array of nums. Write a program to 
// sort the elements of array in descending order using 
// built-in method of array.
// Input;
let nums3 = [5, 1, 4, 6, 8, 3, 9];
// Output[(9, 8, 6, 5, 4, 3, 1)];
console.log("7.11", nums3.sort());

// 7.12: Guess the Output and Explain Why?
let arr5 = [1, 2, 3, 4];
let result = arr5.splice(1, 2).pop();
console.log("7.12", result);    // 3, arr5.splice(1, 2) will give [2, 3] then pop will
// give 3;

// 7.13: You have given an array of numbers nums You have to 
// check if all elements of the array > 15 using built-in array 
// method. return true or false
let nums4 = [16, 17, 18, 28, 22];

console.log("7.13",nums4.every((num) => num > 15)); // true

// More Practice Questions (Arrays)

// Question 1: Guess the Output And explain Why?
let strArray = [1, 2, 3, 4, 5];
let result1 = strArray.reverse(); // result1 = [5, 4, 3, 2, 1] & strArray = [5, 4, 3, 2, 1];
console.log("Q1",result1 == strArray); // true, because array.reverse() is mutable mtd.

// Question 2: You have given two arrays below as an example. 
// Your task is to combine them into one By using array method
// input;
let arr6 = [1, 2, 3, 4, 5];
let arr7 = [6, 7, 8, 9, 10];
// ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];
console.log("Q2-1",arr7.concat(arr6));
console.log("Q2-2",[...arr7,...arr6]);

// Question 3: You have given an array of letters below. 
// Convert that array into string of letters Without Space
// input;
let arr8 = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
// output; ('abhishek');
console.log("Q3",arr8.join(""));

// Question 4: Guess the Output and explain why?
let arr9 = [11, 62, 1, 27, 8, 5];
let sorted = arr9.sort();
console.log("Q4-1",sorted); // unexpected behaviour
let sorted2 = arr9.sort((a, b) => {
  if(a < b) return -1;
  else if (a > b) return 1;
  else return 0;
});
console.log("Q4-2",sorted2); // now sorted

// Question 5: Create a function 'calcAverageHumanAge', which 
// accepts an arrays of dog's ages ('ages'), and does the 
// following thing in order:
// Calculate the dog age in human years using the following 
// formula: if the dogAge <= 2 years old, humanAge = 2 \* 
// dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge
// Test  data
let  arr10 = [12,2,5,12,8,13,9];

// function calcaverageHumanAge(ages){
//   if(dogAge <= 2){
//     humanAge = 16 + dogAge;
//   }
// }
console.log("Q5", arr10.map((el) => {
  if(el <= 2){
    return 2 * el;
  }else{
    return 16 + el;
  }
}))

// Question 6: Guess the Output and Explain Why?
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
let elem = arr.at(-1);
console.log("Q6",elem); // 8, indexing starts from last if value is -ve.

// Question 7: Guess the Output and Explain why?
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
let result2 = arr12.slice(2, 5).splice(0, 2, 21).pop();
console.log("Q7",result2, arr12); // result2 = 4, arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr12.slice(2, 5) = [3, 4, 5].splice(0, 2, 21) = [21, 5] and return value = [3, 4],
// [3, 4].pop() = 4;