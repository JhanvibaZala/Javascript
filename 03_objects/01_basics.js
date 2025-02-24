//declaring a symbol
const sym = Symbol("key1")

const user = {
    name : "Jhanviba",
    age : 20,
    [sym] : "mykey1",           // you have to use square braces to access 'sym' symbol
    location : "bhavnagar",
    email : "jhanviba@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(user.email)
//You have to put " " around the key, as JS computes it as string
console.log(user["email"]);

console.log(typeof user[sym]);       // gives string
console.log(user[sym]);         // O/P : mykey1

user.email = "jhanviba@microsoft.com"
// Object.freeze(user)         
//  freezes the object meaning, if you try to change the value inside 
// this then it will not reflect the changes on your object 

user.email = "jhanviba@chatgpt.com"         //this updated email will not change the object

console.log(user);
/*
    {
        name: 'Jhanviba',
        age: 20,
        location: 'bhavnagar',
        email: 'jhanviba@microsoft.com',
        isLoggedIn: false,
        lastLoginDays: [ 'Monday', 'Saturday' ],
        [Symbol(key1)]: 'mykey1'
    }
*/

user.greeting = function() {
    console.log("Namaste")
}
console.log(user.greeting())      // Namaste

user.greetingTwo = function() {
    console.log(`Hello ${this.name} this side`);
}
console.log(user.greetingTwo())      // Hello Jhanviba this side 