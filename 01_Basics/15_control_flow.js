// if 
// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("login");
// }

// if (2 === "2") {
//     console.log("Executed");
// }

// if (2 != 3) {
//     console.log("executed");
// }

// const temperature = 41;
// if (temperature < 50) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");

// if (temperature === 41 ) {
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if(score > 100){
//     const power = 'fly';
//     console.log(`User power: ${power}`);
// }
// //console.log(`User power: ${power}`);

const balance = 1000;
// if(balance > 500) console.log("test"), console.log("test2");  // not recommended practice

// if(balance > 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}