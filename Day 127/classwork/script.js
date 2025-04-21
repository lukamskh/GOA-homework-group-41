const numericArray = [1, 2, 3];

const stringArray = ["apple", "banana", "cherry"];

const booleanArray = [true, false, true];

const nums = ([a, b, c] = numericArray);
console.log(a);
console.log(b);
console.log(c);

const strings = ([d, e, f] = stringArray);
console.log(d);
console.log(e);
console.log(f);

const booleans = ([g, h, i] = booleanArray);
console.log(g);
console.log(h);
console.log(i);

const myInfo = {
  name: "Luka",
  age: 15,
  hobby: "coding",
};

const { name, age, hobby } = myInfo;
console.log(name);
console.log(age);
console.log(hobby);

const carInfo = {
  brand: "McLaren",
  model: "750s",
  year: 2024,
};

const { brand, model, year } = carInfo;
console.log(brand);
console.log(model);
console.log(year);
