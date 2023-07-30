"use strict"

// 4.1 Guess the **Output** And Explain ?
console.log(Math.round(Math.random() * 10)); // Random number between 1 to 10.

// **4.2:** Create an object called `country` for a country of your choice,
//  containing properties `name` , `capital`, `language`, `population` and `neighbors`

// 1. Increase the country population by two million using **dot** notation.
// 2. Decrease the country population by one million using **bracket** notation.
// 3. Make `language` value in Uppercase.

const country = {
    name: "India",
    capital: "New Delhi",
    languages: ["Hindi","Tamil","Thelgu","English","Gujrati","Punjabi"],
    population: "150cr",
    neighbors:["Nepal","Afganistan","Tibet","Mayanmar","Sri Lanka","Bhutan"],
}

country.population = "150.20cr";
country["population"] = "150.3cr";
const upperCaseLang = [];
for(let language of country.languages){
    upperCaseLang.push(language.toUpperCase());
}
console.log(upperCaseLang);

// **4.3:** Guess the **Output** and explain Why?
let car = {
    color: 'Blue',

    model: 2021,

    company: 'Toyota',
};

let carColor = 'Blue';
console.log(car[carColor]); // it will search for 'Blue' key in object which is not present, hence show undefined
console.log(car.carColor);  // car does not have carColor as key, so it will show undefined.

// **4.4:** Create a method **describeCar** inside `car` object in which you have
//  to print like this in console using template literals


// **Company of my car is ** . It color is** And Model of my car is \_\_**

// **4.5:** Generate random numbers between 0 and 10 using **trunc** method of 
// **MATH** object