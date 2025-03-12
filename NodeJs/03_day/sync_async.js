const fs = require("fs");
const os = require("os");

fs.writeFileSync("./about.txt", 'Rohit 200');

// console.log("1");

// Blocking
const result = fs.readFileSync("./about.txt", "utf-8");
// console.log(result);

// console.log("2");

// console.log("1");

// Non-Blocking
fs.readFile("./about.txt", "utf-8", (err, result) => {
//     console.log(result);
});

// console.log("2");

// console.log(os.cpus());

// console.log(os.cpus().length);

// console.log(os.availableParallelism());












