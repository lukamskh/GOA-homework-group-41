const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log("all numbers are even:", allEven);

const strings = ["apple", "banana", "cherry", "pineapple"];
const hasLongString = strings.some((str) => str.length > 5);
console.log("array contains a string longer than 5 characters:", hasLongString);

const originalNumbers = [1, 2, 3, 4];
const doubledNumbers = [];
originalNumbers.forEach((num) => doubledNumbers.push(num * 2));
console.log("aoubled numbers:", doubledNumbers);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 30 },
];
const allAdults = users.every((user) => user.age >= 18);
console.log("All users are 18 or older:", allAdults);

const products = [
  { name: "Book A", price: 15 },
  { name: "Book B", price: 25 },
  { name: "Book C", price: 10 },
];
const hasAffordableProduct = products.some((product) => product.price < 20);
console.log("There is at least one affordable product:", hasAffordableProduct);

const customerOrders = [
  {
    orderId: 1,
    customerId: 101,
    items: [
      { title: "Book A", price: 12, quantity: 1 },
      { title: "Book B", price: 15, quantity: 2 },
    ],
    shippingAddress: "123 Main St",
    isDelivered: true,
  },
  {
    orderId: 2,
    customerId: 102,
    items: [],
    shippingAddress: "456 Elm St",
    isDelivered: false,
  },
  {
    orderId: 3,
    customerId: 103,
    items: [
      { title: "Book C", price: 8, quantity: 1 },
      { title: "Book D", price: 20, quantity: 1 },
    ],
    shippingAddress: "789 Oak St",
    isDelivered: false,
  },
];
const allOrdersHaveItems = customerOrders.every(
  (order) => order.items.length > 0
);
console.log("All orders have items:", allOrdersHaveItems);

const hasPendingDelivery = customerOrders.some((order) => !order.isDelivered);
console.log("There is at least one pending delivery:", hasPendingDelivery);

customerOrders.forEach((order) => {
  console.log(`Processing Order ID: ${order.orderId}`);
  order.items.forEach((item) => {
    console.log(`${item.title} (Quantity: ${item.quantity})`);
  });
  const allExpensive = order.items.every((item) => item.price > 10);
  console.log(
    `Order ${order.orderId} contains only expensive books: ${allExpensive}`
  );
});

customerOrders.forEach((order) => {
  console.log(`Processing Order ID: ${order.orderId}`);
  order.items.forEach((item) => {
    console.log(`${item.title} (Quantity: ${item.quantity})`);
  });
  const allExpensive = order.items.every((item) => item.price > 10);
  console.log(
    `Order ${order.orderId} contains only expensive books: ${allExpensive}`
  );
  const hasMultipleCopies = order.items.some((item) => item.quantity > 1);
  console.log(
    `Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`
  );
});
