const verseChoose = document.querySelector("#verse-choose");
const poemDisplay = document.querySelector("#poem-display");

verseChoose.value = "Select";

verseChoose.addEventListener("change", (evt) => {
    const verse =  verseChoose.value;
    updateDisplay(verse);
});

const updateDisplay = (verse) => {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `./verses/${verse}.txt`;
    console.log(url);
    
    // fetch(url)
    //     .then((response) => {
    //         if(!response.ok){
    //             throw new Error(`HTTP error: ${response.status}`);
    //         }
    //         return response.text();
    //     })
    //     .then((textData) => poemDisplay.textContent = textData)
    //     .catch((error) => {
    //         console.error(error);
    //         poemDisplay.textContent = `Could not fetch verse: $error`;
    //     });

    // or
    const resultTypeOfAsyncfunc = update(url);
    console.log(typeof resultTypeOfAsyncfunc, resultTypeOfAsyncfunc);
}

async function update(url){
    const response = await fetch(url);
    try{
        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`);
        }
        console.log("Response type is", typeof response, response);

        const textData = await response.text();
        console.log("Text data type is", typeof textData);
        
        poemDisplay.innerHTML = textData;
    }catch(error){
        console.error(error);
    }
}