const coding = ["js", "ruby", "java", "python", "cpp", "go"];

//  arr.forEach((element, index, arr) => { // do some operaton for each item in arr

// });

// arr.forEach doesn't return any values and use only for printing.

coding.forEach((elm, idx, arr) => console.log(elm, idx, arr));

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
];

myCoding.forEach((obj) => {
    console.log(`Language name is ${obj.languageName} and file name is ${obj.languageFileName}`);
});

// map, filter, reduce methods for array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for those elements, condition become true, they were returned and added to new array
// arr.filter((elm) => condition) 

const filtered = nums.filter((num) => {
    // console.log(num);
    return num > 4
});
console.log(filtered);

// map do some operation on each value of array and return it and add it to new array.
const mapped = nums.map((elm) => {  
    return elm * 2;
});
console.log(mapped);

console.log(nums);  // original array is intect.