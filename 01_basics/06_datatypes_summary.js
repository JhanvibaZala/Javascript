// Primitive

//symbol 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);        //false

// Non-Primitive

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Memory fundmentals
    There are two types of memory
    1. stack(primitive)    => doesn't change the original value
    2. heap(non-primitive) => changes the original value   
*/

//Primitive data type goes to stack => changes value
let num1 = 3;
let num2 = num1
num2 = 100
console.log(num1);      // 3
console.log(num2);      // 100

//Non-Primitive data type goes to heap => don't change value
let user1 = {
    name : "jhanviba",
    email : "janu@gmail.com"
}
let user2 = user1
user2.email = "xyz@google.com"
console.log(user1.email);       //xyz@google.com
console.log(user2.email);       //xyz@google.com
