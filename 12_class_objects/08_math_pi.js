const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);
/*
    o/p :

    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
*/

Math.PI = 5;
console.log(Math.PI);           // 3.141592653589793 (no change)

// ++++++++++++++++++  own function  +++++++++++++++++++++

const myOwnObj  = {
    name : "janu",
    course : "JS",
    salary : 250000,
    isAvailable : true,
    orderChai : function () {
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(myOwnObj,"name"));
// o/p : { value: 'janu', writable: true, enumerable: true, configurable: true }

Object.defineProperty(myOwnObj, 'name', {
    writable : false
})
console.log(Object.getOwnPropertyDescriptor(myOwnObj,"name"));
// o/p : { value: 'janu', writable: false, enumerable: false, configurable: true }

myOwnObj.name = "janvi"
console.log(myOwnObj);          // no change in name

// code fategaaa!!! (function bhi print hoga, that's why)
// for (let [key,value] of Object.entries(myOwnObj)) {
//     console.log(`${key} : ${value}`);
// }

// code na fate isiliye we use :
for (let [key,value] of Object.entries(myOwnObj)) {
    if(typeof value!== 'function') {
        console.log(`${key} : ${value}`);
    }
}
