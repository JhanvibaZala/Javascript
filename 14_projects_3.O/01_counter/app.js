function createCounter() {
    let count = 0;
    return {
        increment : function() {
            count++;
            document.getElementById('counter').innerText = count;
        },
        decrement : function() {
            count--;
            document.getElementById('counter').innerText = count;
        },
        reset : function() {
            count = 0;
            document.getElementById('counter').innerText = count;
        }
    }
}

const counterApp = createCounter()