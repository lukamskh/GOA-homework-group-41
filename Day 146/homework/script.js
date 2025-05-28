const greetPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Bonjour"), 2000);
});
greetPromise.then(console.log);

const luka = new Promise((res) => setTimeout(() => res("Luka"), 1000));
const bob = new Promise((res) => setTimeout(() => res("Bob"), 2000));
const bob2 = new Promise((res) => setTimeout(() => res("Bob2"), 1500));
Promise.all([luka, bob, bob2]).then((names) => {
  console.log(`Everyone arrived: [${names.join(", ")}]`);
});

const server1 = new Promise((res) =>
  setTimeout(() => res("Server1"), Math.random() * 2000 + 1000)
);
const server2 = new Promise((res) =>
  setTimeout(() => res("Server2"), Math.random() * 2000 + 1000)
);
const server3 = new Promise((res) =>
  setTimeout(() => res("Server3"), Math.random() * 2000 + 1000)
);
Promise.race([server1, server2, server3]).then(console.log);
