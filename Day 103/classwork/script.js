function modifyArray(array1, array2) {
  let concatArray = array1.concat(array2);
  console.log(concatArray);
  let copy = concatArray.copyWithin(9, 0, 1);
  console.log(copy);
  let fillin = concatArray.fill(0, 7, 9);
  console.log(fillin);
  let lastElement = concatArray.pop();
  console.log(lastElement);
  let firstElement = concatArray.shift();
  console.log(firstElement);
  console.log(concatArray);
  concatArray.unshift(10, 20);
  console.log(concatArray);
}

modifyArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
