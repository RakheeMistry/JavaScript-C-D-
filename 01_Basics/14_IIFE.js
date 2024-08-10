// Immediately Invoked Function Expressions (IIFE)

// to remove global score pollution, we must use IIFE
// semicolon( ; ) is must after IIFE syntax

(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rakhee');