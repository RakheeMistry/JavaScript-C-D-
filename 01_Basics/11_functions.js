function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("k");
    console.log("h");
    console.log("e");
    console.log("e");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

// const result = addTwoNumbers(3,5);
// console.log("Result: ", result)

// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// const result = addTwoNumbers(3,5);
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("rakhee"));
//console.log(loginUserMessage());

//------------------------------------------
function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

//---------------------------------------
//Rest parameter
function calculateCartPrice1(...num1){
    return num1;
}

console.log(calculateCartPrice1(200, 400, 500));

//-----------------------------------------
//Rest parameter
function calculateCartPrice2(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice2(200, 400, 500, 2000));

//--------------------------------------------------
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//console.log(handleObject(user));
console.log(handleObject({
    username: "sam",
    price: 399,
}));

//---------------------------------------
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 1000]));