const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 50 },
  { name: "Charger", price: 20 },
];

const productNames = products.map((product) => product.name);
console.log("Product Names:", productNames);

const affordableProducts = products.filter((product) => product.price < 100);
console.log("Affordable Products:", affordableProducts);

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalPrice);

const productNamesReversed = products.reduceRight(
  (acc, product) => acc + (acc ? " - " : "") + product.name,
  ""
);
console.log("Product Names Reversed:", productNamesReversed);
