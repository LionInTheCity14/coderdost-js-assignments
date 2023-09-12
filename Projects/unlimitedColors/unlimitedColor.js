// generate a random color

// RGB color
const randomNo = (num) => Math.floor(Math.random() * num + 1);

const randomRgbColor = () => {
    const color = `rgb(${randomNo(256)}, ${randomNo(256)}, ${randomNo(256)})`;
    return color;
}

console.log(randomRgbColor());

// HEX color
const randomHexColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomHexColor());

let changeColor = null;
const startChangingColor = () => {
    // to avoid to many start clicks
    if(changeColor === null){
        // changeColor = setInterval(() => document.body.style.backgroundColor = randomRgbColor(), 1000);
        changeColor = setInterval(() => document.body.style.backgroundColor = randomHexColor(), 1000);
    }
}

const stopChangingColor = function(){
    clearInterval(changeColor);
    changeColor = null;
}

// start
document.querySelector("#start").addEventListener("click", startChangingColor, false);

// stop
document.querySelector("#stop").addEventListener("click", stopChangingColor, false);