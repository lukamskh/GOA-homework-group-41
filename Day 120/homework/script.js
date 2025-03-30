let person = {
  name1: `luka`,
  age: `15`,
  city: `rustavi`,
};

for (let i in person) {
  console.log(i, person[i]);
}

let price = {
  price1: 10,
  price2: 20,
  price3: 30,
};

for (let i in price) {
  console.log((price[i] += price[i]));
}

let info = {
    str1: `hello`,
    int1: 10,
    Boolean1: 12.5,
};

for (let i in info) {
    if (Number.isInteger(info[i])) {
        console.log(info[i]);
    }
}


let books = {
    name1: `bob`,
    book1: `book name1`,
    name2: `not bob`,
    book2: `book name2`
};

let bookNames = [];

for (let i in books) {
    if (i.startsWith('book')) {
        bookNames.push(books[i]);
    }
}

console.log(bookNames);


let numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);


let myString = "Hello, World!";

for (let char of myString) {
  console.log(char);
}


let strings = ["apple", "banana", "cat", "bob", "luka"];

for (let str of strings) {
  if (str.length > 5) {
    console.log(str);
  }
}


let numbers1 = [2, 4, 6, 8, 10];

let squares = [];
for (let num of numbers1) {
  squares.push(num * num);
}

console.log(squares);