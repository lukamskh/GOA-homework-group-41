const mySet = new Set();
mySet.add("Luka");
mySet.add("Bob");
mySet.add("NotBob");

console.log(mySet);

mySet.delete("Bob");
console.log(mySet);

console.log(mySet.has("Bob"));

console.log(mySet.size);

mySet.clear();
console.log(mySet);
