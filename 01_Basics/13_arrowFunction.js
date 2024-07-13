const user = {
    username: "hit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// -----------------------------------------------
// function chai(){
//     let username = "rakhee";
//     // console.log(this);
//     console.log(this.username)
// }

// chai()

// ------------------------------------------------

// const chai = () => {
//     let username = "rakhee";
//     console.log(this);
//     // console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

/* Note: use of {} in arrow function must need return keyword
         but use of () in arrow function not need return keyword */

// implicite arrow function 

//const addThree = (num1, num2) => num1 + num2

const addFour = (num1, num2) => (num1 + num2);

const addFive = (num1, num2) => ({username: "rakhee"});

