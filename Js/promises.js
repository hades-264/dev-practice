// console.log("Before promise");

// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Promise implemented");
//         resolve();
//     })
// });

// console.log("After promise");

// promiseOne.then(function () {
//     console.log("Task complete");
// });

// console.log("then() is executed");

// Reusing the same wait function from before:
// function wait(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// async function runSteps() {
//   await wait(1000);
//   console.log("Step 1");

//   await wait(1000);
//   console.log("Step 2");

//   await wait(1000);
//   console.log("Step 3");

//   await wait(1000);
//   console.log("Step 4");
// }

// runSteps();

// fetch("https://api.github.com/users/hades-264")
//     .then((res) =>{
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function getDetails() {
//     const user = await fetch("https://api.github.com/users/hades-264");
//     const username = await user.json();
//     console.log(username);
// }

// getDetails();

