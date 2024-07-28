class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}hitesh`;
    }

    set password(value){
        this._password = value.toUpperCase();
        this._password = value;
    }
}

const rakhee = new User("rakhee@gmail.com", "abc");
console.log(rakhee.password);