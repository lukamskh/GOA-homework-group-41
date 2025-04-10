// Sample studentData array
const studentData = [
  {
    id: 1,
    name: "Alice",
    grades: {
      Math: [90, 85, 88],
      Science: [92, 80, 84],
      History: [70, 75, 78],
    },
    attendance: [true, true, false, true, true],
    extracurricular: ["Debate Team", "Soccer"],
  },
  {
    id: 2,
    name: "Bob",
    grades: {
      Math: [60, 65, 58],
      Science: [72, 68, 70],
      History: [50, 55, 60],
    },
    attendance: [true, false, false, true, false],
    extracurricular: [],
  },
  {
    id: 3,
    name: "Charlie",
    grades: {
      Math: [100, 95, 98],
      Science: [88, 90, 92],
      History: [85, 87, 89],
    },
    attendance: [true, true, true, true, true],
    extracurricular: ["Debate Team", "Chess Club"],
  },
];

studentData.forEach((student) => {
  console.log(`Hello, ${student.name}!`);
});

const studentNames = studentData.map((student) => student.name);
console.log(studentNames);

const studentAverages = studentData.map((student) => {
  const totalScores = Object.values(student.grades).reduce(
    (acc, scores) => acc.concat(scores),
    []
  );
  const average =
    totalScores.reduce((sum, score) => sum + score, 0) / totalScores.length;
  return { name: student.name, average: average };
});
console.log(studentAverages);

const highPerformingStudents = studentAverages.filter(
  (student) => student.average >= 85
);
console.log(highPerformingStudents);

const strugglingStudents = studentData.filter((student) =>
  Object.values(student.grades).some((subjectScores) =>
    subjectScores.every((score) => score < 70)
  )
);
console.log(strugglingStudents);

const totalExtracurriculars = studentData.reduce(
  (total, student) => total + student.extracurricular.length,
  0
);
console.log(totalExtracurriculars);

const subjectAverages = Object.keys(studentData[0].grades).map((subject) => {
  const totalScores = studentData.reduce(
    (sum, student) =>
      sum + (student.grades[subject]?.reduce((a, b) => a + b, 0) || 0),
    0
  );
  const totalCount = studentData.reduce(
    (count, student) => count + (student.grades[subject]?.length || 0),
    0
  );
  return { subject, average: totalScores / totalCount };
});
const highestAverageSubject = subjectAverages.reduce(
  (max, subject) => (subject.average > max.average ? subject : max),
  { average: 0 }
).subject;
console.log(highestAverageSubject);

const debateTeamNames = studentData
  .filter((student) => student.extracurricular.includes("Debate Team"))
  .map((student) => student.name)
  .reduceRight((str, name) => (str ? `${str} and ${name}` : name), "");
console.log(debateTeamNames);

const allHaveGoodAttendance = studentData.every((student) => {
  const attendanceRate =
    student.attendance.filter((day) => day).length / student.attendance.length;
  return attendanceRate >= 0.5;
});
console.log(allHaveGoodAttendance);

const hasInactiveStudent = studentData.some(
  (student) => student.extracurricular.length === 0
);
console.log(hasInactiveStudent);

studentData.forEach((student) => {
  Object.entries(student.grades).forEach(([subject, scores]) => {
    if (scores.includes(100)) {
      console.log(
        `Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`
      );
    }
  });
});
