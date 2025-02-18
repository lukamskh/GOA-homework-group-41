function modifyArray(numsArray, strArray) {
  let combine = numsArray.concat(strArray);
  console.log(combine);
  let copyWithin = combine.copyWithin(4, 0, 3);
  console.log(copyWithin);
  let fill = combine.fill("filled", 2, 4);
  console.log(fill);
  combine.pop();
  console.log(combine);
  combine.shift();
  console.log(combine);
  combine.unshift(100, 200);
  console.log(combine);
}

modifyArray(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["luka", "mskhaladze", "sayHello", "bob"]
);

let people = ["luka", "bob", "me", "you"];
let places = ["London", "England", "Paris", "France"];
let mergedArray = people.concat(places);
console.log(mergedArray);
mergedArray.copyWithin(2, 0, 2);
console.log(mergedArray);
mergedArray.fill("New York", 4, 6);
console.log(mergedArray);
mergedArray.pop();
console.log(mergedArray);
mergedArray.shift();
console.log(mergedArray);
mergedArray.unshift("Charlie", "David");
console.log(mergedArray);

let mixedArray = [
  1,
  2,
  3,
  4,
  "five",
  "six",
  7,
  8,
  9,
  "ten",
  "eleven",
  "12",
  "thirteen",
  "fourteen",
  "fifteen",
  "16",
  "17",
  "18",
  3,
  "19",
  "twenty",
  "21",
  "22",
  "23",
  "24",
  "25",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
  3,
  "thirty-one",
  "thirty-two",
  "thirty-three",
  "thirty-four",
  "thirty-five",
  5,
  "thirty-six",
  "thirty-seven",
  "38",
  3,
  "39",
  "forty",
  "forty-one",
  "forty-two",
  "forty-three",
  "forty-four",
  "forty-five",
];
let extendedArray = mixedArray.concate(true, false);
console.log(extendedArray);
extendedArray.copyWithin(0, 3, 4);
console.log(extendedArray);
extendedArray.fill(0, 4, 6);
console.log(extendedArray);
extendedArray.pop();
console.log(extendedArray);
extendedArray.shift();
console.log(extendedArray);
extendedArray.unshift(null, undefined);
console.log(extendedArray);
