const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, lastName, age = 25 } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 25 (default value since 'age' doesn't exist in the 'person' object)
