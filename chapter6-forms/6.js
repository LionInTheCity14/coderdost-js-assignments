/* 6.1: Create regex for password with the following validations.

Length of password at least of 8 characters

contain at least one special character

contain at least one alphabet (a-z) character
*/

let form = document.querySelector(".testform");
let inputPasswd = document.querySelector(".inputPasswd");
let requiredPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let passwd = inputPasswd.value;
    console.log(passwd);
    let result = requiredPasswordPattern.test(passwd);
    if(result){
        console.log("Your password validated successfully");
    }else{
        console.log("try again with new password");
    }
});

form.addEventListener("keyup",(evt) => {
    let passwd = inputPasswd.value;
    let result = requiredPasswordPattern.test(passwd);
    if(result){
        inputPasswd.style.border = "3px solid green";
        inputPasswd.style.backgroundColor = "green";
    }else{
        inputPasswd.style.border = "3px solid red";
        inputPasswd.style.backgroundColor = "red";
    }
})