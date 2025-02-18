function processFruits(fruits) {
  console.log(fruits);
  let citrus = fruits.slice(1, 3);
  console.log(citrus);
  fruits.splice(0, 3, "fig", "fig");
  console.log(fruits);
  let fruitString = fruits.join("-");
  console.log(fruitString);
}

processFruits(["banana", "apple", "pear"]);
