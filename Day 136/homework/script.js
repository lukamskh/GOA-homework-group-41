const countriesAndCapitals = new Map([
    ["USA", "Washington, D.C."],
    ["France", "Paris"],
    ["Japan", "Tokyo"],
    ["India", "New Delhi"],
    ["Germany", "Berlin"]
]);

countriesAndCapitals.forEach((capital, country) => {
    console.log(`The capital of ${country} is ${capital}`);
});

const fruitsAndColors = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Grapes", "Purple"]
]);

fruitsAndColors.set("Orange", "Orange");
fruitsAndColors.set("Lemon", "Yellow");

fruitsAndColors.delete("Banana");

fruitsAndColors.forEach((color, fruit) => {
    console.log(`${fruit}: ${color}`);
});

const keyToCheck = "Apple";
console.log(keyToCheck);
console.log(fruitsAndColors.has(keyToCheck) ? "Yes" : "No");

for (const [country, capital] of countriesAndCapitals) {
    console.log(`The capital of ${country} is ${capital}`);
}

const countriesArray = Array.from(countriesAndCapitals);
console.log(countriesArray);

const newCountriesMap = new Map(countriesArray);
newCountriesMap.forEach((capital, country) => {
    console.log(`The capital of ${country} is ${capital}`);
});

function sortMapByKeys(map) {
    return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

const sortedCountriesMap = sortMapByKeys(countriesAndCapitals);
sortedCountriesMap.forEach((capital, country) => {
    console.log(`The capital of ${country} is ${capital}`);
});

function countWordOccurrences(sentence) {
    const words = sentence.split(" ");
    const wordCountMap = new Map();
    words.forEach(word => {
        wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
    });
    return wordCountMap;
}

const sentence = "this is a test and this is fun";
const wordOccurrences = countWordOccurrences(sentence);
wordOccurrences.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});