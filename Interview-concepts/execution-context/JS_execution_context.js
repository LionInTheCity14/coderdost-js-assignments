// JS execution context : means the way in which js will execute the file.

// Two types of execution context

// 1) Global execution context -> "this"
    // global execution context for browser js and node js is different 
    // browser js -> "this" -> window 

// 2) Functional execution context

// (optional)
// 3) Eval execution context (it property of global and only knowing this is sufficient).


// two types of phases

// 1st phase : Memory creation phase or creation phase.
// 2nd phase : execution phase.

// Example for execution


let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);


/*  VERY IMPORTANT

 1st phase : Global Execution -> this

 2nd phase : Memory creation phase -> 
    val1 -> undefined, val2 -> undefined
    addNum -> function defination
    result1 -> undefined
    result2 -> undefined

 3rd phase : Exection phase
    val1 -> 10
    val2 -> 5
    addNum -> function defination
    result -> addNum -> (new variable environment + execution thread)
    -> everytime this function is called, a new variable environment and execution thread will be created, and this is also called as "new execution context".

        new memory phase
        num1 -> undefined
        num2 -> undefined
        total -> undefined

        new execution context
        num1 -> 10
        num2 -> 5
        total -> 10 + 5 = 15
        return total to global execution context;
       
        now, after return the result to global execution context, this new execution context is "deleted".
        
        result1 = 15

 again : new executin phase for result2 (new variable environment + execution thread)

        new memeory phase
        num1 -> undefined
        num2 -> undefined
        total -> undefined

        new execution context
        num1 -> 10
        num2 -> 2
        total -> 10 + 2 = 12
        return total to global execution context

        now, nvm and ec are deleted

        result2 = 12;
*/

/* VERY IMPORTANT
In browser's source tab inside snippet section write a code and run and see the working of program's scope and call stack 
*/

