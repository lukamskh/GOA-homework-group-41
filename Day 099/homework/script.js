const student = {
  name: "Luka",
  age: 15,
  grade: "A+",
  isEnrolled: false,

  getInfo: function () {
    console.log(
      `student's name is ${this.name}, the student is ${this.age} years old, his grade is ${this.grade}, and he is ${this.isEnrolled}`
    );
  },

  enroll: function (enrolled) {
    this.isEnrolled = enrolled;
  },
};

student.getInfo();

function Car(brand, model, color, weight) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.weight = weight;

  this.info = function () {
    console.log(
      `The car's brand is ${this.brand} and the car is ${this.brand} ${this.model}. This specific model is color ${this.color} and it weighs ${this.weight}kg.`
    );
  };
}

let myCar = new Car("Mclaren", "750s", "yellow", 1277);
myCar.info();

myCar.color = "white";
myCar.brand = "Ford";
myCar.model = "GT40";
myCar.weight = 998;
myCar.info();

const library = {
  name: "library",
  location: "earth",
  books: [
    {
      title: "me",
      author: "me",
      year: 2009,
    },
    {
      title: "you",
      author: "him",
      year: 2001,
    },
    {
      title: "them",
      author: "it",
      year: 1925,
    },
  ],

  listBooks: function () {
    this.books.forEach((book) => {
      console.log(
        `This book's name is "${book.title}", it was written by "${book.author}" in the year ${book.year}. You can find this book at ${this.location}.`
      );
    });
  },
};

library.listBooks();
