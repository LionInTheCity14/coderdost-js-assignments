const requestURL = "https://api.github.com/users/lionInTheCity14";

fetch(requestURL)
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });  

// or
async function getData(){
    try {
        const response = await fetch(requestURL);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        // console.log(typeof response, response);
        const data = await response.json();
        console.log(typeof data, data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
const data = getData();
console.log(data);  // data is promise, as async func return promises
