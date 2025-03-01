/*
    Operators
    > : greater than,
    < : less than,
    <= : less than or equal,
    >= : greater than or equal,
    == : equals,
    != : not equals,
    === : checks strict equals => returns true if the type and the value are same,
    !== : checks strict not equals => returns true if the type and the value are different
*/

//Example 1 if else
const age = 15;
if(age>=18) {
    console.log("Eligible for voting");
}
else {
    console.log("Not eligible for voting");
}

//Example 2 if else if ladder
let balance = 500
if (balance<200) {
    console.log("balance is less than 200");
}
else if (balance < 300 && balance>200) {
    console.log("balance is less than 300");
}
else {
    console.log("balance is greater than or equal to 500")
}

//Example 3 strict equal or unequal
if(5==="5") {
    console.log("true");
}
else {
    console.log("false");
}

//Example 3 checking true/false using && and || operators  
const userLoggedIn = 4556;
const debitCard = 512;
if(userLoggedIn==true && debitCard==true) {
    console.log("Welcome to my website");
} 
else if(userLoggedIn==false || debitCard==false) {
    console.log("Please check your login or debit card details");
}
else {
    console.log("Please enter valid details!")
}