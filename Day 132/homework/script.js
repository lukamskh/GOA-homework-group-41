class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name);
myDog.bark();

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.model);
car1.displayInfo();

console.log(car2.model);
car2.displayInfo();

class Person {
  constructor(name, age = 30) {
    this.name = name;
    this.age = age;
  }
}
