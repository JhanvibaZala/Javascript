// ++++++++++++++++++++++++++++ for of loop +++++++++++++++++++++++++++

const  arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

/*
    1
    2zz
    3
    4
    5
*/
const greeting = "Jay Mataji";
for (const greet of greeting) {
    console.log(greet);
    
}

/*
    J 
    a 
    y 
    
    M 
    a 
    t 
    a 
    j 
    i
*/

const greeting2 = "Jay Mataji";
for (const greet of greeting2) {
    if(greet==' ')
        continue;
    console.log(greet);
    
}

/*
    J 
    a 
    y 
    M 
    a 
    t 
    a 
    j 
    i
*/

//++++++++++ Map : takes unique value in order as key-value pair ++++++++
const map = new Map();
map.set("IN","India");
map.set("US","United States");
map.set("AUS","Australia");
map.set("UK","United Kingdom");
// map.set("IN","India");                  // No change
// map.set("IN","Indiaiana");              // changes the value in map

console.log(map);

/*
    output : 
    Map(4) {
    'IN' => 'India',
    'US' => 'United States',
    'AUS' => 'Australia',
    'UK' => 'United Kingdom'
    }
*/

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}
/*
    IN :- India
    US :- United States
    AUS :- Australia
    UK :- United Kingdom
*/

 
