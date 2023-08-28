const num = 145.2455;

console.log(num.toFixed(2));    // 145.25;

// important to know

console.table([num.toPrecision(1), num.toPrecision(2), num.toPrecision(3), num.toPrecision(4), num.toPrecision(5)]);

const hundreds = 1000000000;
console.log(hundreds.toLocaleString())  // by default according to US standards
console.log(hundreds.toLocaleString("en-IN"))   // Indian standards

// ########################### Maths #########################################

console.log(Math);
console.log(Math.abs(-4));      // neg to positive only

console.log(Math.round(4.56));
console.log(Math.ceil(4.56));
console.log(Math.floor(4.56));

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.round(Math.random() * 10) + 1);

// random between range

const minOfRange = 10;
const maxOfRange = 13;

console.log(Math.round(Math.random() * (maxOfRange - minOfRange + 1)) + minOfRange);