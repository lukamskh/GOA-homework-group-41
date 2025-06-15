const person = {
    name: "Bob",
    age: 1,
    city: "earth",
    hobbies: ["reading", "coding", "stealing"]
};

console.log(person.name);
console.log(person["age"]);
console.log(person.city);
console.log(person.hobbies);

const jsonString = '{"username":"bob123","email":"bob@example.com"}';
const userObj = JSON.parse(jsonString);
console.log(userObj.username);
console.log(userObj.email);

const car = {
    brand: "Toyota",
    model: "Corolla"
};
car.color = "red";
const carJson = JSON.stringify(car);
console.log(carJson);

const users = [
    { name: "Anna", age: 22 },
    { name: "Giorgi", age: 28 },
    { name: "Nino", age: 30 }
];

for (let i = 0; i < users.length; i++) {
    console.log("Name:", users[i].name, "Age:", users[i].age);
}