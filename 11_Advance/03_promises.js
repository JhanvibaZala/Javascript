// Promise 1
const promise1 = new Promise(function(resolve, reject){     // create promise
    setTimeout(function () {
        console.log("Async task is completed");
        resolve()
    }, 1000);
})      
promise1.then(function () {
    console.log("Promise consumed");
})

// Promise 2
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 completed");
        resolve()
    },1000)
}).then(function() {
    console.log("Async2 resolved");
    
})

// Promise 3
const promise3 = new Promise(function(resolve, reject) {
    setTimeout( function () {
        resolve({username : "jhanviba", email : "jhanviba@google.com"})
    },1000)
})

promise3.then( function (user) {
    console.log(user);          // { username: 'jhanviba', email: 'jhanviba@google.com' }
})

// Promise 4
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username : "jhanviba", password:"123"})
        }
        else {
            reject('ERROR : something went wrong')
        }
    }, 1000);
})

promise4.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch( function (err){
    console.log(err);
})
.finally( () => console.log("The promise is either resolved or rejected"))

// Promise 5
const promise5 = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username : "JS", password:"123"})
        }
        else {
            reject('ERROR : JS went wrong')
        }
    }, 1000);
})

async function consumePromise5 () {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log("error")
    }
    
}

consumePromise5();

// async function getAllUsers(){
//     try {
//         const response = await(fetch('https://jsonplaceholder.typicode.com/users'))
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ",error);
//     }
// }
// getAllUsers();

fetch("https://api.github.com/users/JhanvibaZala")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))