function outer() {
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    inner()
}

// every time when outer is called it creates new execution context
outer()         // 1
outer()         // 1
outer()         // 1

// you call counter variable, which has the value preserved from previous count => increments value
const counter = outer();
counter();      // 1    
counter();      // 2
counter();      // 3