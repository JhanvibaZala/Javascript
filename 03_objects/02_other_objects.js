// creates a singleton object
const tinderUser1 = new Object()

// creates non-singleton object
// const tinderUser2 = {}

const tinderUser2 = new Object()
const tinderUser3 = new Object()

// console.log(tinderUser1);
// console.log(tinderUser2); 

tinderUser1.id = 12345
tinderUser1.email = "horny_Priye"

tinderUser2.id = 67891
tinderUser2.name = "havsi_shrads"

tinderUser3.id = 521290
tinderUser3.name = "huggu_janu"

console.log(tinderUser1)
console.log(tinderUser2)
console.log(tinderUser3)

// New object
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            fName : "Jhanviba",
            mName : "Rajendrasinh",
            lName : "Zala"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);

/*
      email: 'some@gmail.com',
    fullname: {
        userFullname: { fName: 'Jhanviba', mName: 'Rajendrasinh', lName: 'Zala' }
    }
    }
    {
    userFullname: { fName: 'Jhanviba', mName: 'Rajendrasinh', lName: 'Zala' }
    }
    { fName: 'Jhanviba', mName: 'Rajendrasinh', lName: 'Zala' }
*/

//Concating 2 objects
const obj1 =  { 1 : "a", 2 : "b"}
const obj2 =  { 3 : "c", 4 : "d"}

const obj3 = Object.assign(obj1, obj2)
// without {} the values are stored in obj1 
console.log(obj3);      // O/P : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);      // O/P : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign({}, obj1, obj2)
// {} => acts as a target whereas others acts as sources so obj1 remains intact
console.log(obj4);      // O/P : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);      // O/P : { '1': 'a', '2': 'b' }

// Using spread 
const obj5 = {...obj1, ...obj2}
console.log(obj5);


//prints keys of the object
console.log(Object.keys(regularUser));      //[ 'email', 'fullname' ]

//prints values of object
console.log(Object.values(regularUser));        
/*[
    'some@gmail.com',
    {
      userFullname: { fName: 'Jhanviba', mName: 'Rajendrasinh', lName: 'Zala' }
    }
  ]
*/

//prints entries => in form of array
console.log(Object.entries(regularUser));
/*
    [
        [ 'email', 'some@gmail.com' ],
        [ 'fullname', { userFullname: [Object] } 
    ] 
]
*/

//gives boolean
console.log(tinderUser1.hasOwnProperty('name'));        //false

