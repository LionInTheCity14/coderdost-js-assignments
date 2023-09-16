function SetUsername(username){
    //complex DB calls
    console.log("called");
    console.log(`Internal this : ${this}`)
    this.username = username;
    // return this.username;
}

function createUser(username, email, password){
    // SetUsername(this, username);
    SetUsername.call(this, username); // call passes current EC to function being called.

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);