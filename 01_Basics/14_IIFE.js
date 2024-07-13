// function chai(){
//     console.log(`db connected`)
// }()

//--------------Error in IIFE-----------------------------
// (function chai(){
//     console.log(`db connected`)
// })()

// ( () => {
//     console.log(`db connected again`)
// })()

//--------------Correct syntax of IIFE------------------------------

// named IIFE
(function chai(){
    console.log(`db connected`)
})();

// normal IIFE
( () => {
    console.log(`db connected again`)
})();

// parameterized IIFE
( (name) => {
    console.log(`db connected again ${name}`)
})('rakhee');