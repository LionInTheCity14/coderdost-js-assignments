// **5.1:** Explain difference between **innerText** and **innerHTML** in the 
// following example?

let content = document.getElementById('content');

console.log(content.innerHTML);     // will show all the HTML (elements also, if 
// present) inside content element;     "        <h2>Hello Coders</h2>" , including spaces.

console.log(content.innerText);     // will show all the text available inside 
// content element;                     "Hello Coders"



// just nonsense code lol.

const var1 = document.createElement("p");
var1.setAttribute("class", "new-class");
console.log(var1.classList, var1.id);

var1.classList.replace("new-class","new1-class");
console.log(var1.classList, var1.id);

