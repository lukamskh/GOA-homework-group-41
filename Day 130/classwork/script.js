const add = (a, b) => a + b;
console.log(add(5, 3));

const person = {
  name: "bob",
  age: 25,
};
const { name: personName, age } = person;
console.log(personName, age);

const city = "rustavi";
const country = "georgia";
const location = { city, country };
console.log(location);

const user = { id: 1, username: "admin" };
for (const info in user) {
  console.log(`${info}: ${user[info]}`);
}

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

const greet = (name = "Guest") => `Hello ${name}!`;
console.log(greet());
console.log(greet("luka"));
