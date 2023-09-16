class User{
    constructor(username,){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        console.log(`unique id for ${this.name} : 123`);
    }
}

const varun = new User("varun",);
console.log(varun);
// varun.createId(); // Error
varun.logMe();
User.createId();
console.log();

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }

}

const hitesh = new Teacher("hitesh", "hitesh@gmail.com");
console.log(hitesh);
Teacher.createId();
// hitesh.createId();
hitesh.logMe();