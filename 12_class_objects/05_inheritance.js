class User{
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const janu = new Teacher("janu","janu@teacher.com","123");
janu.addCourse()            // A new course was added by janu

const shakti = new User("saku");
shakti.logMe()              // Username : saku

console.log(janu===Teacher);                     // false
console.log(janu instanceof Teacher);            // true
console.log(User instanceof Teacher);            // false
console.log(shakti instanceof User);            // true
