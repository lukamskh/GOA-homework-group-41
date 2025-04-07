const students = [
  { name: "Luka", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "notBob", grade: 78 },
  { name: "Dato", grade: 65 },
  { name: "Saba", grade: 95 },
];

let allPassing = students.every(student => student.grade >= 70);
console.log(allPassing);

let hasFailing = students.some(student => student.grade < 65);
console.log(hasFailing);

students.forEach(student => {
  console.log(`Student: ${student.name}`);
});

let honorRoll = [];
students.forEach(student => {
  if (student.grade >= 90) {
    honorRoll.push(student.name);
  }
});
console.log(honorRoll);
