const accountId = 144553
let accountEmail = "rakhee@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2;

accountEmail = "rm@gamil.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])