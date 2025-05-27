function randomNum() {
  return Math.floor(Math.random() * 101);
}

function checkNumber() {
  return new Promise((resolve, reject) => {
    const num = randomNum();
    console.log(num);
    if (num > 50) {
      resolve("above 50");
    } else {
      reject("below 50");
    }
  });
}

checkNumber()
  .then((Yea) => console.log(Yea))
  .catch((Nah) => console.log(Nah));

new Promise((resolve) => resolve(5))
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((result) => console.log(result));