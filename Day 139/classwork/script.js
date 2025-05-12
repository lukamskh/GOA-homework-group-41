class NumberProcessor {
    constructor(numbers) {
        this.numbers = numbers;
    }

    calculateSums() {
        return this.numbers.map(arr => arr.reduce((sum, num) => sum + num));
    }
}

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const processor = new NumberProcessor(numbers);
const sums = processor.calculateSums();

console.log(sums);