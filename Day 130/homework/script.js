const getFullName = (firstName, lastName) => firstName + " " + lastName;

const square = (number) => number * number;

const numbers = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers;

const student = { name: "Emma", age: 20 };
const { name: studentName, age: studentAge } = student;

const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200,
  },
};

const { name: productName, price: productPrice } = product.details;

const car = { make: "Toyota", model: "Camry", year: 2020 };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

const str = "JavaScript";
for (const char of str) {
  console.log(char);
}

const multiply = (a, b = 2) => a * b;

console.log(multiply(5));
console.log(multiply(5, undefined));

const greet = (name = getDefaultName()) => `Hello, ${name}`;

function getDefaultName() {
  return "Guest";
}

console.log(greet());
console.log(greet("Alice"));
