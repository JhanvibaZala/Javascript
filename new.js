const obj = {
    name: "Abc",
    greet() { 
        console.log(name);
    }
};

obj.greet();

const greetFunc = obj.greet;
greetFunc();

const boundGreet = obj.greet.bind(obj);
boundGreet();