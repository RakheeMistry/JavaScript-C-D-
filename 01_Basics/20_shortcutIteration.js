//-------------------for-of------------------------

// ["", "", ""]
// [{}, {}, {}]

// for-of on array
const arr = [1, 2, 3, 4, 5];
for( const num of arr) {
    //console.log(num);
}

// for-of on string
const greetings = "Hello world!";
for( const greet of greetings) {
    //console.log(greet);
}

// for-of on Maps 

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// for-of on object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// object is not iterable with for-of
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

//--------------------for-in--------------------------

// for-in on string
const greeting = "Hello world!";
for( const greet in greeting) {
    //console.log(greet);
}

// for-in on object
const myObject1 = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject1) {
    //console.log(`${key} shortcut is for ${myObject1[key]}`);
}

// for-in on array
const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming) {
    //console.log(key);
}

// for-in on map
const map1 = new Map();
map1.set('IN', "India");
map1.set('USA', "United States of America");
map1.set('Fr', "France");

//console.log(map1);

for (const key in map1) {
    console.log(key)
}