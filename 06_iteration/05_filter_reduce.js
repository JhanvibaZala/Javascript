const arr = [1,2,3,4,5,6,7,8,9,10];
const newNum = arr.filter( (num) => num>4)
console.log(newNum);
// [ 5, 6, 7, 8, 9, 10 ]

// mistake
const newNum2 = arr.filter( (num) => {
    num>4
} )
console.log(newNum2);
// []
// prints empty array as you havce to return that thing


// mistake - correction
const newNum3 = arr.filter( (num) => {
    return num>4
} )
console.log(newNum3);
// [ 5, 6, 7, 8, 9, 10 ]
// prints array as you have returned the num>4 
// if you start a scope then you have return the value
