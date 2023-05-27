// Basic object manipulations.

// Run this on the terminal window
//  $ node ex1.js

function build_user(name, age, occupation){
  obj = {} // creates a new JS object

  // create properties dynamically
  obj.name = name
  obj.age = age
  obj.occupation = occupation
  
  // returns an initialized user object.
  return obj
}

u1 = build_user("Mary Jane Tyler", 24, "Accountant")
u2 = build_user("Steve King", 22, "Dentist")
u3 = build_user("Preet Minari", 25, "Attorney")

console.log(u1)
console.log(u2)
console.log(u3)

// Note: The program continues below. 
// Each of the excerises should continue updating the object.

// Ex 1.1. Change the name of u1 to "Mary-Jane Tyson" (use plain property assignment)
// Ex 1.2. Increment the age of u2 by 5. (use += )
// Ex 1.3. Use string templates using `` and ${} to prefix occupation of u3 with "District "
// Ex 1.4. Make an array of three user objects. (use the form -- a = [x, y, ...])
// Ex 1.5. Loop through the array and log each object to the console.