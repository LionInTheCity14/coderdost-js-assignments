// for of loop

const heros = ["Hulk", "Thor", "Ironman", "Cap", "Batman", "Superman"];

// for (const hero of heros) {
//     console.log(`each hero of heros is : ${hero}`);
// }

const greetings = `Hello World!`;

// for(const greet of greetings){
//     console.log(`each letter of greetings is : ${greet}`);
// }

// console.log([...greetings], {...greetings});

// console.log({...heros});

// Maps

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

map.set("IN", "India"); // no repeatation of values
// console.log(map)

map.set("in", "India"); // duplicate values can only occur with diff keys;
// console.log(map);

map.set("IN", "Bharat"); // value can be changed
// console.log(map);

map.set("IN", "India");

// console.log(map.size);

for(const el of map){   // if will give array of [key, value] for each key value pair.
    console.log(el);
}

for(const key of map){
    console.log(`Value for ${key[0]} is ${key[1]}`);
}

for(const [key, value] of map){     // destructuring for map
    console.log(`Key is : ${key} and Value is ${value}`);
}

for(const key in map){  // for-in loop gives keys, and maps is not iterable hence it will not work in maps
    console.log(key);
}

console.log(); // new line

// for objects (for-in loop gives keys)

const myObj = {
    "c" : "C",
    "cpp" : "c++",
    "py" : "python",
    "js" : "javaScript",
    "ts" : "typescript",
    "go" : "goLang",
    "java" : "Java",
}

// for(const [key, value] of myObj){   // throw error bcoz objects are not iterable
//     console.log(`key is ${key} and value is ${value}`);
// }

for(const key in myObj){
    // console.log(`key is ${key}`);
    console.log(`Value for ${key} key in object is ${myObj[key]}`); // don't use myObj.key here bcoz it will treat "key" as key
}

const programming = ["js", "java", "py", "cpp"];

for(const idx in programming){
    console.log(`Index of language is ${idx} and value is ${programming[idx]}`);
}

// use for-of loop for maps and arrays, and use for-in loop for objects.