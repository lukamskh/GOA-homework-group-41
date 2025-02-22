let nestedArray = ["luka", ["me", ["saba", "him", ["name", 4]]]];
let flatArray = nestedArray.flat();
console.log(flatArray);

let fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray);

function checkElement(array, value) {
  return array.includes(value);
}
console.log(checkElement([1, 2, 3, 4], 2));

function findIndexOfElement(array, value) {
  return array.indexOf(value);
}

console.log(findIndexOfElement([1, 2, 3, 4], 3));
function findLastIndexOfElement(array, value) {
  return array.lastIndexOf(value);
}