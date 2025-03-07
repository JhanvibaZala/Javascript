/*
    new keyword and object
*/

function createUser(username, score) {
    this.username = username;           // to define current context
    this.score = score;                 // to define current context
}

createUser.prototype.increment = function() {
    this.score++;                       // to define current context
}

createUser.prototype.print = function() {
    console.log(`Score of ${this.username} is ${this.score}`);              // to define current context
}

// new keyword is used to create new object in js, without this the print will give undefined
const us1 = new createUser("jhanvi",250)                
const us2 = new createUser("shakti",150)

us1.print();            //prints
us2.print();