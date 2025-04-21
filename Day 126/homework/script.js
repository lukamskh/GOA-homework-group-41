const name = "Alice";
const age = 25;
const user = { name, age };
console.log(user);

const person = {
  greet() {
    console.log("Hello!");
  },
};
person.greet();
const key = "favoriteColor";
const value = "blue";
const preferences = {
  [key]: value,
};
console.log(preferences);

const firstName = "John";
const lastName = "Doe";
const fullName = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(fullName.getFullName());

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    getCarInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    },
  };
}
const car = createCar("Toyota", "Corolla", 2021);
console.log(car.getCarInfo());
