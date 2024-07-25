const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this; // implicitly defined
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("rakhee", 11, false);
// console.log(userOne);

const userOne = new User("hitesh", 12, true);
const userTwo = new User("rakhee", 11, false);
console.log(userOne.constructor);
console.log(userTwo);