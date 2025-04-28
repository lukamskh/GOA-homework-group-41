function sumNumbers(...words) {
  if (words.length === 0) {
    return 0;
  }
  return words.reduce((num1, num2) => num1 + num2, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 9));