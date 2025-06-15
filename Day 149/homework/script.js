const jsonString = '{"name": "Luna", "age": 4, "type": "cat"}';

const pet = JSON.parse(jsonString);

console.log("Name:", pet.name);
console.log("Age:", pet.age);

pet.color = "black";

const user = {
    username: "masterjaneza",
    loggedIn: true,
    favorites: ["React", "Tailwind", "JSON"]
};

const userJson = JSON.stringify(user);

console.log(userJson);

const userWithFunction = {
    username: "masterjaneza",
    sayHello: function() { return "Hello!"; }
};
const userWithFunctionJson = JSON.stringify(userWithFunction);
console.log(userWithFunctionJson);

const fixedJson = `{
    "name": "Broken Object",
    "age": 27,
    "hobbies": ["debugging", "fixing bugs"]
}`;
