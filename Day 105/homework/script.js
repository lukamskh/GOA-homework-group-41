let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [
  [11, 12],
  [13, [14, 15]],
];
let combinedArray = arr1.concat(arr2);
combinedArray.copyWithin(5, 0, 3);
combinedArray.fill(0, 6);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100, 200);
combinedArray.splice(2, 2, "x", "y", "z");
let slicedArray = combinedArray.slice(-5);
let joinedString = slicedArray.join(",");
let flatArray = nestedArray.flat();
let hasEight = flatArray.includes(8);
let indexOfNine = flatArray.indexOf(9);
let lastIndexOfSeven = flatArray.lastIndexOf(7);
console.log({
  combinedArray,
  joinedString,
  flatArray,
  hasEight,
  indexOfNine,
  lastIndexOfSeven,
});
let arr3 = [1, 2, 3, 4];
let arr4 = [5, 6, 7, 8];
let combinedArray2 = arr3.concat(arr4);
combinedArray2.copyWithin(4, 0, 2);
combinedArray2.fill(0, 2, 4);
combinedArray2.pop();
combinedArray2.shift();
combinedArray2.unshift(10, 20);
combinedArray2.splice(2, 2, 30, 40);
let slicedArray2 = combinedArray2.slice(-3);
let joinedString2 = slicedArray2.join("-");
let flatArray2 = [
  [1, 2],
  [3, 4],
  [
    [5, 6],
    [7, 8],
  ],
].flat();
let hasNine = flatArray2.includes(9);
let indexOfTen = flatArray2.indexOf(10);
let lastIndexOfNine = flatArray2.lastIndexOf(9);
flatArray2.push(13);
console.log({
  combinedArray2,
  joinedString2,
  flatArray2,
  hasNine,
  indexOfTen,
  lastIndexOfNine,
});
let numbers = [10, 20, 30, 40, 50];
let secondArray = [60, 70, 80];
let concatenatedNumbers = numbers.concat(secondArray);
numbers.copyWithin(-2, 1, 3);
numbers.fill(100, 0, 3);
let lastPopped = numbers.pop();
let firstShifted = numbers.shift();
numbers.unshift(5, 15);
let joinedNumbers = numbers.join("-");
let slicedNumbers = numbers.slice(1, 3);
numbers.splice(1, 2, 200, 300);
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatNested = nestedArr.flat();
let includesFifty = numbers.includes(50);
let indexOfThirty = numbers.indexOf(30);
let lastIndexOfTwenty = numbers.lastIndexOf(20);
numbers.push(90, 100);
console.log({
  concatenatedNumbers,
  lastPopped,
  firstShifted,
  joinedNumbers,
  slicedNumbers,
  flatNested,
  includesFifty,
  indexOfThirty,
  lastIndexOfTwenty,
});
let people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
let morePeople = [
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];
let allPeople = people.concat(morePeople);
allPeople.copyWithin(-2, 0, 2);
allPeople.fill({ id: 0, name: "Unknown" }, 0, 2);
let removedPerson = allPeople.pop();
let firstRemovedPerson = allPeople.shift();
allPeople.unshift({ id: 6, name: "Frank" }, { id: 7, name: "Grace" });
let peopleString = allPeople.map((person) => person.name).join(",");
let somePeople = allPeople.slice(1, 3);
allPeople.splice(2, 2, { id: 10, name: "Ivan" }, { id: 11, name: "Judy" });
let nestedArray3 = [
  [1, 2],
  [3, 4],
  [
    [5, 6],
    [7, 8],
  ],
];
let flatArray3 = nestedArray3.flat();
let includesEve = allPeople.some((person) => person.id === 5);
let indexOfCharlie = allPeople.findIndex((person) => person.id === 3);
let lastIndexOfBob = allPeople.findLastIndex((person) => person.id === 2);
flatArray3.push({ id: 8, name: "Hank" });

console.log({
  allPeople,
  removedPerson,
  firstRemovedPerson,
  peopleString,
  somePeople,
  flatArray3,
  includesEve,
  indexOfCharlie,
  lastIndexOfBob,
});
