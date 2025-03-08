class User {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    // capitalize
    changeUsername() {
        return `${this.username.charAt(0).toUpperCase()}${this.username.slice(1)}`
    }
}

const janu = new User("jhanviba","jz@gmail.com","2121")
console.log(janu.encryptPassword());        // 2121abc
console.log(janu.changeUsername());         // JHANVIBA

