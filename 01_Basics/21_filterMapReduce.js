// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item;
// })
// console.log(values);

/*Note: forEach not return values so in case of returning value its failed, 
so need to switch other looping technique*/


/******************filter******************/

 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// with filter function
// const newNums = myNums.filter((num) => {return num > 4});
// console.log(newNums);

// with forEeach function
const newNums = [];
// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

// const userBooks = books.filter((bk) => (bk.genre === "History"));
// console.log(userBooks);

// filtering with forEach loop
// const newBooks = [];
// books.forEach((bk) => {
//     if(bk.genre === "History"){
//         newBooks.push(bk);
//     }
// });
// console.log(newBooks);

// const userBooks = books.filter((bk) => {return bk.publish >= 2000});
// console.log(userBooks);

//const userBooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === "History"});
//console.log(userBooks);

/*********************map*********************/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = myNumbers.map((num) => num + 10);
// console.log(newNumber);

// chaining function
const newNumber = myNumbers.map((num) => num * 10)
                           .map((num) => num + 1)
                           .filter((num) => num >= 40);
//console.log(newNumber);

/********************reduce*********************/

const myNos = [1, 2, 3];
// const myTotal = myNos.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval}, 0);

// console.log(myTotal);

const total = myNos.reduce((acc, curr) => acc+curr, 0);
//console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);