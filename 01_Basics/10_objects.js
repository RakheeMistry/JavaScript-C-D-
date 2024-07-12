// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Rakhee",
    "full name": "Rakhee Mistry",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhadrawati",
    email: "rakhee@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser['full name'])
// console.log(typeof JsUser[mySym])

// JsUser.email = "rakhee@yahoo.com"
// Object.freeze(JsUser)
// JsUser.email = "rakhee@microsoft.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User, ${this.name}`);
// }
// console.log(JsUser.greetingTwo());

// singleton

const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rakhee",
            lastname: "mistry"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// merge object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3)

// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4)

// const obj5 = {...obj1, ...obj2}
// console.log(obj5)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

// console.log(users[0].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

//console.log(courseInstructor)
console.log(instructor)
