/* Syntax : 

for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

*/

// for (let i = 1; i <= 10; i++) {
//     console.log(i);   
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(j);
//     }  
// }

let myArray = ["Jhanviba","pushti","mital"]
for(let i=0;i<myArray.length;i++) {
    console.log(myArray[i]);
}

/*
    while loop syntax :
    
    initialization
    while (condition) {
        (body)
        increment/decrement    
    }
*/

let i=0
while (i<10) {
    process.stdout.write(i+" ");        // 0 1 2 3 4 5 6 7 8 9 (same line)
    i++;
}

/*
    syntax of do while

    initialization
    do {
        body
        increment/decrement
    } while (condition);
*/

//      ****IMP
console.log("\n")
let k=11 
do {
    console.log(k);         // 11
    k++;
} while (k<=10);