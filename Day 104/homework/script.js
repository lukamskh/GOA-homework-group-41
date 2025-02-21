function comprehensiveArrayTask(arr1, arr2, arr3) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.copyWithin(5, 0, 3);
  mergedArray.fill(0, 6);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift(100, 200);
  mergedArray.splice(2, 2, arr3);
  let slicedArray = mergedArray.slice(-5);
  return slicedArray.join(", ");
}
let resultString = comprehensiveArrayTask(
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12]
);
console.log(resultString);

let students = ["luka", "bob", "me"];
let grades = [85, 90, 78];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}

addStudent("temo", 92);
removeLastStudent();
replaceGrade(1, 95);
updateGrades(100);

let playlist = ["son1", "song1", "song2"];

function addSong(title) {
  playlist.unshift(title);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  playlist.copyWithin(playlist.length, 0, 2);
  return playlist;
}

function combinePlaylists(secondPlaylist) {
  return playlist.concat(secondPlaylist);
}

addSong("song0");
removeLastSong();
moveSongs();
let newPlaylist = combinePlaylists(["song4", "song5"]);

let cartItems = ["apples", "bananas", "cherries"];
let prices = [1.5, 2.0, 3.0];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(", ");
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}

console.log(addItem("oranges", 1.8));
console.log(removeFirstItem());
console.log(replaceItem(1, "grapes", 2.5));
console.log(createReceipt());
console.log(applyDiscount(1.0));

let library = [
  { title: "Book A", copies: 3 },
  { title: "Book B", copies: 5 },
  { title: "Book C", copies: 2 },
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function extractBooks(numberOfBooks) {
  return library.slice(0, numberOfBooks);
}

function modifyBooks() {
  if (library.length > 0) {
    library.copyWithin(library.length - 1, 0, 1);
  }
  return library;
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}

console.log(addBook({ title: "Book D", copies: 4 }));
console.log(removeLastBook());
console.log(extractBooks(2));
console.log(modifyBooks());
console.log(removeFirstBook());
console.log(addFirstBook({ title: "Book E", copies: 1 }));
