class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }

    get email() {
        return `${this._email.toUpperCase()}xyz`
    }

    set email(value) {
        this._email = value
    }
}

const janu = new User("jhanviba","abc");
console.log(janu.password);     // abchitesh
console.log(janu.email);     // JHANVIBAxyz
