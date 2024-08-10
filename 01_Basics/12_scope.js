// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // c = 30;
    //console.log("INNER: ", a);
}

//console.log(a);
// console.log(b);
//console.log(c);


//------------Nested Scope----------------------

function one(){
    const username = "rakhee";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

//one()

if(true){
    const username = "rakhee";
    if(username === "rakhee"){
        const website = "youtube";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//=================Interesting=====================

// Hoisting
console.log(addone(5));

function addone(num){
    return num + 1;
}

/* Note: Hoisting is not allowed in expression function concept*/

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}

