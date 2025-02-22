console.log(2>1);       //true
console.log(2>=1);      //true
console.log(2<1);       //false
console.log(2<=1);      //false
console.log(2==1);      //false

console.log("2">1)      //true
console.log("02">1)     //true
console.log("2">5)      //false

//  JS converts string to number 

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

//  The reason behind >,== gives false and >= gives true is 
//  conversions convert null to number, treating it as 0.

console.log(undefined > 0);  //false
console.log(undefined == 0);  //false
console.log(undefined >= 0);  //false

//  Undefined always gives false to every type conversion

console.log("2"===2)     //false

//Strict check : It checks the value as well as string