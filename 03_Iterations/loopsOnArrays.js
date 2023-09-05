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
// console.log(filtered);

// map do some operation on each value of array and return it and add it to new array.
const mapped = nums.map((elm) => {  
    return elm * 2;
});
// console.log(mapped);

// channing
const mapped1 = nums
                .map((elm) => elm * 3)
                .filter((elm) => elm > 15);

console.log(mapped1);

console.log();

// reduce does some operation on each element of array and return accumalated value

const initialValue = 0;

const reduced = nums.reduce((acc, currValue) => {
    console.log(`acc : ${acc}, currValue : ${currValue}`);
    return acc + currValue;
}, initialValue);

console.log(reduced);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "py course",
        price : 999,
    },
    {
        itemName : "mobile dev course",
        price : 5999,
    },
    {
        itemName : "data science course",
        price : 12999,
    },
];

const total = shoppingCart.reduce((acc, currItem) => acc + currItem.price, 0);

console.log(total);
// or 

// const [itemName, price] = {itemName : "something", price : 999};
// console.log(itemName, price);

// const total1 = shoppingCart.reduce((acc, [name, price]) => acc + price, 0);

// console.log(total1);

console.log(nums);  // original array is not changed.