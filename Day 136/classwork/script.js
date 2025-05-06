const myMap = new Map();
myMap.set("name", "luka");
myMap.set("age", 15);
myMap.set("living", true);
myMap.set("hobbies", ["haming", "coding"]);
myMap.set("address", { city: "Rustavi", zip: 1 });

myMap.delete("living");
console.log(myMap.get("living"));
console.log(myMap);
