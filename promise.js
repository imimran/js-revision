console.log("Promise Example");

// const value = true;

// console.log("Task 1");

// let myPromise = new Promise((resolve, reject) => {
//   // The producing code (this may take some time)

//   if (value) {
//     resolve("OK");
//   } else {
//     reject(() => {
//       throw new Error("Failed");
//     });
//   }
// });

// myPromise.then((result) => {
//   console.log(result);
// });
// console.log("Task 3");

// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
//   }).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  throw new Error("error");
})
.then(console.log("error"))
.catch( (err) =>{
 console.log("error");
})
