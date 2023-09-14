const user = {
    username: "varun",
    loginCount: 8,
    signedIn: true,
    getUserDetails(){
        console.log("Got user details from database");
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.getUserDetails = function(){
        console.log(`username : ${this.username}`);
    }
    return this;
}

const user1 = new User("varun", 12, true);
console.log(user1);
const user2 = new User("chai", 16, false);
console.log(user2);

console.log(user2.constructor);
