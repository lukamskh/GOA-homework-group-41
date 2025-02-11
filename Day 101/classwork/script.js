const academy = {
  name: "My Academy",
  courses: {
    course1: "html",
    course2: "js",
    course3: "python",
  },
  socialLink: "https://myacademy.com",
  reviews: {
    student1: {
      name: "Bob",
      status: "child",
      review: "A+",
    },
    student2: {
      name: "Luka",
      status: "child",
      review: "A",
    },
    student3: {
      name: "Name",
      status: "child",
      review: "F+",
    },
  },
};

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log("courses" in academy);
console.log("members" in academy);

Object.freeze(academy);

console.log(Object.isFrozen(academy));
