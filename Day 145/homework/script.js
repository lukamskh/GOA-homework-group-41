const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 500));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Third"), 1500));

Promise.all([p1, p2, p3]).then((results) => {
  console.log("Promise.all results:", results);
});

const p4 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const p5 = new Promise((_, reject) => setTimeout(() => reject("Failed!"), 700));
const p6 = new Promise((resolve) => setTimeout(() => resolve("Third"), 1500));

Promise.all([p4, p5, p6])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.log("Promise.all error:", error);
  });
