const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("ოპერაცია წარმატებით დასრულდა!");
  } else {
    reject("ოპერაცია ჩავარდა!");
  }
});

promise1
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("რიცხვი დადებითია");
    } else {
      reject("რიცხვი უარყოფითია ან ნულია");
    }
  });
}

checkNumber(5)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

function getRandomNumber() {
  return new Promise((resolve) => {
    const num = Math.random();
    resolve(num);
  });
}

getRandomNumber().then((num) => console.log("შემთხვევითი რიცხვი:", num));

function sqrtPromise(x) {
  return new Promise((resolve, reject) => {
    if (x >= 0) {
      resolve(Math.sqrt(x));
    } else {
      reject("უარყოფითი რიცხვი არ შეიძლება!");
    }
  });
}

sqrtPromise(16)
  .then((result) => console.log("კვადრატული ფესვი:", result))
  .catch((error) => console.log(error));

function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 წამში შესრულდა!");
    }, 3000);
  });
}

delayedMessage().then((msg) => console.log(msg));

function waitAndCheck(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("ლუწია");
      } else {
        reject("კენტია");
      }
    }, 2000);
  });
}

waitAndCheck(4)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

// Fetch არის ბრაუზერის ჩაშენებული ფუნქცია, რომელიც გამოიყენება სერვერიდან მონაცემების ასაღებად ან გასაგზავნად.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("მიღებული მონაცემი:", data))
  .catch((error) => console.log("შეცდომა:", error));

// ---------------------------------------------

// API (Application Programming Interface) არის ინტერფეისი, რომელიც საშუალებას აძლევს პროგრამებს ურთიერთქმედონ ერთმანეთთან.
// მაგალითად, ვებ API საშუალებას გვაძლევს ბრაუზერიდან მივიღოთ ან გავაგზავნოთ მონაცემები სერვერზე.
// API განსაზღვრავს წესებს, როგორ უნდა მოხდეს მონაცემების გაცვლა.

// ---------------------------------------------

// JSON (JavaScript Object Notation) არის მსუბუქი მონაცემთა გაცვლის ფორმატი.
// გამოიყენება მონაცემების სტრუქტურირებულად გადასაცემად სერვერსა და კლიენტს შორის.
// მაგალითად:
// { "name": "Ana", "age": 25 }
// JSON.stringify(obj) გარდაქმნის ობიექტს სტრინგად.
// JSON.parse(str) გარდაქმნის სტრინგს ობიექტად.
