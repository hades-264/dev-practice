function setName(username) {
    this.username = username;
    console.log("Hi from call");   
}

function createUser(username, email, password) {
    setName.call(this, username);

    this.email = email;
    this.password = password;    
}

const chai = new createUser("chai", "chai@google.com", "123");
console.log(chai);

