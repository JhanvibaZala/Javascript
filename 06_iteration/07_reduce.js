const numArr = [1,2,3,4,5]; 

// Using function
// const myTotal = numArr.reduce(function(acc,currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal;
// },0)


// Using arrow function
const myTotal = numArr.reduce( (acc,currVal) =>  (acc + currVal) ,0)

console.log(myTotal);



//++++++++++++++++  example of shopping cart  ++++++++++++++++++++++
const shoppingCart = [
    { item: "Laptop", price: 75000, quantity: 1 },
    { item: "Headphones", price: 2500, quantity: 2 },
    { item: "Mouse", price: 1200, quantity: 1 },
    { item: "Keyboard", price: 1800, quantity: 1 },
    { item: "Smartphone", price: 40000, quantity: 1 }
];
const total = shoppingCart.reduce( (acc,item) => (acc+item.price),0)
console.log(total);
// 120500