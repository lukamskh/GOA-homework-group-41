function getArrayLength(arr) {
  return arr.length;
}

function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function pushValueToArray(arr, value) {
  return arr.push(value);
}

function popFromArray(arr) {
  return arr.pop();
}

function concatenateAndPush(arr1, arr2, value) {
  const newArray = arr1.concat(arr2);
  newArray.push(value);
  return newArray;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getEvenIndexedElements(arr) {
  const evenIndexedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndexedArray.push(arr[i]);
    }
  }

  return evenIndexedArray;
}

function getStringLengths(arr) {
  const lengthsArray = [];
  for (let i = 0; i < arr.length; i++) {
    lengthsArray.push(arr[i].length);
  }
  return lengthsArray;
}
