// number to string
let convertNum = String('10')
console.log(convertNum)            //10
console.log(typeof (convertNum))   //string


// string to number
let convertNum2 = Number('1sdba23')
console.log(convertNum2)            //NaN
console.log(typeof convertNum2)     //number


// string to number
let convertNum3 = Number('sdba')
console.log(convertNum3)        //NaN
console.log(typeof convertNum3)     //number


// value to boolean
let num = Boolean(1)
console.log(num)           //true
console.log(typeof num)    //boolean


// value to boolean
let num2 = Boolean(0)
console.log(num2)           //false
console.log(typeof num2)    //boolean


//string to boolean
let str1 = Boolean("")
console.log(str1)           //false
console.log(typeof str1)    //boolean


//string to boolean
let str2 = Boolean("sddf")
console.log(str2)           //true
console.log(typeof str2)    //boolean