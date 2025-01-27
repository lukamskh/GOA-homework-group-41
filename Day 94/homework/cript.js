function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

function requestEmail() {
  const email = prompt("გთხოვთ, შეიყვანეთ თქვენი ელექტრონული ფოსტა:");
  if (email) {
    console.log("access granted");
  }
}

function compareNumbers(num1, num2) {
  if (num1 === num2) {
    console.log("რიცხვები უდრის ერთმანეთს.");
  } else if (num1 > num2) {
    console.log(num1 + " არის დიდი " + num2 + "-ზე.");
  } else {
    console.log(num2 + " არის დიდი " + num1 + "-ზე.");
  }
}

function financialPlan() {
  let age = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი: "));
  let gender = prompt("გთხოვთ, შეიყვანეთ თქვენი სქესი (ქალი ან კაცი): ");
  let income = parseFloat(
    prompt("გთხოვთ, შეიყვანეთ თქვენი შემოსავალი (ლარებში): ")
  );

  if (age >= 18) {
    if (gender === "ქალი") {
      if (income > 5000) {
        console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
      } else if (income > 3000) {
        console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
        ა;
      } else {
        console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
      }
    } else if (gender === "კაცია") {
      if (income > 6000) {
        console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
      } else if (income > 4000) {
        console.log("შემოსავალი სტაბილურია");
      } else {
        console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
      }
    } else {
      console.log("გთხოვთ, შეიყვანეთ სწორი სქესი (ქალი/კაცა).");
    }
  } else {
    console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
  }
}

function financialPlan() {
  let age = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი: "));
  let gender = prompt("გთხოვთ, შეიყვანეთ თქვენი სქესი: ");
  let income = parseFloat(
    prompt("გთხოვთ, შეიყვანეთ თქვენი შემოსავალი (ლარებში): ")
  );

  switch (true) {
    case age < 18:
      console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
      break;

    case age >= 18:
      switch (gender) {
        case "ქალი":
          switch (true) {
            case income > 5000:
              console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
              break;
            case income > 3000:
              console.log(
                "ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო."
              );
              break;
            case income <= 3000:
              console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
              break;
            default:
              console.log("გთხოვთ, შეიყვანეთ სწორი შემოსავლის ინფორმაცია.");
          }
          break;

        case "მამაკაცი":
          switch (true) {
            case income > 6000:
              console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
              break;
            case income > 4000:
              console.log("შემოსავალი სტაბილურია");
              break;
            case income <= 4000:
              console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
              break;
            default:
              console.log("გთხოვთ, შეიყვანეთ სწორი შემოსავლის ინფორმაცია.");
          }
          break;

        default:
          console.log("გთხოვთ, შეიყვანეთ სწორი სქესი");
      }
      break;

    default:
      console.log("გთხოვთ, შეიყვანეთ სწორი ინფორმაცია.");
  }
}

function evaluateUser() {
  let age = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი: "));
  let score = parseInt(
    prompt("გთხოვთ, შეიყვანეთ თქვენი შეფასება (0-დან 100-მდე): ")
  );
  let result =
    age < 18
      ? "შენც ბავშვი ხარ, მაგრამ можешь წარმატებას მიაღწიო"
      : score > 50
      ? "თქვენ წარმატებული ხართ"
      : "გჭირდებათ მეტი სწავლა";
  console.log(result);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    sum += i;
    console.log(i + " ");
  }
}

let i = 1;

while (i <= 100) {
  if (isPrime(i)) {
    sum += i;
    console.log(i + " ");
  }
  i++;
}
