const sum = (a, b = 0) => a + b;
console.log(sum(5, 3));
console.log(sum(5));

const getFullName = ({ firstName, lastName = "Doe" }) =>
  `${firstName} ${lastName}`;
console.log(getFullName({ firstName: "John", lastName: "Smith" }));
console.log(getFullName({ firstName: "Jane" }));

const sumArray = (arr = [1, 2, 3]) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([4, 5, 6]));
console.log(sumArray([]));

const concatenateStrings = (str1, str2 = "") => str1 + str2;
console.log(concatenateStrings("Hello", "World"));
console.log(concatenateStrings("Hello"));

const executeFunction = (fn = () => 10) => fn();
console.log(executeFunction(() => 5));
console.log(executeFunction());
