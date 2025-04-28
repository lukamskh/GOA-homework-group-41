function Add(...numbers) {
    return numbers.reduce((num1, num2) => num1 + num2, 0);
}
console.log(Add(1, 2, 3, 4, 5, 6, 7, 9));