//+++++++++++++++++++++++++++++++++++    1   ++++++++++++++++++++++++++++++++++++++++++

/*function setUsername(username) {
    // complex DB calls
    this.username = username;
}

function createUser(username, email,password) {
    setUsername(username)
    this.email = email
    this.password = password
}

const janu = new createUser("jhanvi","jhanvi@fb.com","123")
console.log(janu);
*/

// o/p : createUser { email: 'jhanvi@fb.com', password: '123' }


//+++++++++++++++++++++++++++++++++++    2   ++++++++++++++++++++++++++++++++++++++++++



//check if the setUsername is even called or not? Yes it is then what's the problem
/*function setUsername(username) {
    // complex DB calls
    this.username = username;
    console.log("called");
    
}

function createUser(username, email,password) {
    setUsername(username)
    this.email = email
    this.password = password
}

const janu = new createUser("jhanvi","jhanvi@fb.com","123")
console.log(janu);
*/

// o/p : called
//       createUser { email: 'jhanvi@fb.com', password: '123' }


//+++++++++++++++++++++++++++++++++++    3   ++++++++++++++++++++++++++++++++++++++++++



// calls but takes the reference of setUsername this, but we want the reference not to lost
/*
function setUsername(username) {
    // complex DB calls
    this.username = username;
    console.log("called");
    
}

function createUser(username, email,password) {
    setUsername.call(username)
    this.email = email
    this.password = password
}

const janu = new createUser("jhanvi","jhanvi@fb.com","123")
console.log(janu);
*/
// o/p : called
//       createUser { email: 'jhanvi@fb.com', password: '123' }


//+++++++++++++++++++++++++++++++++++    4   ++++++++++++++++++++++++++++++++++++++++++



// now it will show username, after passing personal 'this' keyword from createUser
function setUsername(username) {
    // complex DB calls
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password) {
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const janu = new createUser("jhanvi","jhanvi@fb.com","123")
console.log(janu);

// o/p : called
//       createUser {
//          username: 'jhanvi',
//          email: 'jhanvi@fb.com',
//          password: '123'
//       }
