// Accessing a function in all non-primitive type with prototype keyword 
let myHeros =["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        //console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rakhee = function(){
    //console.log(`rakhee is present in all objects`);
}

// heroPower.rakhee();
// myHeros.rakhee();

Array.prototype.one = function(){
    //console.log(`hello`);
}

myHeros.one();
// heroPower.one();

//---------------------------------------------

//Inheritance

const User = {
    name: "chai",
    email: "chai@gamil.com",
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

//---------------------------------------------------------

let myName = "hitesh     ";
// console.log(myName.trim().length);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

console.log(myName.trueLength());

"rakhee".trueLength();
"iceTea".trueLength();