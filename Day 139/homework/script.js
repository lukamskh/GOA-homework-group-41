class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  static fromFahrenheit(f) {
    return new Temperature((f - 32) / 1.8);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  static isValidRadius(r) {
    return typeof r === "number" && r > 0;
  }
}

class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  get info() {
    return `${this.brand} ${this.model} is going at ${this.speed} km/h`;
  }

  static compareSpeed(car1, car2) {
    return car1.speed > car2.speed ? car1 : car2;
  }
}

class BankAccount {
  static totalAccountsCreated = 0;

  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    BankAccount.totalAccountsCreated++;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }
}

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  get summary() {
    return `${this.title} by ${this.author} - ${this.pages} pages`;
  }

  static isLongBook(book) {
    return book.pages > 300;
  }
}
