const name1 = "varun";
const repoCount = 50;

// console.log(name1+" "+repoCount);   // old syntax

console.log(`${name1} ${repoCount}`);   // new syntax

console.log(name1.__proto__.__proto__.__proto__);

const str1 = "1     d     1";
// console.log(str1.trim());

const str2 =   `    
                    dd  d   
                                `;

console.log(str2);
console.log(str2.trim());

const url = "https://varun.com/varun%20pal%20singh";

console.log(url.replaceAll("%20","_"));

console.log(url.includes("sahil"));

const urlToArray = url.split("");

console.log(urlToArray);

const charCodeAt = url.charCodeAt(2);

console.log(charCodeAt);