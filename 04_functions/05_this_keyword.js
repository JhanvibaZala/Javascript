// this-1 Global scope
console.log(this)       // gives empty paranthesis => {}

// this-2 inside function w/o strict
function show() {
    console.log(this)
}
show()      //gives a lot of things

// this-3 inside function using strict
"use strict";
function show() {
    console.log(this)
}
show()      //undefined


//this-4 inside an object method
const obj1 = {
    name : "Jhanviba",
    greet : function() {
        console.log(this.name)
    }
};
obj1.greet();        //Jhanviba


// this-5 arrow function
const obj2 = {
    name : "Jhanviba",
    greet : () => {
        console.log(this.name);
    }
} 
obj2.greet()        //undefined

function Person2(name) {
    this.name = name
    this.sayHello = function() {
        console.log("Hello, "+this.name);
    };
    this.sayHelloArrow = () => {
        console.log("Hello, "+this.name);
    };
}
const p = new Person2("jhanviba") 

p.sayHello();               // Hello, jhanviba
p.sayHelloArrow();          // Hello, jhanviba

//this-6 inside constructor
function Person(name) {
    this.name = name;
}
const p1 = new Person("jhanviba")
console.log(p1.name);        // jhanviba


// this-7 Explicitly Setting this with call(), apply(), bind()
function greet() {
    console.log(this.name);
}
const user = {name : "jhanviba"}
greet.call(user)        // jhanviba

// using bind
const person4 = {
    usernaam : "jhanvi", 
    greet : function() {
        console.log("Hello, "+this.usernaam);
        
    }
};
const sayHello = person4.greet.bind(person4);
sayHello();             // Hello, jhanvi


/*
    call() → Calls the function immediately, passing arguments one by one.
    apply() → Calls the function immediately, passing arguments as an array.
    bind() → Returns a new function with this set permanently.
*/