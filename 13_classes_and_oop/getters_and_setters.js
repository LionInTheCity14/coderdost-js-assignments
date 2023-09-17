class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(originalEmail){
        // console.log(originalEmail);
        this._email = originalEmail;
    }

    get password(){
        return this._password + "password"
    }

    set password(originalPasswd){
        // console.log(originalPasswd);
        this._password = originalPasswd;
    }
}
const varun = new User("varun@gmail.com", "123vafd");
console.log(varun.email, varun.password);