// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Rakhee",
    "full name": "Rakhee Mistry",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "rakhee@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(typeof(JsUser.mySym));
// console.log(JsUser[mySym]);

JsUser.email = "rakhee@chatgpt.com";
//Object.freeze(JsUser);
JsUser.email = "rakhee@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//==================================================================
// singleton

// Object.create();
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// Destructuring
const {courseInstructor} = course
console.log(courseInstructor);

// Alias Destructuring 
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh"
//     "coursename": "js in hindi",
//     "price": "999",  
// }

[
    {},
    {},
    {}
]
