const newname = "jhanviba"
const repoCount = 50

// Modern way of writing strings which is called string intercollision
console.log(`Hello my name is ${newname} and my repositories on github are ${repoCount}`)


let username = "jhanviba-zala"

console.log(username.charAt(5))             // i
console.log(username.charCodeAt(2));        // a -> 97
console.log(username.concat(username));     //jhanviba-zalajhanviba-zala
console.log(username.indexOf('a'));         // 2
console.log(username.lastIndexOf('a'));     // 12
console.log(username.search('zjk'));        // -1
console.log(username.match('han'));        // match the regExp
console.log(username.replace('-', ' '));    //replaces - to ' '
console.log(username.substring(2,7))            //anvib
console.log(username.toUpperCase());            //JHANVIBA-ZALA
console.log(username.toLowerCase());            //jhanviba-zala
console.log(username.slice(5,10));              //iba-z
console.log(username.length);                   //13
console.log(username.endsWith("ala"));          //true
console.log(username.startsWith("han"));        //false
console.log(username.split('-'));
