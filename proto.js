
// part 1

// function Person (name, age){
//     const person = {}

//     person.name = name;
//     person.age = age;

//     person.play = function(){
//         console.log("Person is playing");
//     }

//     return person;
// }


// const imran = Person("ayash", 1)
// imran.play()
// console.log("imran",imran.name);


// part 2

// const personMethod = {
//     play () {
//           console.log("Person is playing");
//       }
//   }
  
  
//   function Person (name, age){
//       const person = {}
  
//       person.name = name;
//       person.age = age;
  
//       person.play = personMethod.play
  
//       return person;
//   }
  
  
//   const imran = Person("ayash", 1)
//   imran.play()
//   console.log("imran",imran.name);


// part 3

// const Capain = {
//     team : "BD",
//     name: "Sakib"
// }

// const player = Object.create(Capain)
// console.log(player); // {}
// console.log(player.name); // sakib

// part 4

// const personMethod = {
//     play () {
//           console.log("Person is playing");
//       }
//   }
  
  
//   function Person (name, age){
//       const person = Object.create(personMethod)
  
//       person.name = name;
//       person.age = age;

//       return person;
//   }
  
  
//   const imran = Person("ayash", 1)
//   imran.play()
//   console.log("imran",imran.name);


// part 5

function Person (name, age){
    const person = Object.create(Person.prototype)

    person.name = name;
    person.age = age

    return person
}

Person.prototype = {
    play(){
        console.log(`Person is playing`);
    }
}

  const imran = Person("ayash", 1)
  imran.play()
  console.log("imran",imran.name);


