const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];
const userWithId3 = users.find((user) => user.id === 3);
console.log(userWithId3);

const colors = ["red", "blue", "green", "yellow"];
colors.reverse();
console.log(colors);

const prices = [19.99, 5.49, 25.0, 10.0];
prices.sort((a, b) => b - a);
console.log(prices);

const str = "JavaScript";
const characters = Array.from(str);
console.log(characters);

const data1 = [1, 2, 3];
const data2 = "Hello, World!";
const isData1Array = Array.isArray(data1);
const isData2Array = Array.isArray(data2);
console.log(isData1Array, isData2Array);

const courses = [
  {
    id: "CS101",
    name: "Intro to Computer Science",
    students: [
      { name: "Alice", grades: [85, 90, 78] },
      { name: "Bob", grades: [70, 75, 80] },
    ],
    isActive: true,
    capacity: 50,
    credits: 3,
  },
  {
    id: "MA201",
    name: "Calculus I",
    students: [
      { name: "Charlie", grades: [95, 88, 92] },
      { name: "Diana", grades: [60, 65, 70] },
    ],
    isActive: false,
    capacity: 25,
    credits: 4,
  },
];
const studentNamesString = "Alice,Bob,Charlie,Diana";

console.log(Array.isArray(courses), Array.isArray(studentNamesString));

const allStudentNames = Array.from(studentNamesString.split(","));
console.log(allStudentNames);

courses.forEach((course) => {
  console.log(`Course ID: ${course.id}, Name: ${course.name}`);
});

const courseNames = courses.map((course) => course.name);
console.log(courseNames);

const courseAverages = courses.map((course) => ({
  id: course.id,
  averageGrade:
    course.students.reduce(
      (sum, student) =>
        sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length,
      0
    ) / course.students.length,
}));
console.log(courseAverages);

const activeCourses = courses.filter((course) => course.isActive);
console.log(activeCourses);

const calculusCourse = courses.find((course) => course.id === "MA201");
console.log(calculusCourse);

courses.forEach((course) => {
  const allStudentsHave70OrHigher = course.students.every((student) =>
    student.grades.some((grade) => grade >= 70)
  );
  console.log(
    `Course ${course.name}: All students have at least one grade >= 70? ${allStudentsHave70OrHigher}`
  );
});

const hasLowCapacityCourse = courses.some((course) => course.capacity < 30);
console.log(hasLowCapacityCourse);

const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log(coursesByCapacity);

coursesByCapacity.reverse();
console.log(coursesByCapacity);

const totalCredits = courses.reduce(
  (sum, course) => (course.isActive ? sum + course.credits : sum),
  0
);
console.log(totalCredits);

const activeCourseNamesReversed = activeCourses.reduceRight(
  (names, course) => names + (names ? " - " : "") + course.name,
  ""
);
console.log(activeCourseNamesReversed);
