// books example using filters

const books = [
    { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help", rating: 4.8 },
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Fiction", rating: 4.7 },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008, genre: "Programming", rating: 4.6 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, genre: "Finance", rating: 4.7 },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, genre: "Programming", rating: 4.8 },
    { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, genre: "History", rating: 4.7 },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, genre: "Self-Help", rating: 4.6 },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011, genre: "Programming", rating: 4.5 },
    { title: "The Psychology of Money", author: "Morgan Housel", year: 2020, genre: "Finance", rating: 4.7 },
    { title: "Deep Work", author: "Cal Newport", year: 2016, genre: "Self-Help", rating: 4.6 }
];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
console.log(userBooks) 
userBooks = books.filter( (bk) => bk.year>=2005 && bk.genre==="Self-Help")
console.log(userBooks);


// add some number to the each element in array using map and using forEach
const myNums = [1,2,3,9,10];

// const newNum = myNums.map( (num) => num+10)
// console.log(newNum);

const useFE = []; 
myNums.forEach( (num) => { useFE.push(num+10)})
console.log(useFE);             // [ 11, 12, 13, 19, 20 ]
console.log(myNums);            // [ 1, 2, 3, 9, 10 ]


// applying 2 to 3 operations
const arr1 = [1,3,4,8,9]
const arrModified = arr1.map( (num) => num*10)      // muliplies with 10
                        .map( (num) => num+1)       // adds 1 to it
                        .filter( (num) => num>=40)      // filters values
                        
console.log(arrModified);       // [ 41, 81, 91 ]
