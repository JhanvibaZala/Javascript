function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,400,500));       // [ 400, 500 ]

// +++++++++++++++++++++  handling user  ++++++++++++++++++++++++
const user = {
    userName : "jhanviba",
    price : 199
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.userName} and the price is ${anyObj.price}`);
}

handleObject(user)
// Username is jhanviba and the price is 199

handleObject({
    userName : "shakti",
    price : 150, 
    work : "Nothing"        // will not be passed as this is not a parameter
}) 

// +++++++++++++++++++++  applying arrays  +++++++++++++++++++++++
const myArray = [100,200,300,400]
function returnSecondValue(yourArray,index) {
    return yourArray[index]
}
console.log(returnSecondValue(myArray,2));                // 300
console.log(returnSecondValue([200,600,1200,2400],1));    // 600
