// 2.1

let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}
// output will be
/**
 * 4 0
 * 5 0
 * 7 0
*/

// 2.2

let i1 = 0;

for (i1; i1 < 5; i1++) {
  console.log(i1);
}

// output will be
/* 0
 * 1
 * 2
 * 3
 * 4
 */

// 2.3 Write a simple Program in which You have to print first 10 numbers in 
// descending order (10...1)?

for(let i3 = 10; i3 > 0; i3--)
    console.log(i3);

// 2.4 Lets say John is looking a new country to live in. He
// want to live in a country that speaks English, has less 
// than 10 million people. One of the food option between 
// these two must present Spanish food OR English food.

// Write an if/else if statement to help john figure out 
// Your country is right for him?

let countryLanguage = "English", countryPopulation = 10**5;
let food = "English food";

if(countryLanguage === "English" && countryPopulation < 10**6 && (food === "English food" || food === "Spanish food"))
  console.log(`John will live in this country`);
else
  console.log(`John will not live in this country`);

// 2.5

for (let i4 = 0; i4 < 10; i4++) {
  console.log(i4);
}

// console.log(i4);

// output will be
/**
 * 0 to 9 then Error as i4 does not exist in global scope
 */

// 2.6 use nested-if statement to check your age>18,
// than check your height height > 5.10.
// If both true show any message(I can sit in exam) in the console?

const age = 23, height = 5.11;
if(age > 18){
  if(height > 5.10)
    console.log(`I can sit in exam`);
}

// 2.7 Create two variables grade and passingYear.Check if your grade == "A" and 
// passingYear < 2020 with the help of ternary operator(Not allowed to use any 
// logical operator).If both condition true print on console Qualify. Otherwise Fail.

const grade = "A", passingYear = 2019;
const isQualify = (grade === "A" && passingYear < 2020) ? "Qualify" : "Fail"
console.log(isQualify);