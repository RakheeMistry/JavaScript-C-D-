// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2,3)
// let results = addTwoNumbers(2, 3)
// console.log(results)

// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }
// let results1 = addTwoNumbers(3,8)
// console.log(addTwoNumbers())
// console.log(results1)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage('Rakhee'))
// console.log(loginUserMessage(''))
// console.log(loginUserMessage())

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("rakhee"));

//rest parameter
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 900))

// const user = {
//     username: "rakhee",
//     price: 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 499
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    console.log(`${getArray[1]}`)
}

// returnSecondValue(myNewArray);
returnSecondValue([200, 400, 100, 600]);