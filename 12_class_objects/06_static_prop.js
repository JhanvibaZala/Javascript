// the createId() is not be executed, as static keyword is used

class User{
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`${this.username} is logged in`);
    }
    static createId(){
        return `123`
    }
}
const janu = new User("jhanviba");
janu.logMe()                            // jhanviba is logged in
console.log(janu.createId())            // 123

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }

}
const pushti = new Teacher("pushpa","pushpa@gamil.com")
pushti.logMe()              // pushpa is logged in
console.log(pushti.createId() )             // pushpa is logged in

