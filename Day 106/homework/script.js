function isLeap(year) {
  if (year % 400 === 0) {
    return "Leap Year!";
  } else if (year % 100 === 0) {
    return "Not Leap Year!";
  } else if (year % 4 === 0) {
    return "Leap Year!";
  } else {
    return "Not Leap Year!";
  }
}

function FizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  }
}

FizzBuzz(10);
