let car = {
  brand: "Mclaren",
  model: "750s",
  color: "yellow",
  weight: 1277,
  info: function () {
    console.log(
      `the car's brand is ${this.brand} and the car is ${this.brand}${this.model} this specific model is color ${this.color} and it weight ${this.weight}kg`
    );
  },
};
console.log(car.brand);
console.log(car.model);
console.log(car.color);
console.log(car.weight);
console.log(car.info());

car.color = "white";
car.brand = "Ford";
car.model = "GT40";
car.weight = 998;
console.log(car.info());

car.mode = "racing";
