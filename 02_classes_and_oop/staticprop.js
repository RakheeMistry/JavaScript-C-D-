class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const rakhee = new User("rakhee");
//console.log(rakhee.createId());
/* static method not allow to access*/ 

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher ("iphone", "i@phone.com");
iphone.logMe();
//console.log(iphone.createId());
/* static method not allow to access*/ 