const user = {
    username: "rakhee",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);

//------------Normal function with this keyword--------------------------
function chai(){
    //console.log(this);
    let username = "rakhee";
    console.log(this.username);
}
chai();

//------------arrow function with this keyword--------------------------
const tea = () => {
    let username = "rakhee";
    console.log(this);
}
tea();

// explicite return keyword with curly braces {}
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

// single statement not required return keyword
const addThree = (num1, num2) => num1 + num2;
console.log(addThree(3, 1));

// implicite return keyword with paranthesis ()
const addFour = (num1, num2) => (num1 + num2);
console.log(addFour(2, 4));

// returing object with implicite return keyword with paranthesis ()
const addFive = () => ({username: "rakhee"});
console.log(addFive());