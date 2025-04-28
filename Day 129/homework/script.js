function filterAndSum(threshold, ...numbers) {
  const filteredNumbers = numbers.filter((num) => num > threshold);
  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

console.log(filterAndSum(5, 1, 6, 2, 8, 3, 9));

const product = {
  id: 101,
  name: "Laptop",
  price: 1200,
  brand: "TechCorp",
  color: "Silver",
  weight: "2kg",
};

const { id, name, ...details } = product;

console.log(id);
console.log(name);
console.log(details);

function combineArrays(firstString, ...arrays) {
  const combinedArray = [firstString];

  for (const array of arrays) {
    combinedArray.push(...array);
  }

  return combinedArray;
}

console.log(combineArrays("Start", [1, 2], [3, 4], [5, 6]));

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

const numbers = [10, 20, 30];
const copiedNumbers = [...numbers];
copiedNumbers.push(40, 50);
console.log(numbers);
console.log(copiedNumbers);

function getMax(a, b, c) {
  return Math.max(a, b, c);
}

const values = [25, 10, 35, 5];
const max = getMax(...values.slice(0, 3));
console.log(max);
