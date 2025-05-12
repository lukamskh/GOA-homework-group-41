const set1 = new Set();
set1.add(1).add(2).add(3);
console.log(set1.has(2));
console.log(set1.size);
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1);

const set2 = new Set([1, 2, 3, 4, 5]);
set2.forEach(value => console.log(value));

const arrayFromSet = [...set2];
console.log(arrayFromSet);

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

const numbersSet = new Set([1, 2, 3, 4, 5]);
const fruits = new Set(["apple", "banana"]);
fruits.add("orange");
console.log(fruits);

fruits.add("apple");
console.log(fruits);

console.log(fruits.has("banana"));
fruits.delete("banana");
console.log(fruits);

const colors = new Set(["red", "blue", "green"]);
for (const color of colors) console.log(color);

const namesSet = new Set(["Alice", "Bob", "Charlie"]);
const namesArray = [...namesSet];
console.log(namesArray);

const arrayWithDuplicates = [1, 2, 2, 3, 3, 4];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray);

const letters = ['a', 'b', 'a', 'c', 'b'];
const uniqueLettersCount = new Set(letters).size;
console.log(uniqueLettersCount);

const animals = new Set(["cat", "dog", "parrot"]);
console.log(animals.has("dog"));
animals.delete("parrot");
console.log(animals.size);
animals.clear();
console.log(animals);

const arrayToSet = new Set([1, 2, 2, 3, 4, 4]);
console.log(arrayToSet);

const setToArray = [...arrayToSet];
console.log(setToArray);

function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}
console.log(hasDuplicates([1, 2, 3, 3]));

function getUniqueWords(sentence) {
    return new Set(sentence.toLowerCase().split(" "));
}
console.log(getUniqueWords("The sun shines and the moon glows"));

function findIntersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}
console.log(findIntersection(new Set([1, 2, 3]), new Set([2, 3, 4])));

function findDifference(setA, setB) {
    return new Set([...setA].filter(x => !setB.has(x)));
}
console.log(findDifference(new Set([1, 2, 3]), new Set([2, 3, 4])));

function countUniqueCharacters(str) {
    return new Set(str).size;
}
console.log(countUniqueCharacters("hello"));

function haveSameUniqueElements(arr1, arr2) {
    return new Set(arr1).size === new Set(arr2).size;
}
console.log(haveSameUniqueElements([1, 2, 3], [3, 2, 1]));

function removeDuplicateSubarrays(arr) {
    return [...new Set(arr.map(JSON.stringify))].map(JSON.parse);
}
console.log(removeDuplicateSubarrays([[1, 2], [2, 3], [1, 2]]));

function filterUniqueObjectsByKey(arr, key) {
    const seen = new Set();
    return arr.filter(item => {
        const val = item[key];
        if (seen.has(val)) return false;
        seen.add(val);
        return true;
    });
}
console.log(filterUniqueObjectsByKey([{ id: 1 }, { id: 2 }, { id: 1 }], "id"));

function countUniqueVisitors(usernames) {
    return new Set(usernames).size;
}
console.log(countUniqueVisitors(["user1", "user2", "user1", "user3"]));

function numbersDivisibleBy3And5(arr) {
    return new Set(arr.filter(num => num % 3 === 0 && num % 5 === 0));
}
console.log(numbersDivisibleBy3And5([15, 30, 45, 10, 20]));

function areAllCharactersUnique(word) {
    return new Set(word).size === word.length;
}
console.log(areAllCharactersUnique("lamp"));
console.log(areAllCharactersUnique("moon"));
