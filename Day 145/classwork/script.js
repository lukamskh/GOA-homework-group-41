const promise1 = Promise.resolve(true);
const promise2 = Promise.resolve(true);
const promise3 = Promise.resolve(true);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    if (results.every(Boolean)) {
      console.log("Success");
    } else {
      console.log("Failure");
    }
  })
  .catch(() => {
    console.log("Failure");
  });
