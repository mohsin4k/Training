// Currying Example
// function come(x){
//     return function (y){
//         return x*y; 
//     }
// }

// console.log(come(3)(4));


//Closure Example
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
//   myFunc();


//This keyword
function fullName() {
    return this.firstName + " " + this.lastName;
  }

//   console.log(fullName());
  

  const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  let x = person;

  
//   console.log(x.myFunction()); 

  // Explicit binding using call apply and bind

  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"Mohsin",
    lastName: "Khan",
  }
  
  // Return "Mohsin Khan":
  //Here we are calling the function of object person1 but with reference of person2
//   console.log(person1.fullName.call(person2));

//Bind function

const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullNameP = person3.fullName.bind(member);

//   console.log(fullNameP());


// Object and how to add properties in a object dynamically
const animal = new Object();
animal.type = "Dog";
animal.breed = "Husky";
animal.color = "Black";
animal.age = 5;

// console.log(animal);

