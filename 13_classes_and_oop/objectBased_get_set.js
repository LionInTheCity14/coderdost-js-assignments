const User = {
    _email: `chai@chai.com`,
    _password: `chai`,

    get email(){
        return this._email.toUpperCase();
    },

    set email(originalEmail){
        this._email = originalEmail;
    }
}

console.log(User.email);

const tea = Object.create(User);
console.log(tea.email);