function displayTime() {
  let date = new Date();
  console.log(date);
}
displayTime();

function birthday() {
  const usersByear = parseInt(prompt("Enter the year when you were born"));
  const userBmonth = parseInt(prompt("Enter your birth month (1-12)"));
  const userBday = parseInt(prompt("Enter your birth day (1-31)"));

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are 0-indexed (0-11)
  const day = today.getDate();

  let ageYears = year - usersByear;
  let ageMonths = month - userBmonth;
  let ageDays = day - userBday;
  alert(
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`
  );
}
birthday();

function dayOfTheWeek() {
  let dayIndex = prompt("Enter a num:");

  if (dayIndex === 0) {
    dayName = "Sunday";
  } else if (dayIndex === 1) {
    dayName = "Monday";
  } else if (dayIndex === 2) {
    dayName = "Tuesday";
  } else if (dayIndex === 3) {
    dayName = "Wednesday";
  } else if (dayIndex === 4) {
    dayName = "Thursday";
  } else if (dayIndex === 5) {
    dayName = "Friday";
  } else {
    dayName = "Saturday";
  }
  console.log(dayName);
}

dayOfTheWeek();

let o = 0;
function blueScreen() {
  setInterval(() => {
    console.log((o += 1));
  }, 1);
}

function DATE() {
  let date = new Date();
  setInterval(() => {
    console.log(date);
  }, 1);
}

function Random() {
  let num1 = Math.random() * 1;
  setInterval(() => {
    console.log(num1);
  }, 1);
}

function delay() {
  let num = Number(prompt("enter num in milliseconds"));
  setTimeout(() => {
    console.log(`${num} miliseconds delay`);
  }, num);
}
delay();

function hello() {
  setTimeout(() => {
    console.log("Hello");
  }, 5000);
}
hello();

setTimeout(() => {
  console.log("early?"), 1000;
});

function updateGreeting() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  let greeting;
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  console.log(greeting);
}
setInterval(updateGreeting, 1000);
