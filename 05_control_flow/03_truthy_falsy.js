/*
    falsy values:
        false, 0, -0, BigInt 0n, "", null, undefined, NaN

    truthy values : 
        "false", "0", 'anything', "anything", [], {}, function() {},
*/

if("false") {   //it is inside string so it is truthy value
    console.log("truthy");          //this will be executed
}
else {
    console.log("falsy");
}

console.log(Boolean([]));       //true - empty array
console.log(Boolean({}));       //true - empty object

// || operator returns the first truthy value or the last falsy value if none are truthy.

console.log(false || "hello");      //hello
console.log(0 || "world");          //world
console.log("" || 42);              //42
console.log(true || false);         //true
console.log(true || "false");       //true
console.log(false || null);         //null

// && returns the first falsy value or the last truthy value if none are falsy.

console.log(false && "hello");      //false - first falsy value
console.log("abc" && 0)             //0 - first falsy value
console.log("abc" && '0');          //0 - last truthy value


// left to right
console.log(false && null && "Hello");  
// Output: false (first falsy value)

console.log(0 && "World" && 42);  
// Output: 0 (first falsy value)

console.log("Hello" && 42 && "World");  
// Output: "World" (all truthy, so last value is returned)


// To check wheather the array and object is empty or not

// Array
const userEmail = []        //array
if(userEmail.length===0) {
    console.log("Array is empty");      // Array is empty
}

// Object
const myObj = {}
if(Object.keys(myObj).length===0) {
    console.log("Object is empty");     // Object is empty
}