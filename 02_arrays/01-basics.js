const arr1 = [1,2,3,4,5]
const arr2 = ["jhanvi","pushti","shakti"]
const arr3 = new Array(9,5,3);

console.log(arr1);          // [1,2,3,4,5]
console.log(typeof(arr2));  // object
console.log(arr2[1])        // pushti

//-----------------METHODS-------------------------

arr1.push(6);           //pushes value from back
console.log(arr1);      // [ 1, 2, 3, 4, 5, 6 ]

arr1.pop();             // pops value from back
console.log(arr1);      // [ 1, 2, 3, 4, 5 ]

arr1.unshift(90);       //takesa lot time for shifting all elements
console.log(arr1);      // [ 90, 1, 2, 3, 4, 5 ]

arr1.shift();           // removes first element
console.log(arr1);      // [ 1, 2, 3, 4, 5 ]

console.log(arr1.includes(77));     // false

console.log(arr1.indexOf(2))        // value 2 is at index 1

console.log(arr1.join());           // converts array to string


//++++++++++++++++++++++ SLICE AND SPLICE +++++++++++++++++++++++

const arrNew = arr1.slice(1,3)      //includes index 1 to 2
console.log(arrNew);                // [ 2, 3 ]
console.log(arr1);                  // [ 1, 2, 3, 4, 5 ]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//           0  1  2  3  4  5  6  7  8

const arrNew2 = arr.splice(2,5)    // prints array from idx 2 to 6
console.log(arrNew2)               // [ 3, 4, 5, 6, 7 ]
console.log(arr);                  // [ 1, 2, 8, 9 ]

const arr5 = [1,2,3,4,5]
console.log(arr5.splice(1,1))

// We can use more then one inside concat mathod of array 
const a1 =[1,2,3]
const a2 =[4,5,6]
const a3 =[7,8,9]
console.log(a1.concat(a2,a3));
