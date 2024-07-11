// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23)
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString())

// let myCreateDate1 = new Date(2024, 0, 12, 6, 1)
// console.log(myCreateDate1);
// console.log(myCreateDate1.toLocaleString())

// let myCreateDate2 = new Date("2023-01-14")
// console.log(myCreateDate2.toLocaleString())

// let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
