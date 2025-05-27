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

const isInStock = false;
const productPromise = new Promise((resolve, reject) => {
  if (isInStock) {
    resolve("Product is ready to ship!");
  } else {
    reject("Out of stock.");
  }
});
productPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Checked product availability."));

const isLoggedIn = true;
const loginPromise = new Promise((resolve, reject) => {
  if (isLoggedIn) {
    resolve("Login successful");
  } else {
    reject("Access denied");
  }
});
loginPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Auth process completed."));

const serverPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Server responded OK");
  } else {
    reject("Server error occurred");
  }
});
serverPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Server request finished."));

const isLightOn = false;
const lightPromise = new Promise((resolve, reject) => {
  if (isLightOn) {
    resolve("The light is on");
  } else {
    reject("The room is dark");
  }
});
lightPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Checked the light switch."));

function shouldGoOut() {
  const isRaining = false;
  return new Promise((resolve, reject) => {
    if (!isRaining) {
      resolve("Go for a walk!");
    } else {
      reject("Better stay in today.");
    }
  });
}
shouldGoOut()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Decision made."));
