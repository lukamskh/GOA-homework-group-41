const alice = new Promise((resolve) =>
  setTimeout(() => resolve("Hi from Alice"), 300)
);
const bob = new Promise((resolve) =>
  setTimeout(() => resolve("Hi from Bob"), 200)
);
const charlie = new Promise((resolve) =>
  setTimeout(() => resolve("Hi from Charlie"), 100)
);

Promise.all([alice, bob, charlie]).then((words) => {
  console.log(words);
});

Promise.race([alice, bob, charlie]).then((winner) => {
  console.log(winner);
});
