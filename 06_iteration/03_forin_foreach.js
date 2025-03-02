// ++++++++++++  Objects  ++++++++++++
// for-of loop will not work in
// for-in loop will work
const myobj = {
    game1 : "Candy Crush",
    game2 : "Subway Sufur",
    game3 : "Temple run"
}
for (const key in myobj) {
    console.log(`${key} is of ${myobj[key]}`);
    
}
/*
    game1 is of Candy Crush
    game2 is of Subway Surf
    game3 is of Temple run
*/

// it prints index of arr1
const arr1 = [15,23,73,94,55];
for (const key in arr1) {
    console.log(key);
}
/*
    0
    1
    2
    3
    4
*/
for (const key in arr1) {
    console.log(arr1[key]);
}

/*
    15
    23
    73
    94
    55
*/

// +++++++++++++++  for-each loop  ++++++++++++

let arr2 = ["janu","mitu","pushu","saku"]

// using function
arr2.forEach( function (item) {
    console.log(item);
    
} )

//using arrrow function
arr2.forEach( (item) => {
    console.log(item);
    
} )

// Making function
function printName(item) {
    console.log(item);
    
}
arr2.forEach(printName)

//same output for all

/*
    janu
    mitu
    pushu
    saku
*/

arr2.forEach((item,index,arr2) => {
    console.log(item,index,arr2);
    
})

/*
    janu 0 [ 'janu', 'mitu', 'pushu', 'saku' ]
    mitu 1 [ 'janu', 'mitu', 'pushu', 'saku' ]
    pushu 2 [ 'janu', 'mitu', 'pushu', 'saku' ]
    saku 3 [ 'janu', 'mitu', 'pushu', 'saku' ]
*/