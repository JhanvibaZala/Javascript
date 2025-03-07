// prototype examples

let myName = "jhanviba     "

// Want the length and remove extra space at back
// console.log(myName.trim().length);

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

myName.trueLength()
// +++ O/P +++
// jhanviba     
// True length is 8

"efhrherfj   ".trueLength()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//array
let myHeros = ["shaktiman","chotta bheem"]

//object
let heroPower = {
    "shaktiman" : "shakti",
    "chotta bheem" : "laddo"
}

Object.prototype.janu = function() {
    console.log("janu is present in all objects");
}

Array.prototype.sayHello = function() {
    console.log("Janu says hello");
}

myHeros.janu()
heroPower.janu()
myHeros.sayHello()
// heroPower.sayHello()            //gives error


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

