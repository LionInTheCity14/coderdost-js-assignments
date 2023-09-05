// for 

// for(let i = 0; i <= 5; i++){
//     // console.log(i == 5);
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++){
//     console.log(`Outer loop value : ${i}`)
//     for(let j = 1; j <= 10; j++){
//         // console.log(`Inner loop value j : ${j} and i : ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue;

for(let i = 1; i <= 10; i++){
    if(i === 3 || i === 5 || i === 7){
        console.log(`Detected ${i} and continued`)
        continue;
    }
    if(i === 6 || i === 8){
        console.log(`Detected ${i} and break`)
        break;
    }
    console.log(`Value of i : ${i}`); 
}
