const requestURL = "https://api.github.com/users/lionInTheCity14";

fetch(requestURL)
    .then((response) => {
        console.log(typeof response);
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });  