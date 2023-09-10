const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Varun",
            lastname: "Pal Singh"
        }
    }
}

// console.log(regularUser.fullname?.userfullname?.firstname);

const obj1 = {1:"a", 2: "b", 3: "c"};
const obj2 = {3: "d", 4: "e", 5: "f", 5: "g"};

// const newObj = Object.assign(target, source);
// const newObj = Object.assign({}, obj1, obj2);    // {} is optional parameter which 
// garantee the output will be object.

const newObj = {...obj1, ...obj2};

// console.log(newObj);

// useful methods 

const arrOfKeys = Object.keys(tinderUser);
const arrOfValues = Object.values(tinderUser);
const arrOfEntries = Object.entries(tinderUser);

// console.table([arrOfKeys, arrOfValues, arrOfEntries]);

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

const users = [
    {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
    },
    {
        id: 2,
        name: "def",
        email: "def@gmail.com",
    },
    {
        id: 3,
        name: "ghi",
        email: "ghi@gmail.com",
    },
];

// ################ Object Destructoring #####################

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// **** Object destructuring **** (important)

// course.courseInstructor 

const {courseInstructor} = course;
const {courseInstructor: instructor} = course;  // or (give other name if you want), prefered

console.log(instructor, courseInstructor === instructor);

// react basic destructuring
// const navbar = ({company}) => {
// }
// navbar(company = "varun");


// JSON FORMAT

// {
//     "name": "varun",
//     "coursename": "js in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]