const obj = {
    name: "Abc",
    greet() { 
        console.log(name);
    }
};

obj.greet();    //Abc

const greetFunc = obj.greet;
greetFunc();

const boundGreet = obj.greet.bind(obj);
boundGreet();