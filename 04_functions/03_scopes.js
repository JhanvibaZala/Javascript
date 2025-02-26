let a = 300
if(true) {
    let a = 600
    console.log("INNER a : ",a);    // 600
}   
console.log("OUTER a : ",a);        // 300

// other example of local scope using loops
let array = [10,20,30,40,50]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// console.log(index);     // gives error as index is out of scope


// Example using functions
function one(){
    const username = "jhanviba"
    function two() {
        const website = "insta"
        console.log(username);
        
    }
    // console.log(website); //gives error
    two()       //calls function two if this is commented then nothing will execute
}
one()

// 
if(true) {
    const username = "jhanviba"
    if(username==="jhanviba") {
        const website = "youtube"
        console.log(username+website);      // jhanvibayoutube
    }
    // console.log(website); 
    //gives error as it is not defined in scope
}
// console.log(username);
//gives error as it is not defined in scope

console.log(addOne(5));     // 6

function addOne(num) {
    return num+1;
}
console.log(addOne(5));     // 6

// console.log(addTwo(5));     // error
const addTwo = function(num) {
    return num+2
}
console.log(addTwo(5));     // 7
