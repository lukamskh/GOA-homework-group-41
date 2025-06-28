let promise1 = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve(res);
  } else {
    reject(err);
  }
});
promise1.then(function (res, err) {
  console.log(res);
  console.log(err);
});

let promise2 = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve(res);
  } else {
    reject(err);
  }
});
promise2.then(function (res, err) {
  console.log(res);
  console.log(err);
});

let promise3 = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve(res);
  } else {
    reject(err);
  }
});
promise3.then(function (res, err) {
  console.log(res);
  console.log(err);
});