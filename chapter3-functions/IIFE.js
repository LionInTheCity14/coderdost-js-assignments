// Immediately Invoked Function Expressions (IIFE)

// sometime for avoiding pollution in function from global scope
// IIFE is used, which run immediately as file runs, such as 
// making sure DB is connected as soon as file run.

function chai(){
    console.log(`DB connected`);
}
// chai();

// names IIFE
(function chai(){
    console.log(`DB conneced`);
})();   // make sure to put semi colon after IIFE, if not code
        // after that will not run

// Unnamed IIFE + parameterized IIFE
((name) => console.log(`DB connected 2 ${name}`))("varun");