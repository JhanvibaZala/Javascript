// basic structure of function
function printName() {
    console.log("Jhanviba");
}
// function reference 
printName       //prints no nothing

// function execution
printName()     // Jhanviba


//++++++++++++++++++++++++  adding two numbers  ++++++++++++++++++++++++
function addTwoNum1(a,b,c) {
    let d = a + b + c
    console.log(`Sum is ${d}`);
}
addTwoNum1(1,2,3)            // Sum is 6 
addTwoNum1(1,2,"3")          // Sum is 33
addTwoNum1("1",2,3)          // Sum is 123 

const result1 = addTwoNum1(1,2,3)
console.log("Result1 : ",result1);        // Result :  undefined

function addTwoNum2(a,b) {
    return a + b
}

const result2 = addTwoNum2(1,2)
console.log("Result2 : ",result2);                   // 3

//++++++++++++++++++++++++++  User login  +++++++++++++++++++++++++++++
function userLogged(username) {
    if(!username) {
        console.log("Please enter your username");
        return
    }
    return `${username} is logged`
}
console.log(userLogged("jhanviba"));        // jhanviba is logged
console.log(userLogged());                
/*
    Please enter your username
    undefined
*/