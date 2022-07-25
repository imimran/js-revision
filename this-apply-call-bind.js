// this example 1

// const sakib = {
//   name: "Sakib",
//   age: 35,
//   printName: function(){
//     console.log(this.name);
//   }
// }

// sakib.printName()

// this example 2

// let printName = function(){
//     console.log(this.name);
//   }

// const sakib = {
//     name: "Sakib",
//     age: 35, 
//   }


// printName.call(sakib)


// call

// let printName = function( v1, v2){
//     console.log(`${this.name} is ${v1}, ${v2}`);
//   }

// const sakib = {
//     name: "Sakib",
//     age: 35, 
//   }

//   var v1 = "Handsome"
//   var v2 = "All rounder"

// printName.call(sakib, v1, v2)


// apply

// let printName = function( v1, v2){
//     console.log(`${this.name} is ${v1}, ${v2}`);
//   }

// const sakib = {
//     name: "Sakib",
//     age: 35, 
//   }

//   var v1 = "Handsome"
//   var v2 = "All rounder"

//   let v = [v1, v2]

// printName.apply(sakib, v)


// apply

let printName = function( v1, v2){
    console.log(`${this.name} is ${v1}, ${v2}`);
  }

const sakib = {
    name: "Sakib",
    age: 35, 
  }

  var v1 = "Handsome"
  var v2 = "All rounder"

let newFun = printName.bind(sakib, v1, v2)
newFun()

