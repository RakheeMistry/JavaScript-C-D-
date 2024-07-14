//*******************************for-of**********************************
// ["", "", ""]
// [{}, {}, {}]

// for-of with array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

// for-of with string
const greetings = "Hello world!";
for (const greet of greetings) {
    //console.log(greet);
}

// for-of with Map
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");
// Note: map took unique value
//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// for-of with object
const myObject = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }



//**********************for-in************************************

// for-in with object
const country = {
    India : "Delhi",
    USA : "Washington",
    Nepal: "Kathmandu"
}
for (const key in country) {
    //console.log(`${key} shortcut is for ${country[key]}`);
}

// for-in with array
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    //console.log(programming[key]);
}

// for-in with Map
const map1 = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");
// Note: map took unique value but not work with for-in loop
//console.log(map);

// for (const [key, value] in map1) {
//     console.log(key, ':-', value);
// }


//**********************forEach************************************

const coding = ["javaScript", "ruby", "java", "python", "cpp"];

// forEach with normal function
// coding.forEach(function (item) {
//     console.log(item);
// })

// forEach with arrow function
// coding.forEach((item) => {console.log(item);})

// forEach with separate normal function
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// forEach with arrow function (with all parameters)
coding.forEach((item, index, arr) => {console.log(item, index, arr);})

// forEach with array of objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})