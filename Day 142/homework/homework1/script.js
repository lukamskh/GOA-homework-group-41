let score = 0;

function increaseScore() {
  score += 10;
}

increaseScore();
increaseScore();
console.log(score); // 20

function secretCode() {
  let code = '1234';
}
secretCode();
console.log(code);

let name = "World";

function greet() {
  let name = "Alice";
  console.log(name);
}

greet();
console.log(name);

function counterGame() {
  let counter = 0;
  counter += 1;
  console.log(counter);
}

counterGame();
counterGame();

function test() {
  undeclaredVar = 42;
}
test();
console.log(undeclaredVar);

// გლობალური ცვლადი არ არის ის ცვლადი, რომელიც გამოცხადებულია ფუნქციის ან ბლოკის შიგნით და მხოლოდ იქიდან არის ხელმისაწვდომი.
// ლოკალური ცვლადი არ არის ის ცვლადი, რომელიც გამოცხადებულია გლობალურ scope-ში და ხელმისაწვდომია ყველგან.

