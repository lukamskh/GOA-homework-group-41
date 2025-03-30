let car = {
  brand: "McLaren",
  model: "750s",
  color: "Orange",
};
for (let key in car) {
  console.log(key);
}

for (let key in car) {
  console.log(car[key]);
}
console.log(
  `ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, ფერი ${car.color}.`
);

let fruits = ["banana", "apple", "orange", "grape", "pear"];

for (let i in fruits) {
  console.log(`ეს არის ${fruits[i]} მნიშვნელობა და ეს არის მისი ინდექსი ${i}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of numbers) {
  console.log(i);
}
