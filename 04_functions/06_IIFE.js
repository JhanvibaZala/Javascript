/* 
    IIFE : Immediately invoked function expression
        1. function is executed immediately
        2. due to or prevent pollution caused by global scope variables we use IIFE  
*/

//gives error
/*
(function chai(){
    console.log(`DB CONNECTED`);
})()
// last () for execution

( () => {
    console.log(`DB CONNECTED TWO`);
})()      
*/

//doesn't give error - by using just semicolon, which indicates the termination of function 
//Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
// last () for execution

//Un-named IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
})()  

/*
    o/p :
    DB CONNECTED
    DB CONNECTED TWO    
*/ 