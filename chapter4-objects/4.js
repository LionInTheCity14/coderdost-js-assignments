// "use strict"

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
    describeCar(){
        console.log(`Company of my car is ${this.company}. It color is ${this.color} and model of my car is ${this.model}`);
    }
};

let carColor = 'Blue';
console.log(car[carColor]); // it will search for 'Blue' key in object which is not 
// present, hence show undefined
console.log(car.carColor);  // car does not have carColor as key, so it will show undefined.

// 4.4: Create a method describeCar inside car object in which you have to print like 
// this in console using template literals

// Company of my car is ** . It color is And Model of my car is __**

// function describeCar(){
//     console.log(`Company of my car is ${this.company}. It color is ${this.color} and model of my car is ${this.model}`);
// }
// describeCar.bind(car);
car.describeCar();

// 4.5: Generate random numbers between 0 and 10 using trunc method of MATH object.
// Example

function getRandomNumbers(){
    return Math.trunc(Math.random() * 11);
}
console.log(`Random number is ${getRandomNumbers()}`);

// Ouput  value  0-10

// 4.6: Guess the Output and Explain Why?

let  arr  = [1,2,3,4];

arr.forEach(elem  =>{
if(elem  ==  1){
    // continue;    // ideally continue should be used in loops, as its give errors here.
}
console.log(elem);
});


// 4.7: Guess the Output And explain Why?

// Important Note: if there is any error, How we can solve that error?

let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book(passenger, flightNum) {
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    },
  };
  
  let bookMethod = airplane.book;
    console.log("bookMethod is: ",bookMethod);
    bookMethod.call(airplane,"Jhon","2.2");
    // bookMethod.bind(airplane); // this will work if "use strict" was disabled.
    // bookMethod("Harry","23");

//   4.8: Guess the Output And Explain Why?

// let arr1 = [1, 2, 3, 4];
let arr1 = ["first", "second", "third"]

for (let elem in arr1) {
  console.log(elem);    // it will only prints index no.
  console.log(arr1[elem]); // it will print the elements in correct order,(all elements)
}

// 4.9: You have to create a Shopping_Cart array with following features :

// addItem(itemName) : this function should add string itemName to cart

// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

// cartSize() : returns size of cart in terms of number of cart Items.

const Shopping_Cart = [];

const obj = {
    addItem(arr,itemName){
        arr.push(itemName);
    },
    
    removeItem(arr,itemName){
        const idx = arr.indexOf(itemName);
        arr.pop();
    },
    
    cartSize(arr){
        return arr.length;
    },
};

obj.addItem(Shopping_Cart, "one");
obj.addItem(Shopping_Cart,"two");
obj.addItem(Shopping_Cart,"third");

console.log(Shopping_Cart, "size =",Shopping_Cart.length);

obj.removeItem(Shopping_Cart, "one");

console.log(Shopping_Cart, "size =",Shopping_Cart.length);
