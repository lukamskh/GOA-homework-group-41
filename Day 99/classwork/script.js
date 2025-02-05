const person = {
  user: {
    name: "ლუკა",
    surname: "მსხალაძე",
    age: 15,
    weight: 71,
    height: 175,
  },
  family: {
    mother: {
      name: "სოფო",
      surname: "ტიკარაძე",
      age: 45,
      weight: "არ ვიცი",
      height: 178,
    },
    father: {
      name: "ავთო",
      surname: "მსხალაძე",
      age: 47,
      weight: "არ ვიცი",
      height: 184,
    },
    brother: {
      name: "საბა",
      surname: "მსხალაძე",
      age: 12,
      weight: "არ ვიცი",
      height: 158,
    },
  },
};

console.log(person.user);
console.log(person.family.mother);
console.log(person.family.father);
console.log(person.family.brother);
