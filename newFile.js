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

  
  console.log(x.myFunction()); 