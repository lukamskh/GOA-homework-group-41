function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

let luka = new Person("luka", 15, "nowhere");

function introduce(person) {
  console.log(
    `Hi, my name is ${person.name}. I'm ${person.age} years old and I work ${person.profession}.`
  );
}

introduce(luka);

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function getSummary(book) {
  console.log(
    `This book "${book.title}" was written by ${book.author} in ${book.year}.`
  );
}

let book1 = new Book("name", "me", 2025);
let book2 = new Book("DnD", "creator", 2019);
let book3 = new Book("books", "writer", 1999);

getSummary(book1);
getSummary(book2);
getSummary(book3);

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

function changePassword(User, newPassword) {
  User.password = newPassword;
}

function getDetails(User) {
  console.log(`name: ${User.username} | email: ${User.email}`);
}

let user1 = new User("luka", "someting@gmail.com", "4321");
let user2 = new User("bob", "bobs@gmail.com", "1234");
getDetails(user1);
getDetails(user2);
