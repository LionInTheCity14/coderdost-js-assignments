// fetch("https://github.com").then().catch().finally();

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});
// console.log(promiseOne);

promiseOne.then(function () {     // if and only if resolve
    console.log("Promise consumed");
});

// promiseTwo
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})

// promiseThree
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

// promiseFour
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ username: "chai", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((valueReturnedFromAbove) => {
        console.log(valueReturnedFromAbove);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });

// promiseFive
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        // error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("Error in js");
        }
    }, 1000);
});

async function consumedPromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    }catch(err){
        console.error(err);
    }
}

consumedPromiseFive();