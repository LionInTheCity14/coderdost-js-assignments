let myName = "  varun     ";
let myFriend = "   sahil  ";

// console.log(myName.length);

let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.varun =  function(){
    console.log(`Varun is present is all objects`);
}

// heroPower.varun();

console.log(heroPower.__proto__);

Array.prototype.heyVarun = () => {
    console.log(`Varun says hello!`);
}

// myHeros.varun();
// myHeros.heyVarun();
// heroPower.heyVarun();
console.log(myHeros.__proto__);

const User = {
    name: "chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TAsupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // chaiAurCode
    console.log(`True length is ${this.trim().length}`); // 11
}

anotherUsername.trueLength();
myName.trueLength();
myFriend.trueLength();