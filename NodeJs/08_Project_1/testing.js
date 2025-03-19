// // 1st Solution
// const fs = require('fs');

// const users = [
//     { 
//         name: "Alice", 
//         age: 20
//     },
//     { 
//         name: "Bob",
//         age: 30
//     },
//     { 
//         name: "Charlie",
//         age: 10
//     }
// ]

// fs.writeFile('./log.txt', JSON.stringify(users), (err, data) => {
//     console.log('Content added in file');
// });

// console.log(users);

// let name = 'Bob';
// const user = users.findIndex((user) => user.name === name);
// console.log(users[user].name);
// users.splice(user, 1);

// console.log(users);

// fs.writeFile('./log.txt', JSON.stringify(users), (err, data) => {
//     console.log('Content deleted from file');
// });

// // The final output in the log.txt file:
// // [{"name":"Alice","age":20},{"name":"Charlie","age":10}]me":"Charlie","age":10}]


// // 2nd Solution
// const fs = require('fs');

// const users = [
//     { 
//         name: "Alice", 
//         age: 20
//     },
//     { 
//         name: "Bob",
//         age: 30
//     },
//     { 
//         name: "Charlie",
//         age: 10
//     }
// ]

// fs.writeFileSync('./log.txt', JSON.stringify(users));

// console.log(users);

// let name = 'Bob';
// const user = users.findIndex((user) => user.name === name);
// console.log(users[user].name);
// users.splice(user, 1);

// console.log(users);

// fs.writeFileSync('./log.txt', JSON.stringify(users));

// // The final output in the log.txt file:
// // [{"name":"Alice","age":20},{"name":"Charlie","age":10}]

const fs = require('fs/promises');

async function main() {
    const users = [
        { 
            name: "Alice", 
            age: 20
        },
        { 
            name: "Bob",
            age: 30
        },
        { 
            name: "Charlie",
            age: 10
        }
    ]

    await fs.writeFile('./log.txt', JSON.stringify(users));
    console.log(users);

    let name = 'Bob';
    const user = users.findIndex((user) => user.name === name);
    console.log(users[user].name);
    users.splice(user, 1);

    console.log(users);

    await fs.writeFile('./log.txt', JSON.stringify(users));
    console.log('Content updated in file');
}

main();