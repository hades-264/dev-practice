// let newObject = new Object();


// let sym = Symbol("key")

// newObject = {
//     username: "carry",
//     work: "creator",
//     income: 100,
//     isFree: false,
//     sayHello: function greet(...name) {
//         // let cnt = 0;
//         let stars
//         for (let i = 0; i < name.length; i++) {
//             console.log(`Hello ${name}`);
//             // console.log(cnt);
//         }
//         console.log(`Hello ${this.username}`);
//     },
//     [sym]: "mykey"
// }

// // console.log(newObject);

// // newObject.sayHello();

// // console.log(newObject[sym]);

// newObject.sayHello(["Rohit", "Dhoni", "Thor"]);

// function greet(...name) {
//     console.log(name.length);
    
//     for (let i = 0; i < name.length; i++) {
//         console.log(`Hello ${name[i]}`);
//     }
// }

// console.log(greet);
// greet("Rohit", "Dhoni", "Thor");

/* let num = 2;

switch (num) {
    case 1: 
        console.log("one");
    case 2:
        console.log("two");
    case 3:
        console.log("three");
    case 4:
        console.log("four");

    default:
        console.log("Default");
} */

/* let value;

switch (value) {
    case value:
        console.log("Hello");
        break;

    default:
        console.log("Hello bye"); 
        break;
} */


// if (() => { }) {
//     console.log("True");
// }

// console.log(false == 0);

// let val = undefined ?? 10;
// val = 10 < 2 ? "True" : "False"

// console.log(val);


// for (const element of [1,2,3]) {
//     console.log(element);
// }

let arr = ["Car", "Bus", "Train", "Bike"];

// for (const i of arr) {
//     console.log(`Current value is ${i}`);
//     i = i * 10;
//     console.log(`New value is ${i}`);
// }

// for (let i of arr) {
//     console.log(`Current value is ${i}`);
//     i = i * 10;
//     console.log(`New value is ${i}`);
// }

let map = new Map();
// console.log(new Map());

map.set("ice", 20);
map.set("tea", 10);
map.set("coffee", 50);

const obj = {
    name: "js",
    type: "lang",
    use: 20,
    isGood: true
}

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
        
//     }
// }


// console.log(map);

// for (const key in arr) {
//     console.log(`${key} has a value of ${arr[key]}`);
// }


/* obj.forEach(element => {
    console.log(Object(obj));
}); */

// arr.forEach(function (item) {
//     console.log(item);
// })

function printing({key, val}) {
    console.log(key, val);
}

obj.forEach(printing);






