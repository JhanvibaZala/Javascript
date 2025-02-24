const score = 400;
console.log(score);     //400

const balance = new Number (100);
console.log(balance);   //[Number: 100]

console.log(balance.toString().length);     
//3 => length of the number which is converted to string

console.log(balance.toString().charAt(0));     //1
//1 => character at number which is converted to string

console.log(balance.toFixed(5));    //100.00000

//Precesion value
const otherNum = 23.652;           
console.log(otherNum.toPrecision(3));       //23.7

const otherNum3 = 223.652;           
console.log(otherNum3.toPrecision(3));      //224
 
const otherNum2 = 48423.652;           
console.log(otherNum2.toPrecision(4));      //4.842e+4

// locates the value in AMERICAN standards
const hundreds = 1000000;       
console.log(hundreds.toLocaleString());     //1,000,000

// locates the value in INDIAN standards
const hundreds2 = 1000000;       
console.log(hundreds2.toLocaleString('en-IN'));     //10,00,000

//Generate values from 0 to 10 
console.log(Math.floor(Math.random()*10)); 

//++++++++++++++++++++++++++++IMPORTANT++++++++++++++++++++++++++++
// When you want random values in some range 
const max = 20;
const min = 10;

console.log(Math.floor(Math.random()*(max-min+1))+min)

