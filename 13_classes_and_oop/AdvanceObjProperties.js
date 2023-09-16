// for single property only
const descripterForPI = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripterForPI);

// console.log(Math.PI);
// Math.PI = 3.14;
// console.log(Math.PI);

// Object.defineProperty(Math, "PI", {
//     writable: true,
// });

// Math.PI = 3.14;
// console.log(Math.PI);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`Chai nahi bani`);
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// only for "name" property
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
    // configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== `function`)
    console.log(`${key} : ${value}`);
}