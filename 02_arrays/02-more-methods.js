// spread operation same as concat
const arr1 = [1,2,3,4]
const arr2 = [90,65,78,34]
console.log([...arr1, ...arr2]);
//output :
/*
    [
        1,  2,  3,  4,
        90, 65, 78, 34
    ]
*/

//flat operartion : flattens the multidimensional array
const arr3 = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13],14],15]
console.log(arr3.flat(Infinity));
//output
/*
    [
        1,  2,  3,  4,  5,  6,
        7,  8,  9, 10, 11, 12,
        13, 14, 15
    ]
*/

let score1 = 100
let score2 = "jhanvi"
let score3 = false
console.log(Array.isArray("jhanviba"));     //false
console.log(Array.from("Jhanviba"));
/*
    [
        'J', 'h', 'a',
        'n', 'v', 'i',
        'b', 'a'
    ]
*/

// As you haven't specified in the code what to take? 
// key or value so it prints empty array
console.log(Array.from({name:"jhanviba"}))      // gives empty array : []



/*
    You need to use Object.keys() to get the keys from the object. Array.from() is typically used to convert
     iterable objects (like NodeLists, Sets, or Maps) into arrays, but plain objects are not directly 
     iterable in that way.

*/

const obj = {
    name : "jhanviba",
    enroll : 220210116076
}
console.log(Object.keys(obj));
console.log(Object.values(obj));

/*
    [ 'name', 'enroll' ]
    [ 'jhanviba', 220210116076 ]
*/
