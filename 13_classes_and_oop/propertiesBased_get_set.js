function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(originalEmail){
            this.email = originalEmail;
        }
    });

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(originalPassword){
            this._password = originalPassword;
        }
    });
}

const chai = new User(`chai@chai.com`, `chai`);

console.log(chai.email, chai.password);