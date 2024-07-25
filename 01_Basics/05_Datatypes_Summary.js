// Primitive Types

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = false;
// console.log(typeof score);

// const scoreValue = 100.3;
// console.log(typeof scoreValue);

// const outsideTemp = null;
// console.log(typeof outsideTemp);

// let userEmail;
// console.log(typeof userEmail);

// const id = Symbol('123');
// console.log(typeof id);
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 3454657687893243546765n;
// console.log(typeof bigNumber);

// Reference Types or Non-primitive Types

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros);

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
// console.log(typeof myObj);

// const myFunction = function(){
//     console.log("Hello world");
// }
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//---------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "rakhee";

let anothername = myYoutubename;
// console.log(myYoutubename);
// console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = user;
userTwo.email = "rakhee@gmail.com";
console.log(user.email);
console.log(userTwo.email);