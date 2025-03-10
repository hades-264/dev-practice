const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hello from test file");

// fs.writeFile("./test.txt", "Hello from Async", (err) => {});

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(result);
// });

// fs.appendFileSync("./test.txt", 'Append through Sync\n');

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// fs.appendFile("./test.txt", 'Append through Async\n', ()=>{});

// fs.cpSync('./test.txt', './copy.txt');

// fs.unlinkSync('./copy.txt');

// const res = fs.statSync('./test.txt');
// console.log(res);

// fs.mkdirSync("docs");

fs.mkdirSync("work/a/b", {recursive: true});



