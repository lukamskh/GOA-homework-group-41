const promise1 = new Promise((resolve) => {
  resolve("Hello, Promise!");
});
promise1.then((message) => console.log(message));

const promise2 = new Promise((_, reject) => {
  reject("Something went wrong!");
});
promise2.catch((error) => console.log(error));

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});
promise3.then((message) => console.log(message));

const promise4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});
promise4
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const promise5 = new Promise((resolve) => {
  resolve(5);
});
promise5
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((result) => console.log(result));

const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 1000);
});
fetchData.then((data) => console.log(data));
