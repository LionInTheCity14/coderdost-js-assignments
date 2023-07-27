// 3.1: Create a function Declaration called describeYourState Which take three 
// parameters Population, traditional food and historical place. Based on this input 
// function should return a String with this format.

// My state population is ** Its traditional food is ** and historical place name is ___

function describeYourState(population, traditionalFood, historicalPlace){
    console.log(`My state population is ${population}, Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}`);
}

describeYourState("25cr","Bedai Kachori","Mathura");

// 3.2: Create a function expression which does the exact same thing as defined in Question 1.

const describeYourState1 = function(population, traditionalFood, historicalPlace){
    console.log(`My state population is ${population}, Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}`);
}
describeYourState1("10cr", "Dalbati Churma","Udaipur");

// 3.3: Create function addition which takes two numbers as an argument And return 
// the result of sum of two numbers

// Important Note: In the function call you are not passing any parameter. You can 
// modify function to achieve this.
// Example;

function addition(num1=10, num2=20) {
  return num1 + num2;
}

console.log(addition()); //You are not allowed to modify this line any more.

// 3.4: Identify which type of value passed below into the function greet(). What 
// will be the return value of greet ?
let person = {
    name: 'john',
  
    age: 25,
};
  
function greet(person) {
    person.name = `Mr ${person.name}`;
  
    return `Welcome ${person.name}`;
}
  
greet(person);
console.log(typeof person);     // object
console.log(greet(person));     // Welcome Mr John


// 3.5: Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.

function firstUpperCaseWord(str){
    const words = str.split(" ");
    return words[0].toUpperCase();
}

function transformer(str,func){
    return func(str);
}

console.log(transformer("this is just a example",firstUpperCaseWord));

// 3.6: create function which will display Your name after every 5 seconds.

// input
// let  yourName  =  "john";

// output
// "john"  after  5  second

// "john"  after  5  second

// "john"  after  5  second

// "john"  after  5  second

// .

// and  so  on.

setInterval(function(name){
    console.log(`${name} after 5 seconds`);
},5000,"Varun");

// 3.7: Guess the Output And Explain Why?
let arrowFunction = (name = 'Coders') => {
    `Welcome ${name}`;
};
  
console.log(arrowFunction('Programmers'));  // It missed to write return keyword 
// before string, but if return is written then it will output the "Welcome 
// Programmers", as "Coders" is overrided by "Programmers".

// 3.8: Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.
// input: area_of_triangle(5, 6, 7);

// output: 14.69;

function findArea(side1, side2, side3){
    const s = (side1 + side2 + side3)/2;
    return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
}

console.log(findArea(5, 6, 7));

// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.
// input: capitalize('we are the champions');

// output: 'We Are The Champions';

function capitalize(str){
    const words = str.split(" ");
    const capitalizedWords = [];
    console.log(words);
    for(const word of words){
        const capitalizedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }
    console.log(capitalizedWords);
    console.log(capitalizedWords.join(" "));
}
const input = "we are the champions";
capitalize(input);