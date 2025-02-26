//explicitly
const addTwo = (num1,num2) => {
    return num1+num2;
}

//implicitly
const addTwoOther = (num1,num2) => num1 + num2

console.log(addTwo(8,2));       // 10
console.log(addTwoOther(1,6));  // 7

