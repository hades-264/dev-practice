class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;
        // console.log(`Account created`);
    }

    isValid(key){
        if (this.password === key) {
            return true;
        }
        else {
            return false;
        }
    }

    static changeName(newName) {
        this.username = newName;
    }
}

const chai = new User("Chaiaurcode", "123abc");
console.log(chai);
// console.log(typeof chai);

// console.log(`Username: ${chai.username}`);
// console.log(`Password: ${chai.password}`);

// console.log(chai.isValid("123abc"));

chai.changeName("Chai");
// console.log(`Username: ${chai.username}`);

class Teacher extends User{
    constructor(username, password, email, level) {
        super(username, password);
        this.email = email;
        this.level = level;
    }

    teacherAuth(value) {
        if (this.level >= value) {
            console.log(`${this.username} is authorized`);
        }
        else {
            console.log(`${this.username} is not authorized`);
            
        }
    }
}

const tea = new Teacher("Tea", "123", "tea@google.com", "10");

console.log(tea);

tea.teacherAuth(12);

console.log(tea.isValid("123"));

tea.changeName("Masala Chai");
console.log(tea);
